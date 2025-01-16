import { dateFormSchema, refIdSchema } from "@/core/common/type.common";
import { z } from "zod";
import { User } from "../../user/entity/user.entity";
import { Post } from "../../post/entity/post.entity";

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

export type Comment = z.infer<typeof commentSchema> & {
  author?: User;
  post?: Post[];
};
