import Table from "../../Components/Table/Table";
import Cardblue from "../../Components/Cardblue/Cardblue";
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
