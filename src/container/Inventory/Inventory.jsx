import React from "react";
import AppBar from "../../Components/AppBar/AppBar";
import Table from "../../Components/Table/Table";
import Tabs from "../../Components/Tabs/Tabs";
import { TabData } from "./TabData";

function Inventory() {
  return (
    <AppBar>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex bd-highlight p-0">
          <div className=" flex-grow-1">
            <b>Products-Inventory</b>
          </div>
          <div className="p-2">
            <small>Export list</small>
          </div>
          <div className="p-2">
            <small>Import list</small>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary py-0">
              <small>+ Add Product</small>
            </button>
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </AppBar>
  );
}

export default Inventory;
