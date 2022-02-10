import { fetchTodos } from "../../Services/index";
import { tableFilter } from "../../Helper/TableFunctions";

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
    label: "Title",
  },
  {
    id: "completed",
    numeric: false,
    disablePadding: false,
    label: "Completed",
  },
];

export const tableData = fetchTodos;

export const sortConfig = [
  {
    sortName: "Email Subscription",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Number of orders (Ascending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Number of orders (Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Amount spent (Ascending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Amount spent (Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
];

export const filterConfig = [
  {
    filterName: "Subscribed",
    filterFunction: tableFilter,
    filterColumn: "completed",
    filterValue: true,
  },
  {
    filterName: "Not subscribed",
    filterFunction: tableFilter,
    filterColumn: "completed",
    filterValue: false,
  },
];
