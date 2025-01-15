import { z } from "zod";

/**
 *  DateForm Schema
 */

export const dateFormSchema = (isRequired: boolean = true) => {
  const baseSchema = z.preprocess((value) => {
    if (typeof value === "string" || value instanceof Date) {
      const date = new Date(value);
      return isNaN(date.getTime()) ? undefined : date;
    }
    return undefined;
  }, z.date());

  // If `isRequired` is false, make the schema optional
  return isRequired ? baseSchema : baseSchema.optional();
};

/**
 *  refId Schema
 */

export const refIdSchema = z.number();

export type RefId = z.infer<typeof refIdSchema>;
