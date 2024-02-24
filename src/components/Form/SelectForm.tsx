import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { EmployeesRegister } from "@/schema/employeesRegister";

export const SelectForm = ({
  form,
  data,
  dataOptions,
  className = "",
}: {
  form: UseFormReturn<EmployeesRegister>;
  data: {
    name: string;
    label: string;
    placeholder: string;
    required: boolean;
  };
  dataOptions: { value: string; label: string }[];
  className?: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={data.name as Extract<keyof EmployeesRegister, string>}
      render={({ field }) => {
        return (
          <FormItem className={`grow truncate ${className}`}>
            <FormLabel>{data.label}</FormLabel>
            <Select
              onValueChange={field.onChange}
              // required={data.required}
            >
              <FormControl>
                <SelectTrigger aria-label={data.label}>
                  <SelectValue placeholder={data.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {dataOptions.map((option) => {
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
