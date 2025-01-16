import { dateFormSchema, refIdSchema } from "@/core/common/type.common";
import { z } from "zod";
import { Post, postSchema } from "../../post/entity/post.entity";
import { Comment, commentSchema } from "../../comment/entity/comment.entity";

/**
 * User Entity
 */

export const userSchema = z.object({
  id: refIdSchema,

  /**
   * User Identification
   */

  username: z
    .string({
      required_error: "กรุณากรอก username",
    })
    .min(1, "กรุณากรอก username"),

  /**
   * User Information
   */

  post: z.array(postSchema).optional(),
  comment: z.array(commentSchema).optional(),

  /**
   * User Date
   */

  createdAt: dateFormSchema(),
  updatedAt: dateFormSchema(),
});

export type User = z.infer<typeof userSchema> & {
  Post: Post[];
  Comment: Comment[];
};
