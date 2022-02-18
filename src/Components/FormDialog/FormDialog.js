import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <b>Add Customer</b>
        </DialogTitle>
        <DialogContent>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
                <div className="py-2 px-2">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="btn btn-primary py-1"
            style={{
              backgroundColor: "#4AA2FA",
              border: "none",
              fontSize: "12px",
              color: "white",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-primary py-1"
            style={{
              backgroundColor: "#4AA2FA",
              border: "none",
              fontSize: "12px",
              color: "white",
            }}
            onClick={handleClose}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
