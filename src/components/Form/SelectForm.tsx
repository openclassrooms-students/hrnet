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
import { Employee } from "@/schema/employeesRegister";

export const SelectForm = ({
  form,
  data,
  dataOptions,
}: {
  form: UseFormReturn<Employee>;
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
      name={data.name as Extract<keyof Employee, string>}
      render={({ field }) => {
        return (
          <FormItem>
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
