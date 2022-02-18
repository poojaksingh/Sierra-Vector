import Table from "../../Components/Table/Table";
import { tableColumns, tableData, sortConfig, filterConfig } from "./TableData";

export const TabData = [
  {
    tabName: "All",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 0,
    componentData: {
      tableColumns,
      tableData,
      sortConfig,
      filterConfig,
    },
  },
  {
    tabName: "Pending",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 1,
    componentData: {
      tableColumns,
      tableData,
      sortConfig,
      filterConfig,
    },
  },
  {
    tabName: "Delivered",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 2,
    componentData: {
      tableColumns,
      tableData,
      sortConfig,
      filterConfig,
    },
  },
  {
    tabName: "Cancelled",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 3,
    componentData: {
      tableColumns,
      tableData,
      sortConfig,
      filterConfig,
    },
  },
];
