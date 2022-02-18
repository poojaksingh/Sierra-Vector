import { fetchUsers } from "../../Services/index";
import {
  tableAscendingSort,
  tableDescendingSort,
  tableFilter,
} from "../../Helper/TableFunctions";

export const tableColumns = [
  {
    id: "productId",
    numeric: false,
    disablePadding: false,
    label: "Product ID",
    main: true,
  },
  {
    id: "productName",
    numeric: false,
    disablePadding: false,
    label: "Product name",
  },
  {
    id: "productCategory",
    numeric: false,
    disablePadding: false,
    label: "Product category",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "inventory",
    numeric: false,
    disablePadding: false,
    label: "Inventory",
  },
  {
    id: "vendor",
    numeric: false,
    disablePadding: false,
    label: "Vendor",
  },
];

export const tableData = [
  {
    productId: "#1234777",
    productName: "Shoe",
    productCategory: "Sandals",
    status: "Active",
    inventory: "100 in stock",
    vendor: "Cloud",
  },
  {
    productId: "#1234666",
    productName: "Flats",
    productCategory: "Sandals",
    status: "Active",
    inventory: "100 in stock",
    vendor: "Cloud",
  },
  {
    productId: "#1234555",
    productName: "Heels",
    productCategory: "Sandals",
    status: "Active",
    inventory: "100 in stock",
    vendor: "Cloud",
  },
];

export const searchColumn = "productName";

export const sortConfig = [
  {
    sortName: "Inventory (Increasing)",
    sortFunction: tableAscendingSort,
    sortColumn: "productName",
  },
  {
    sortName: "Inventory (Decreasing)",
    sortFunction: tableDescendingSort,
    sortColumn: "productName",
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
