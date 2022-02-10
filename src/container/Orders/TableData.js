import { fetchUsers } from "../../Services/index";

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
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
];

export const tableData = fetchUsers;

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
