import { z } from "zod";
import { userSchema } from "../../user/entity/user.entity";
import { IAuthUser } from "../use-cases/login-user.use-case";

/**
 * Auth Entity
 */

export const loginUserSchema = userSchema.pick({
  username: true,
});

export type LoginUser = z.infer<typeof loginUserSchema>;

/**
 * Auth Entity Related
 */

export interface IAuthContext {
  user: IAuthUser["user"] | null;
  isAuthenticated: boolean;
  login: (authUser: IAuthUser) => void;
  logout: () => void;
}
