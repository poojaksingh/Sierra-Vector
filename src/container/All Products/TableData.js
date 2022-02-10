import { fetchUsers } from "../../Services/index";
import {
  tableAscendingSort,
  tableDescendingSort,
  tableFilter,
} from "../../Helper/TableFunctions";

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
    main: true,
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
];

export const tableData = fetchUsers;

export const searchColumn = "name";

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
    filterValue: "",
  },
  {
    filterName: "Draft",
    filterFunction: tableFilter,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Archieved",
    filterFunction: tableFilter,
    filterColumn: "status",
    filterValue: "",
  },
];
