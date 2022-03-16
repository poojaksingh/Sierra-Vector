import { React, useState } from "react";
import Tabs from "../../Components/Tabs/Tabs";
import ModalAdd from "../../Components/FormDialog/FormDialog";
import { TabData } from "./TabData";
import FormDialog from "../../Components/FormDialog/FormDialog";
function Customers() {
  const FormData = {
    initialValues: {
      name: "",
      email: "",
      mobileNumber: "",
      billingAddress: "",
      shippingAddress: "",
      zipcode: "",
      dob: "",
      gender: "",
    },
    inputs: [
      {
        label: "Name",
        id: "name",
        type: "text",
        component: "TextField",
      },
      {
        label: "email",
        type: "email",
        id: "email",
        component: "TextField",
      },
      {
        label: "Mobile number",
        type: "text",
        id: "mobileNumber",
        component: "TextField",
      },
      {
        label: "Billing address",
        type: "text",
        id: "billingAddress",
        component: "TextField",
      },
      {
        label: "Shipping address",
        type: "text",
        id: "shippingAddress",
        component: "TextField",
      },
      {
        label: "Zipcode ",
        type: "text",
        id: "zipcode",
        component: "TextField",
      },
      {
        label: "Date of birth",
        id: "dob",
        component: "Datepicker",
      },
      {
        label: "Gender",
        component: "Select",
        options: ["active", "non active"],
        id: "gender",
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
            <FormDialog
              open={open}
              handleClose={handleClose}
              FormData={FormData}
              title="Add customers"
            />
          </div>
        </div>
      </div>

      <Tabs TabData={TabData} />
    </>
  );
}

export default Customers;
