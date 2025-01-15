import { dateFormSchema, refIdSchema } from "@/core/common/type.common";
import { z } from "zod";

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


export type Comment = z.infer<typeof commentSchema>;
