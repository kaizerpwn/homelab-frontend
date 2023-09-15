import Axios from "@/utils/Axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const options = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string, password: string };

                const res = await Axios.makeRequest.post('/user/login', { email: email, password: password }, {
                    withCredentials: true
                })

                if (res.status !== 200) {
                    return null;
                }
                const user = res.data;

                return Promise.resolve(user);
            }
        }),
    ],
    callbacks: {

        async jwt({ token, user }: any) {
            return { ...token, ...user }
        },
        async session({ session, user, token }: any) {
            return token
        },
    },
    pages: {
        signIn: "/auth/login",
    },
};

export default NextAuth(options)
