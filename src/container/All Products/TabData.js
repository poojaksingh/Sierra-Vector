import Table from "../../Components/Table/Table";
import Cardblue from "../../Components/Cardblue/Cardblue";
import { tableColumns, tableData, sortOption, filterOption } from "./TableData";

export const TabData = [
  {
    tabName: "All",
    tabComponenet: Table,
    tabPadding: 0,
    tabIndex: 0,
    componentData: {
      tableColumns,
      tableData,
      sortOption,
      filterOption,
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
    tabName: "Draft",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 2,
    componentData: {},
  },
  {
    tabName: "Archive",
    tabComponenet: Cardblue,
    tabPadding: 0,
    tabIndex: 3,
    componentData: {},
  },
];
