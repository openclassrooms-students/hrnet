import { z } from "zod";

export const employeeRegisterSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).min(1),
  lastName: z.string({ required_error: "Last name is required" }).min(1),
  dateOfBirth: z
    .string({
      required_error: "Date of birth is required",
    })
    .min(10, { message: "Please enter a valid date of birth" }),
  startDate: z.string({
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

export type Employee = z.infer<typeof employeeRegisterSchema> & {
  id?: string;
};
