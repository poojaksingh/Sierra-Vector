import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function DashboardCard() {
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

        boxShadow: "0px 0px 10px #0000001A;",
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
          <LocalOfferIcon fontSize="small" />
        </div>
        <div>
          <i class="fa fa-inr"></i> 30,000
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
