import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MemorialInfo = ({ formData, setFormData }) => {
  //   const [value, setValue] = React.useState(null);

  return (
    <>
      <div className="memorial-info-container">
        <Typography sx={{fontWeight:"bold", fontSize:"24px", mb:"15px"}}>Information about the memorialized person</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            id="outlined-multiline-static"
            label="About"
            multiline
            rows={4}
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          />
        </Box>
      </div>

      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
        }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box> */}
    </>
  );
};

export default MemorialInfo;
