import { fetchTodos } from "../../Services/index";

export const tableColumns = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "title",
  },
];

export const tableData = fetchTodos;

export const sortOption = [
  "Email Subscription",
  "Number of orders (Ascending)",
  "Number of orders (Descending)",
  "Amount spent (Ascending)",
  "Amount spent (Descending)",
];

export const filterOption = ["Subscribed", "Not subscribed"];
