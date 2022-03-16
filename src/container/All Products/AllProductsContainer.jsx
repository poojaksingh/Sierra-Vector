import Tabs from "../../Components/Tabs/Tabs";
import { TabData } from "./TabData";
import FormDialog from "../../Components/FormDialog/FormDialog";
import { React, useState } from "react";

function AllProductsContainer() {
  const FormData = {
    initialValues: {
      productName: "",
      shortDescription: "",
      largeDescription: "",
      productType: "",
      buyType: "",
    },
    inputs: [
      {
        label: "Product name",
        id: "productName",
        type: "text",
        component: "TextField",
      },
      {
        label: "Short description",
        type: "text",
        id: "shortDescription",
        component: "TextField",
      },
      {
        label: "Large description",
        type: "text",
        id: "largeDescription",
        component: "TextField",
      },

      {
        label: "Product type",
        component: "Select",

        options: ["Physical", "Physical & Virtual"],
        id: "productType",
      },
      {
        label: "Buy type",
        component: "Select",
        options: ["One time"],
        id: "buyType",
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
            <b>All Products</b>
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
              <small>+ Add Products</small>
            </button>
            <FormDialog
              open={open}
              handleClose={handleClose}
              FormData={FormData}
              title="Add products"
            />
          </div>
        </div>
      </div>
      <Tabs TabData={TabData} />
    </>
  );
}

export default AllProductsContainer;
