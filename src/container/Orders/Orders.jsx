import React from "react";
import AppBar from "../../Components/AppBar/AppBar";
import Table from "../../Components/Table/Table";
import Tabs from "../../Components/Tabs/Tabs";
import Cardblue from "../../Components/Cardblue/Cardblue";

function Orders() {
  const TabData = [
    {
      tabName: "All",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 0,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
    {
      tabName: "Pending",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 1,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
    {
      tabName: "Delivered",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 2,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
    {
      tabName: "Cancelled",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 3,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
  ];
  return (
    <AppBar>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex  p-0">
          <div className="p-2">
            <b>Orders</b>
          </div>
          <div className="p-2">
            <small>calendar</small>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="d-flex  p-0">
          <div className="p-2">
            <Cardblue />
          </div>
          <div className="p-2">
            <Cardblue />
          </div>
          <div className="p-2">
            <Cardblue />
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </AppBar>
  );
}

export default Orders;
