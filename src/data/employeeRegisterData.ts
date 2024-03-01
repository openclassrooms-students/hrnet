import states from "@/data/states.json";

export const employeeDataForm = [
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

export const addressDataForm = [
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
export const departmentDataOptions = [
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

export const statesOptions = states.map((state) => {
  return {
    value: state.abbreviation,
    label: state.name,
  };
});
