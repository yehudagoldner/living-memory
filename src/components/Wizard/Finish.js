import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Finish = ({ formData }) => {
  return (
    <>
      {/* <Box sx={{ mb:"55px"}}>
        <Typography sx={{fontWeight:"bold", fontSize:"24px", mb:"15px"}}>Details Summary</Typography>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "900px",
     
        }}
      >
        <Typography className=""
          sx={{
            fontWeight: "bold",
            fontSize: "28px",

            right: "250px",
          }}
        >
          Personal Info:
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "22px",
          }}
        >
          First Name: {formData.firstName}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "22px",
          mt: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Last Name: {formData.lastName}
      </Typography>
    </>
  );
};

export default Finish;
