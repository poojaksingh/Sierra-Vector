import { fetchUsers } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
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

export const sortOption = ["Inventory (Increasing)", "Inventory (Decreasing)"];

export const filterOption = ["Active", "Draft", "Archieved"];
