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
    tabName: "New",
    tabComponenet: Cardblue,
    tabPadding: 5,
    tabIndex: 1,
    componentData: {},
  },
  {
    tabName: "Guest checkout",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 2,
    componentData: {},
  },
  {
    tabName: "Abandoned carts",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 3,
    componentData: {},
  },
  {
    tabName: "Email subscribers",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 4,
    componentData: {},
  },
];
