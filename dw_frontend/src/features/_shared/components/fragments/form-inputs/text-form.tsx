import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../elements/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../elements/form";

interface ITextForm {
  disabled?: boolean;
  labelName?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const TextForm = ({
  name,
  labelName = "",
  disabled = false,
  placeholder,
  required = false,
}: ITextForm) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelName}</FormLabel>
          <FormControl>
            <Input
              required={required}
              disabled={disabled}
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

export default TextForm;
