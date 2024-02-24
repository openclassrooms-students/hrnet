import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmployeesRegister } from "@/schema/employeesRegister";

export const InputForm = ({
  form,
  data,
}: {
  form: UseFormReturn<EmployeesRegister>;
  data: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    required: boolean;
  };
}) => {
  return (
    <FormField
      control={form.control}
      name={data.name as Extract<keyof EmployeesRegister, string>}
      render={({ field }) => {
        return (
          <FormItem className="grow">
            <FormLabel>{data.label}</FormLabel>
            <FormControl>
              <Input
                placeholder={data.placeholder}
                type={data.type}
                // required={data.required}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
