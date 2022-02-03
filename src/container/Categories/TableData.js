import { fetchUsers, fetchTodos } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
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

export const sortOption = ["Ascending", "Descending", "Reset"];

export const filterOption = ["All Sarees", "All Jeans", "All Sportswear"];
