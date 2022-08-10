import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TermsOfUse = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: "30px" }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="flex-start">
        <Typography display="flex" alignItems="flex-start" variant="h4">
          Terms of use
        </Typography>
      </Box>
      <Box
        width="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: "30px", mb: "50px" }}
      >
        <Typography variant="h6">
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
          amet, consectetur adip
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsOfUse;
