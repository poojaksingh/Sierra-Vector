import React from "react";

function Cardblue() {
  return (
    <div>
      <div
        className="card mb-5 shadow "
        style={{
          padding: "0px",
          margin: "0px",
          borderRadius: "15px",
          background: "#EDF6FF",
          border: "none",
        }}
      >
        <div className="card-body">
          <div className="px-3 pb-2">New Orders</div>
          <div className="d-flex flex-nowrap">
            <div className="px-3 border-end border-2 border-primary">
              <b
                style={{
                  fontSize: "20px",
                }}
              >
                398
              </b>
            </div>
            <div className="px-3">From last week 20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardblue;
