import { fetchTodos } from "../../Services/index";
import {
  tableAscendingSort,
  tableDescendingSort,
  tableFilter,
} from "../../Helper/TableFunctions";

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

export const sortConfig = [
  {
    sortName: "Inventory (Increasing)",
    sortFunction: tableAscendingSort,
    sortColumn: "id",
  },
  {
    sortName: "Inventory (Decreasing)",
    sortFunction: tableDescendingSort,
    sortColumn: "id",
  },
];

export const filterConfig = [
  {
    filterName: "Active",
    filterFunction: tableFilter,
    filterColumn: "status",
  },
  {
    filterName: "Draft",
    filterFunction: tableFilter,
    filterColumn: "status",
  },
  {
    filterName: "Archieved",
    filterFunction: tableFilter,
    filterColumn: "status",
  },
];
