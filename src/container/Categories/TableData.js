import { fetchTodos } from "../../Services/index";
import {
  tableAscendingSort,
  tableDescendingSort,
  tableFilter,
} from "../../Helper/TableFunctions";

export const tableColumns = [
  {
    id: "collectionTitle",
    numeric: false,
    disablePadding: false,
    label: "Collection Title",
    main: true,
  },
  {
    id: "collectionDescription",
    numeric: false,
    disablePadding: false,
    label: "Collection Description",
  },
];

export const tableData = [
  {
    collectionTitle: "All Sarees",
    collectionDescription: "All Sarees",
  },
  {
    collectionTitle: "Jeans",
    collectionDescription: "Jeans",
  },
  {
    collectionTitle: "Sportswear",
    collectionDescription: "Sportswear",
  },
];
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
