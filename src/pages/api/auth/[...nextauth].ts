import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

interface IProfile {
    sub: string;
    'https://id.worldcoin.org/beta': {
        credential_type: string;
    };
}

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter<boolean>,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ??= "NO_ID",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ??= "NO_SECRET",
        }),
        {
            id: "worldcoin",
            name: "Worldcoin",
            type: "oauth",
            wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
            idToken: true,
            clientId: process.env.WLD_CLIENT_ID,
            clientSecret: process.env.WLD_CLIENT_SECRET,
            profile(profile: IProfile) {
                return {
                    id: profile.sub,
                    credential_type: profile["https://id.worldcoin.org/beta"].credential_type,
                }
            }
        }

    ],
}


export default NextAuth(authOptions);
