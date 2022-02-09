import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function MaterialUIPickers() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        size="small"
        label="Date"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        InputProps={{
          style: {
            fontSize: 11,
            height: 25,
            width: 150,
          },
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
