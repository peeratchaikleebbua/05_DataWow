import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../../elements/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../elements/select";

interface ISelectOption {
  label: string;
  value: string | number;
}

interface ISelectForm {
  name: string;
  labelName?: string;
  options: ISelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const SelectForm = ({
  name,
  labelName,
  options,
  placeholder,
  required,
  disabled = false,
}: ISelectForm) => {
  const { control } = useFormContext();

  const optionType = typeof options[0].value;

  const isStringValue = optionType === "string";

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{labelName}</FormLabel>
          <Select
            disabled={disabled}
            required={required}
            onValueChange={(value) =>
              isStringValue ? field.onChange(value) : field.onChange(Number(value))
            } // Directly use the value (string or number)
            defaultValue={field.value?.toString()} // Convert to string for display purposes
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder ?? "Choose"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.value.toString()}>
                  {/* Ensure value is string for SelectItem */}
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectForm;
