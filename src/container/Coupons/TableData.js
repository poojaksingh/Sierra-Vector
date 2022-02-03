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

export const sortOption = [
  "Status",
  "Validity",
  "Date created",
  "No. Of times used (Ascending)",
  "No. Of times used (Descending)",
];

export const filterOption = ["Active", "Scheduled", "Expired"];
