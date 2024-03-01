import EmployeesList from "@/components/employees-list/EmployeesList";
import { Title } from "@/components/sharing/Title";

const Employees = () => {
  return (
    <main>
      <Title>Current Employees</Title>
      <EmployeesList />
    </main>
  );
};

export default Employees;
