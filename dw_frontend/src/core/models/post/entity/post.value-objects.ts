import { PostCategory } from "./post.entity";

/**
 * Post Enum
 */

export const PostCategoryLabel: { [K in PostCategory]: string } = {
  [PostCategory.HISTORY]: "History",
  [PostCategory.FOOD]: "Food",
  [PostCategory.PETS]: "Pets",
  [PostCategory.HEALTH]: "Health",
  [PostCategory.FASHION]: "Fashion",
  [PostCategory.EXERCISE]: "Exercise",
  [PostCategory.OTHERS]: "Others",
};

/**
 * PostBaseForm Class Default Initial Value
 * static PostBaseFormfactory pattern
 */

export class PostBaseFormEntity {
  /**
   * Post Options
   */

  static postCategoryOptions = Object.values(PostCategory)
    .filter((status) => typeof status === "number") // Ensure only numeric values are processed
    .map((status) => ({
      value: status as PostCategory,
      label: PostCategoryLabel[status as PostCategory],
    }));
}
