import { React, useState } from "react";
import AppBar from "../../Components/AppBar/AppBar";

import Tabs from "../../Components/Tabs/Tabs";
import ModalAdd from "../../Components/FormDialog/FormDialog";
import { TabData } from "./TabData";
import FormDialog from "../../Components/FormDialog/FormDialog";
function Customers() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              <small>+ Add Customer</small>
            </button>
            <FormDialog open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </AppBar>
  );
}

export default Customers;
