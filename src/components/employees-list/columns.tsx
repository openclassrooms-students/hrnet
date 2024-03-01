import { Employee } from "@/schema/employeesRegister";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="First Name" />;
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Last Name" />;
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Start Date" />;
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Department" />;
    },
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date of Birth" />;
    },
  },
  {
    accessorKey: "street",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Street" />;
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="City" />;
    },
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="State" />;
    },
  },
  {
    accessorKey: "zipCode",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Zip Code" />;
    },
  },
];
