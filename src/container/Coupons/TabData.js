import Table from "../../Components/Table/Table";
import Cardblue from "../../Components/Cardblue/Cardblue";
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
    tabName: "Active",
    tabComponenet: Cardblue,
    tabPadding: 5,
    tabIndex: 1,
    componentData: {},
  },
  {
    tabName: "Scheduled",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 2,
    componentData: {},
  },
  {
    tabName: "Expired",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 3,
    componentData: {},
  },
];
