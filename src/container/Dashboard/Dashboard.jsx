import React from "react";
import BasicDatePicker from "../../Components/BasicDatePicker/BasicDatePicker";
import AppBar from "../../Components/AppBar/AppBar";
import Cardblue from "../../Components/Cardblue/Cardblue";
import LineChartSample from "./LineChartSample";

function Dashboard() {
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
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Cardblue />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Cardblue />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Cardblue />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Cardblue />
          </div>
        </div>
      </div>
      <div className="conatiner">
        <LineChartSample />
      </div>
    </AppBar>
  );
}

export default Dashboard;
