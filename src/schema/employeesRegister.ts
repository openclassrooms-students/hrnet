import { z } from "zod";

export const employeesRegisterSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
  dateOfBirth: z.string({
    required_error: "Date of birth is required",
  }),
  startDate: z.string({
    required_error: "Start date is required",
  }),
  street: z.string({ required_error: "Street is required" }),
  city: z.string({ required_error: "City is required" }),
  zipCode: z.string({ required_error: "Zip code is required" }),
  state: z.string({ required_error: "Please select a State" }),
  department: z.string({
    required_error: "Please select a department type",
  }),
});

export type EmployeesRegister = z.infer<typeof employeesRegisterSchema>;
