import Tabs from "../../Components/Tabs/Tabs";
import FormDialog from "../../Components/FormDialog/FormDialog";
import { React, useState } from "react";

import { TabData } from "./TabData";
function Coupons() {
  const FormData = {
    initialValues: {
      coupon: "",
      description: "",
      general: "",
    },
    inputs: [
      {
        label: "Coupon",
        id: "coupon",
        type: "text",
      },
      {
        label: "Description",
        type: "text",
        id: "description",
      },
      {
        label: "General",
        type: "text",
        id: "general",
      },
    ],
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="container-fluid py-2 px-0">
        <div className="d-flex bd-highlight p-0">
          <div className=" flex-grow-1">
            <b>Coupons</b>
          </div>
          <div className="p-2">
            <small>Export list</small>
          </div>
          <div className="p-2">
            <small>Import list</small>
          </div>
          <div className="p-2">
            <button
              type="button"
              className="btn btn-primary py-1"
              style={{
                backgroundColor: "#4AA2FA",
                border: "none",
                fontSize: "12px",
              }}
              onClick={handleClickOpen}
            >
              <small>+ Add Coupon</small>
            </button>
            <FormDialog
              open={open}
              handleClose={handleClose}
              FormData={FormData}
              title="Add cupons"
            />
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </>
  );
}

export default Coupons;
