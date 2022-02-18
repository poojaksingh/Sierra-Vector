import { fetchCoupons } from "../../Services/index";

export const tableColumns = [
  {
    id: "couponId",
    numeric: false,
    disablePadding: false,
    label: "Coupon ID",
    main: true,
  },
  {
    id: "couponName",
    numeric: false,
    disablePadding: false,
    label: "Coupon Name",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "validity",
    numeric: false,
    disablePadding: false,
    label: "Validity",
  },
  {
    id: "dateCreated",
    numeric: false,
    disablePadding: false,
    label: "Date Created",
  },
  {
    id: "timesUsed",
    numeric: false,
    disablePadding: false,
    label: "No. of times used",
  },
];

export const tableData = [
  {
    couponId: "#323245",
    couponName: "FLAT50",
    description: "Diwali Offer",
    status: "Active",
    validity: "January 2022",
    dateCreated: "January 2022",
    timesUsed: "250",
  },
  {
    couponId: "#323246",
    couponName: "FLAT50",
    description: "Diwali Offer",
    status: "Active",
    validity: "January 2022",
    dateCreated: "January 2022",
    timesUsed: "250",
  },
  {
    couponId: "#323247",
    couponName: "FLAT50",
    description: "Diwali Offer",
    status: "Active",
    validity: "January 2022",
    dateCreated: "January 2022",
    timesUsed: "250",
  },
];

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
    filterValue: "",
  },
  {
    filterName: "Scheduled",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
  {
    filterName: "Expired",
    filterFunction: null,
    filterColumn: "status",
    filterValue: "",
  },
];
