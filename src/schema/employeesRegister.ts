import { z } from "zod";

export const employeeRegisterSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).min(1),
  lastName: z.string({ required_error: "Last name is required" }).min(1),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  street: z.string({ required_error: "Street is required" }).min(2),
  city: z.string({ required_error: "City is required" }).min(2),
  zipCode: z.string({ required_error: "Zip code is required" }).min(1),
  state: z.string({ required_error: "Please select a State" }).min(1),
  department: z
    .string({
      required_error: "Please select a department type",
    })
    .min(5),
});

export type Employee = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  startDate: Date | string;
  street: string;
  city: string;
  zipCode: string;
  state: string;
  department: string;
  id?: string;
};
