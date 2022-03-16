import React, { useEffect } from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { color, fontSize } from "@mui/system";

function DashboardCard({ sales, Icon, amount }) {
  return (
    <div
      className="card mb-5 shadow "
      style={{
        padding: "0px",
        margin: "0px",
        borderRadius: "16px",
        background: "#EDF6FF",
        font: "normal normal medium 40px/49px Helvetica Neue",
        border: "none",

        boxShadow: "0px 0px 10px #0000001A",
      }}
    >
      <div className="card-body">
        <div
          className="rounded-circle text-center"
          style={{
            backgroundColor: "white",
            width: "30px",
            height: "30px",
            color: "#4AA2FA",
          }}
        >
          {Icon}
        </div>
        <div
          className="CurrencyNo  "
          style={{ color: "#4AA2FA", fontSize: "20px", fontWeight: "bold" }}
        >
          <CurrencyRupeeIcon fontSize="small" />
          {amount}
        </div>
        <div>{sales}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
