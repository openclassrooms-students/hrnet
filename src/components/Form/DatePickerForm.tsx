import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Employee } from "@/schema/employeesRegister";
import { Calendar } from "hrnet-plugin";
import { Input } from "../ui/input";

type DatePickerProps = {
  form: UseFormReturn<Employee>;
  data: {
    name: Date | unknown;
    label: string;
    placeholder: string;
    type: string;
    required: boolean;
  };
};

const DatePickerForm: React.FC<DatePickerProps> = ({ form, data }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    form.setValue(data.name as Extract<keyof Employee, string>, date);
    setSelectedDate(date);
  };

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <FormField
      control={form.control}
      name={data.name as Extract<keyof Employee, string>}
      render={({ field }) => (
        <FormItem className="grow">
          <FormLabel>{data.label}</FormLabel>
          <FormControl>
            <>
            <Input
              type="text"
                value={field.value ? field.value.toLocaleString(
                  "fr-FR",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
              ) : ""}
              placeholder={data.placeholder}
              readOnly
              className="w-full"
              onClick={toggleCalendar}
            />
            {showCalendar && (
              <Calendar
                selected={selectedDate}
                onSelect={handleSelectDate}
                handleCloseCalendar={toggleCalendar}
              />
            )}</>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DatePickerForm;
