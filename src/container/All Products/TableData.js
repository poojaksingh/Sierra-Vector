import { fetchUsers } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
];

export const tableData = fetchUsers;

export const sortOption = ["Ascending", "Descending", "Reset"];

export const filterOption = ["Ascending", "Descending", "Reset"];
