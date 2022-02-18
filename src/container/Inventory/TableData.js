import { fetchUsers, fetchTodos } from "../../Services/index";

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
    id: "whenSoldOut",
    numeric: false,
    disablePadding: false,
    label: "When sold out",
  },
  {
    id: "incoming",
    numeric: false,
    disablePadding: false,
    label: "Incoming",
  },
  {
    id: "available",
    numeric: false,
    disablePadding: false,
    label: "Available",
  },
  {
    id: "finalStockAmount",
    numeric: false,
    disablePadding: false,
    label: "Final stock amount",
  },
];

export const tableData = [
  {
    productId: "#123477",
    productName: "Shoe",
    whenSoldOut: "Stop Selling",
    incoming: "0",
    available: "100 in stock",
    finalStockAmount: "Cloud",
  },
  {
    productId: "#123478",
    productName: "Shoe",
    whenSoldOut: "Stop Selling",
    incoming: "100 units",
    available: "100 in stock",
    finalStockAmount: "Cloud",
  },
  {
    productId: "#123479",
    productName: "Shoe",
    whenSoldOut: "Stop Selling",
    incoming: "150 units",
    available: "100 in stock",
    finalStockAmount: "Cloud",
  },
];

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
    filterValue: "",
  },
  {
    filterName: "Descending",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Reset",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
];
