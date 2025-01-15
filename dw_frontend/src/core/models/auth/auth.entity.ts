import { z } from "zod";
import { userSchema } from "../user/user.entity";

/**
 * Auth Entity
 */

export const loginUserSchema = userSchema.pick({
    username: true
});

export type LoginUser = z.infer<typeof loginUserSchema>

/**
 * Auth Entity Related
 */

export interface IAuthContext {
    user: IAuthUser["user"] | null;
    isAuthenticated: boolean;
    login: (authUser: IAuthUser) => void;
    logout: () => void;
  }