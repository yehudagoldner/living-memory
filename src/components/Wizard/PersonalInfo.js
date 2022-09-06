import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const PersonalInfo = ({ formData, setFormData }) => {
  console.log(formData);
  return (
    <>
      <div className="sign-up-container">
        {" "}
        <Typography sx={{ fontWeight: "bold", fontSize: "24px", mb: "30px" }}>
          Information of the perpetuator
        </Typography>
        <Box
          className="personal-info-container"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
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
        </Box>
      </div>
    </>
  );
};
export default PersonalInfo;
