import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
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

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelName}</FormLabel>
          <FormControl>
            <Textarea
              className="h-40"
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaForm;
