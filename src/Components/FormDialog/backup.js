import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";

import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, handleClose, FormData }) {
  const formik = useFormik({
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
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <b>Add Customer</b>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="container mt-2">
              <div className="row">
                <div className="col-6">
                  <div className="py-1 px-2">
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="email"
                      label="Email"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="mobileNumber"
                      label="Mobile number"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="billingAddress"
                      label="Billing address"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="py-1 px-2">
                    <TextField
                      id="shippingAddress"
                      label="Shipping address"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="zipcode"
                      label="Zipcode"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="dob"
                      label="Date of birth"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                  <div className="py-1 px-2">
                    <TextField
                      id="gender"
                      label="Gender"
                      variant="outlined"
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end my-2 mr-5">
              <button
                className="btn btn-primary py-1 mx-1"
                style={{
                  backgroundColor: "#4AA2FA",
                  border: "none",
                  fontSize: "12px",
                  color: "white",
                }}
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary py-1 mx-1"
                type="submit"
                style={{
                  backgroundColor: "#4AA2FA",
                  border: "none",
                  fontSize: "12px",
                  color: "white",
                }}
              >
                Save
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
