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
];
