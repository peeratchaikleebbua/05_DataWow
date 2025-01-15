import { dateFormSchema, refIdSchema } from "@/core/common/type.common";
import { z } from "zod";
import { userSchema } from "../user/user.entity";
import { postSchema } from "../post/post.entity";

/**
 * Comment Entity
 */

export const commentSchema = z.object({
  id: refIdSchema,

  /**
   * Comment Date
   */

  content: z.string(),
  authorId: refIdSchema,
  postId: refIdSchema,

  /**
   * Comment Date
   */

  createdAt: dateFormSchema(),
  updatedAt: dateFormSchema(),
});

export const commentPopulatedSchema = commentSchema.extend({
  author: userSchema.optional(),
  post: postSchema.optional(),
});

export type Comment = z.infer<typeof commentPopulatedSchema>;
