import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, handleClose, FormData, title }) {
  const formik = useFormik({
    initialValues: FormData.initialValues,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <b>{title}</b>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="container mt-2">
              <div className="row">
                {FormData.inputs.map((input) => (
                  <>
                    {input.component === "TextField" && (
                      <div className="col-6">
                        <div className="py-1 px-2">
                          <TextField
                            id={input.id}
                            label={input.label}
                            variant="outlined"
                            type={input.type}
                            onChange={formik.handleChange}
                            value={formik.values[input.id]}
                            InputLabelProps={{ style: { fontSize: 14 } }}
                          />
                        </div>
                      </div>
                    )}
                    {input.component === "Select" && (
                      <div className="col-6">
                        <div className="py-1 px-2">
                          <FormControl fullWidth>
                            <InputLabel
                              id="demo-simple-select-label"
                              sx={{
                                fontSize: 14,
                              }}
                            >
                              {input.label}
                            </InputLabel>
                            <Select
                              label={input.label}
                              id={input.id}
                              value={formik.values[input.id]}
                              onChange={formik.handleChange}
                              name={input.id}
                              sx={{
                                width: 225,
                              }}
                            >
                              {input.options.map((opt) => (
                                <MenuItem value={opt}>{opt}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    )}
                    {input.component === "Datepicker" && (
                      <div className="col-6">
                        <div className="py-1 px-2">
                          {/* <DesktopDatePicker
                            id={input.id}
                            label={input.label}
                            inputFormat="MM/dd/yyyy"
                            value={formik.values[input.id]}
                            onChange={formik.handleChange}
                          /> */}
                        </div>
                      </div>
                    )}
                  </>
                ))}
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
