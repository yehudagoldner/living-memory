import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import { DatePicker } from "react-responsive-datepicker";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MemorialInfo = ({ formData, setFormData }) => {
  //   const [value, setValue] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="memorial-info-container">
        <Typography sx={{ fontWeight: "bold", fontSize: "24px", mb: "15px" }}>
          Information about the memorialized person
        </Typography>
        <Box
          className="memorial-info-form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="memorial-info-grid-1"
            id="outlined-basic"
            label="Facebook User Name"
            variant="outlined"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Facebook Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <TextField
            id="outlined-multiline-static"
            label="Tell us about the momorialzed person"
            multiline
            rows={4}
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          />
        </Box>
      </div>


      
    </>
  );
};

export default MemorialInfo;
