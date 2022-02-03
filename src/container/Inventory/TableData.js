import { fetchUsers, fetchTodos } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "title",
  },
  // {
  //   id: "email",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Email",
  // },
  // {
  //   id: "phone",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "Phone",
  // },
];

export const tableData = fetchTodos;

export const sortOption = [
  "Incoming(Ascending)",
  "Incoming(Descending)",
  "Availability(Ascending)",
  "Availability(Descending)",
];

export const filterOption = ["Ascending", "Descending", "Reset"];
