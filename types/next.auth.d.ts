import NextAuth from "next-auth/next";

export interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null;
  id: number;
  name: string;
  surname: string;
  email: string;
  city: string;
  jwt: string;
refresh_token: string;
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
