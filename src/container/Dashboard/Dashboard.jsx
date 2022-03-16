import BasicDatePicker from "../../Components/BasicDatePicker/BasicDatePicker";
import BasicPiechart from "../../Components/BasicPiechart/BasicPiechart";
import BasicBarChart from "../../Components/BasicBarChart/BasicBarChart";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import BasicLineChart from "../../Components/BasicLineChart/BasicLineChart";
import Table from "../../Components/Table/Table";
import { tableColumns, tableData, sortOption, filterOption } from "./TableData";
import GetAppIcon from "@mui/icons-material/GetApp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { border } from "@mui/system";

function Dashboard() {
  const cardData = ["Today sales"];
  return (
    <>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex  p-0">
          <div className="p-2 flex-grow-1">
            <b>Dashboards</b>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary py-1 "
              style={{
                backgroundColor: "#4AA2FA",
                border: "none",
                fontSize: "12px",
              }}
            >
              <GetAppIcon sx={{ fontSize: "12px" }} />
              Download Report
            </button>
          </div>
          <div className="p-2">
            <BasicDatePicker />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <DashboardCard
              sales="Today Sales"
              amount="30,00,000"
              Icon={<LocalOfferIcon />}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <DashboardCard sales="Today Expenses" amount="20,00,000" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <DashboardCard sales="Today Visitor" amount="5040" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <DashboardCard sales="Today Order" amount="234" />
          </div>
        </div>
      </div>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-7 pb-3">
            <BasicBarChart />
          </div>
          <div className="col-5 pb-3">
            <BasicLineChart />
          </div>
        </div>
        <div className="row">
          <div className="col-7 pb-3">
            <BasicBarChart />
            {/* <Table tableColumns={tableColumns} tableData={tableData} /> */}
          </div>
          <div className="col-5 pb-3">
            <BasicPiechart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
