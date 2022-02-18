import { fetchUsers } from "../../Services/index";

export const tableColumns = [
  {
    id: "orderId",
    numeric: false,
    disablePadding: false,
    label: "Order ID",
    main: true,
  },
  {
    id: "orderDate",
    numeric: false,
    disablePadding: false,
    label: "Order Date",
  },
  {
    id: "customerName",
    numeric: false,
    disablePadding: false,
    label: "Customer Name",
  },
  {
    id: "totalItems",
    numeric: false,
    disablePadding: false,
    label: "Total Items",
  },
  {
    id: "orderTotal",
    numeric: false,
    disablePadding: false,
    label: "Order Total",
  },
  {
    id: "orderStatus",
    numeric: false,
    disablePadding: false,
    label: "Order Status",
  },
  {
    id: "paymentStatus",
    numeric: false,
    disablePadding: false,
    label: "Payment Status",
  },
];

export const tableData = [
  {
    orderId: "#1234",
    orderDate: "24/10/2022",
    customerName: "Rocket singh",
    totalItems: "115",
    orderTotal: "20",
    orderStatus: "In transit",
    paymentStatus: "Paid",
  },
  {
    orderId: "#1235",
    orderDate: "24/10/2022",
    customerName: "Rocket singh",
    totalItems: "115",
    orderTotal: "20",
    orderStatus: "In transit",
    paymentStatus: "Paid",
  },
  {
    orderId: "#1236",
    orderDate: "24/10/2022",
    customerName: "Rocket singh",
    totalItems: "115",
    orderTotal: "20",
    orderStatus: "In transit",
    paymentStatus: "Paid",
  },
];

export const sortConfig = [
  {
    sortName: "Number of items(Ascending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Number of items(Descending)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Order total(Increasing)",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Order total(Decreasing)",
    sortFunction: null,
    sortColumn: "id",
  },
];

export const filterConfig = [
  {
    filterName: "Pending orders",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Delivered",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Cancelled",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Payment status",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
];
