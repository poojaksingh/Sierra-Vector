import Table from "../../Components/Table/Table";
import { tableColumns } from "./TableData";

export const TabData = [
  {
    tabName: "All",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 0,
    componentData: {
      tableColumns: tableColumns,
      tableData: "https://jsonplaceholder.typicode.com/users",
      sortOption: ["Ascending", "Descending", "Reset"],
      filterOption: ["Ascending", "Descending", "Reset"],
    },
  },
  {
    tabName: "Pending",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 1,
    componentData: {
      tableColumns: tableColumns,
      tableData: "https://jsonplaceholder.typicode.com/users",
      sortOption: ["Ascending", "Descending", "Reset"],
      filterOption: ["Ascending", "Descending", "Reset"],
    },
  },
  {
    tabName: "Delivered",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 2,
    componentData: {
      tableColumns: tableColumns,
      tableData: "https://jsonplaceholder.typicode.com/users",
      sortOption: ["Ascending", "Descending", "Reset"],
      filterOption: ["Ascending", "Descending", "Reset"],
    },
  },
  {
    tabName: "Cancelled",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 3,
    componentData: {
      tableColumns: tableColumns,
      tableData: "https://jsonplaceholder.typicode.com/users",
      sortOption: ["Ascending", "Descending", "Reset"],
      filterOption: ["Ascending", "Descending", "Reset"],
    },
  },
];
