import { fetchCoupons } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "body",
    numeric: false,
    disablePadding: false,
    label: "body",
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

export const tableData = fetchCoupons;

export const sortConfig = [
  {
    sortName: "Status",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Validity",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "Date created",
    sortFunction: null,
    sortColumn: "id",
  },
  {
    sortName: "No. Of times used (Ascending)",
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
    filterName: "Active",
    filterFunction: null,
    filterColumn: "status",
  },
  {
    filterName: "Scheduled",
    filterFunction: null,
    filterColumn: "status",
  },
  {
    filterName: "Expired",
    filterFunction: null,
    filterColumn: "status",
  },
];
