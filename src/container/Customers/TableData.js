import { fetchTodos } from "../../Services/index";
import { tableFilter } from "../../Helper/TableFunctions";

export const tableColumns = [
  {
    id: "customerId",
    numeric: false,
    disablePadding: false,
    label: "Customer ID",
    main: true,
  },
  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer Name",
  },
  {
    id: "emailSubscription",
    numeric: false,
    disablePadding: false,
    label: "Email Subscription",
  },
  {
    id: "totalOrders",
    numeric: false,
    disablePadding: false,
    label: "Total Orders",
  },
  {
    id: "totalAmount",
    numeric: false,
    disablePadding: false,
    label: "Total Amount Spent",
  },
  {
    id: "dateJoined",
    numeric: false,
    disablePadding: false,
    label: "Date Joined",
  },
];

export const tableData = [
  {
    customerId: "#32345",
    customerName: "Rocket Singh",
    emailSubscription: "Subscribed",
    totalOrders: "1",
    totalAmount: "500",
    dateJoined: "2nd Jan, 2022",
  },
  {
    customerId: "#32346",
    customerName: "Rocket Singh",
    emailSubscription: "Subscribed",
    totalOrders: "1",
    totalAmount: "500",
    dateJoined: "2nd Jan, 2022",
  },
  {
    customerId: "#32347",
    customerName: "Rocket Singh",
    emailSubscription: "Subscribed",
    totalOrders: "1",
    totalAmount: "500",
    dateJoined: "2nd Jan, 2022",
  },
];

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
