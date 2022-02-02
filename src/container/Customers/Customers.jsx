import React from "react";
import AppBar from "../../Components/AppBar/AppBar";
import Table from "../../Components/Table/Table";
import Tabs from "../../Components/Tabs/Tabs";
function Customers() {
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
      tabName: "New",
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
      tabName: "Guest Checkout",
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
      tabName: "Abondoned Carts",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 3,
      componentData: {
        tableColumns: ["A", "B"],
        tableData: ["abc", "xyz"],
        sortOption: ["Asc", "Desc"],
      },
    },
    {
      tabName: "Email Subscribers",
      tabComponenet: Table,
      tabPadding: 0,
      tabIndex: 4,
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
        <div className="d-flex bd-highlight p-0">
          <div className=" flex-grow-1">
            <b>Customers</b>
          </div>
          <div className="p-2">
            <small>Export list</small>
          </div>
          <div className="p-2">
            <small>Import list</small>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary py-0">
              <small>+ Add Customer</small>
            </button>
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </AppBar>
  );
}

export default Customers;
