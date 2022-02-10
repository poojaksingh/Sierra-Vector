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

export const sortConfig = [
  {
    sortName: "Incoming(Ascending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Incoming(Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Availability(Ascending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Availability(Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "No. Of times used (Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
];

export const filterConfig = [
  {
    filterName: "Ascending",
    filterFunction: null,
    filterColumn: "status",
  },
  {
    filterName: "Descending",
    filterFunction: null,
    filterColumn: "status",
  },
  {
    filterName: "Reset",
    filterFunction: null,
    filterColumn: "status",
  },
];
