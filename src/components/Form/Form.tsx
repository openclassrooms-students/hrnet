import {
  EmployeesRegister,
  employeesRegisterSchema,
} from "@/schema/employeesRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import states from "@/data/states.json";

import { Button } from "@/components/ui/button";
import { SelectForm } from "./SelectForm";
import { InputForm } from "./InputForm";
import { Form } from "../ui/form";

const Forms = () => {
  const form = useForm<EmployeesRegister>({
    resolver: zodResolver(employeesRegisterSchema),
  });

  const userDataForm = [
    {
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      type: "text",
      required: true,
    },
    {
      name: "dateOfBirth",
      label: "Date of birth",
      placeholder: "Date of birth",
      type: "date",
      required: true,
    },
    {
      name: "startDate",
      label: "Start date",
      placeholder: "Start date",
      type: "date",
      required: true,
    },
  ];

  const addressDataForm = [
    {
      name: "street",
      label: "street",
      placeholder: "street",
      type: "text",
      required: true,
    },
    {
      name: "city",
      label: "city",
      placeholder: "city",
      type: "text",
      required: true,
    },
    {
      name: "zipCode",
      label: "zipCode",
      placeholder: "zipCode",
      type: "number",
      required: true,
    },
    {
      name: "state",
      label: "state",
      placeholder: "state",
      type: "text",
      required: true,
    },
  ];

  const statesOptions = states.map((state) => {
    return {
      value: state.abbreviation,
      label: state.name,
    };
  });

  const departmentDataOptions = [
    {
      value: "Sales",
      label: "Sales",
    },
    {
      value: "Marketing",
      label: "Marketing",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
    {
      value: "Human Resources",
      label: "Human Resources",
    },
    {
      value: "Legal",
      label: "Legal",
    },
  ];

  const handleSubmit = (employee: EmployeesRegister) => {
    const employeesLocalStorage = localStorage.getItem("employees");
    console.log({ employeesLocalStorage });

    const employees = employeesLocalStorage
      ? JSON.parse(employeesLocalStorage)
      : [];
    console.log({ employees });

    employees.push(employee);
    console.log({ employees2: employees });
    localStorage.setItem("employees", JSON.stringify(employees));
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-xl lg:mx-auto w-full flex flex-col gap-4 my-4 px-6 md:px-0"
      >
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {userDataForm.map((data) => (
            <InputForm key={data.name} form={form} data={data} />
          ))}
        </div>

        <div className="flex justify-between flex-wrap gap-x-8 gap-y-4">
          {addressDataForm.map((data) =>
            data.name == "state" ? (
              <SelectForm
                key={data.name}
                data={data}
                form={form}
                dataOptions={statesOptions}
                className="lg:w-1/3"
              />
            ) : (
              <InputForm key={data.name} form={form} data={data} />
            )
          )}
        </div>

        <SelectForm
          form={form}
          data={{
            name: "department",
            label: "Department",
            placeholder: "Department",
            required: true,
          }}
          dataOptions={departmentDataOptions}
        />

        <Button type="submit" className="w-full mt-6" aria-label="add employee">
          Add Employee
        </Button>
      </form>
    </Form>
  );
};

export default Forms;
