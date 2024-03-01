import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { SelectForm } from "./SelectForm";
import { InputForm } from "./InputForm";
import { Form } from "../ui/form";
import { useEmployeesStore } from "@/stores/useEmployeesStore";
import { Employee, employeeRegisterSchema } from "@/schema/employeesRegister";
import { useNavigate } from "react-router-dom";
import {
  addressDataForm,
  departmentDataOptions,
  employeeDataForm,
  statesOptions,
} from "@/data/employeeRegisterData";

const Forms = () => {
  const form = useForm<Employee>({
    resolver: zodResolver(employeeRegisterSchema),
  });
  const addEmployee = useEmployeesStore((state) => state.addEmployee);
  const navigate = useNavigate();

  const handleSubmit = (employee: Employee) => {
    addEmployee(employee);
    toast.success("Employee Created successfully !");
    form.reset();
    navigate("/employees");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-xl mx-auto flex flex-col gap-4 my-4 px-6 md:px-0"
      >
        <fieldset className="grid md:grid-cols-2 gap-x-8 gap-y-4 border-2 border-double p-4 rounded-md">
          <legend>Informations personnelles</legend>
          {employeeDataForm.map((data) => (
            <InputForm key={data.name} form={form} data={data} />
          ))}
        </fieldset>

        <fieldset className="grid md:grid-cols-2 gap-x-8 gap-y-4 border-2 border-double p-4 rounded-md">
          <legend>Address</legend>
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
        </fieldset>

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
