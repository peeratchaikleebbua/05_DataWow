import React from "react";
import { useController, useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../../elements/form";
import { Textarea } from "../../elements/textarea";

interface ITextAreaForm {
  disabled?: boolean;
  labelName?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const TextAreaForm = ({
  name,
  labelName = "",
  disabled = false,
  placeholder,
  required = false,
}: ITextAreaForm) => {
  const { control } = useFormContext();
  const {
    fieldState: { error },
  } = useController({ name, control });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelName}</FormLabel>
          <FormControl>
            <Textarea
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          {error && <FormDescription>{error.message}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaForm;
