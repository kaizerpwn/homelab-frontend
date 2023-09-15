import { Session } from "next-auth";
export interface User extends Session {
    name?: string | null | undefined;
    email?: string | null | undefined;
    sub?: string;
    id?: number; 
    ime?: string;
    prezime?: string; 
    grad?: string | undefined | null; 
    iat?: number;
    exp?: number;
    jti?: string;
    image?: string | null | undefined;
}