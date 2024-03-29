import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Employee } from "@/schema/employeesRegister";

export const InputForm = ({
  form,
  data,
}: {
  form: UseFormReturn<Employee>;
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
      name={data.name as Extract<keyof Employee, string>}
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
                value={field.value as string}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
