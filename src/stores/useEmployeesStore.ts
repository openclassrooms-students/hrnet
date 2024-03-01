import { mockedEmployees } from "@/mocks/employees";
import { Employee } from "@/schema/employeesRegister";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  employees: Employee[];
};

type Action = {
  addEmployee: (employee: Employee) => void;
};

const initialStateEmployees = mockedEmployees;

export const useEmployeesStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        employees: initialStateEmployees,
        addEmployee: (employee) =>
          set((state) => ({ employees: [...state.employees, employee] })),
      }),
      { name: "employees" }
    )
  )
);
