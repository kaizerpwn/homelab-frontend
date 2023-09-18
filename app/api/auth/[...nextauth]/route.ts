import axios from "axios";
import type { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
      
        const response = await axios.post(
          "http://localhost:8000/api/users/login",
          {
            email: credentials.email,
            password: credentials.password,
          }
        );
      
        const { user } = response.data;
      
        if (!user) {
          return null;
        }

        return user as User;
    }      
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token as any;
      return session
    },
    async jwt({ token, user }) {
      return {...token, ...user};
    },
  },  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
