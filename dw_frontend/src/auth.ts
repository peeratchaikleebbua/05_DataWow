import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginUserSchema } from "./core/models/auth/entity/auth.entity";
import { IAuthUser } from "./core/models/auth/use-cases/login-user.use-case";
import { loginUserController } from "./interface-adapters/Controllers/Auth/login-user.controller";
import { InputParseError } from "./core/errors/common";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "string",
          placeholder: "please enter username",
        },
      },
      authorize: async (credentials) => {
        try {
          // Validate input using Zod
          const { data: parsedCredentials, error: inputParseError } =
            loginUserSchema.safeParse({
              email: credentials?.username,
            });
          if (inputParseError) {
            throw new InputParseError("กรุณากรอกข้อมูลเข้าสู่ระบบให้ถูกต้อง", {
              cause: inputParseError,
            });
          }

          const user = await loginUserController({
            username: parsedCredentials.username,
          });

          if (!user) {
            throw new Error("User not found.");
          }

          return {
            user: user.data.user,
            accessToken: user.data.accessToken,
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          return null; // Invalid credentials or error in validation
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }) {
      // TODO: Handle Expired Token Here as well
      // if use token, then apply in jwt callback
      if (token) {
        session.account = token.user;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});

declare module "@auth/core/jwt" {
  interface JWT_Custom {
    userId: string;
    username: string;
    iat: number;
    exp: number;
    sub: string;
    jti: string;
  }
  interface JWT extends JWT_Custom {
    user: IAuthUser["user"];
    accessToken: IAuthUser["accessToken"];
  }
}

declare module "next-auth" {
  interface User {
    user: IAuthUser["user"];
    accessToken: IAuthUser["accessToken"];
  }
  interface Session {
    account: IAuthUser["user"];
    accessToken: IAuthUser["accessToken"];
  }
}
