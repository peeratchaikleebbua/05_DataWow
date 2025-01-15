import { z } from "zod";
import { userSchema } from "../../user/entity/user.entity";
import { dateFormSchema, refIdSchema } from "@/core/common/type.common";

/**
 * Post Enum
 */

export enum PostCategory {
  HISTORY = 0,
  FOOD = 1,
  PETS = 2,
  HEALTH = 3,
  FASHION = 4,
  EXERCISE = 5,
  OTHERS = 6,
}

/**
 * Post Entity
 */

export const postSchema = z.object({
  id: refIdSchema,

  /**
   * Post Information
   */

  title: z.string().min(1, "กรุณากรอกหัวข้อให้ครบถ้วน"),
  category: z
    .nativeEnum(PostCategory)
    .optional()
    .refine((value) => value !== undefined, {
      message: "กรุณาเลือก category",
    }),
  content: z.string().min(1, "กรุณากรอกหัวข้อให้ครบถ้วน"),
  authorId: refIdSchema,

  /**
   * Post Date
   */

  createdAt: dateFormSchema(),
  updatedAt: dateFormSchema(),
});

export const postPopulatedSchema = postSchema.extend({
  author: userSchema.optional(),
});

export type Post = z.infer<typeof postPopulatedSchema>;
