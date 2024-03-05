import { useEmployeesStore } from "@/stores/useEmployeesStore";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

const EmployeesList = () => {
  const employees = useEmployeesStore((state) => state.employees);

  const data = employees.map((employee) => {
    return {
      id: String(Math.floor(Math.random() * Date.now())),
      ...employee,
    };
  });

  return (
    <div className="container mx-auto py-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default EmployeesList;
