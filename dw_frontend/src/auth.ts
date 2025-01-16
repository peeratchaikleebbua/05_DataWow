import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { IAuthUser } from "./core/models/auth/use-cases/login-user.use-case";
import { InputParseError } from "./core/errors/common";
import { loginUserController } from "./interface-adapters/controllers/auth/login-user.controller";
import { loginUserSchema } from "./core/models/auth/entity/auth.entity";

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
          console.log('credentials',credentials)

          // Validate input using Zod
          const { data: parsedCredentials, error: inputParseError } =
            loginUserSchema.safeParse({
              username: credentials?.username,
            });
          if (inputParseError) {
            throw new InputParseError("กรุณากรอกข้อมูลเข้าสู่ระบบให้ถูกต้อง", {
              cause: inputParseError,
            });
          }

          const user = await loginUserController({
            username: parsedCredentials.username,
          });

          console.log('user', user)

          if (!user) {
            throw new Error("User not found.");
          }

          return {
            user: user.data.user,
            accessToken: user.data.accessToken,
          };
        } catch (error) {
          const authError = error as Error
          throw new Error(authError.message)
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
