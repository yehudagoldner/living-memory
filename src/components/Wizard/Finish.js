import React from "react";
import Cookies from 'universal-cookie';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextButton from "./PrevNextButtons";

const cookies = new Cookies();

const Finish = ({
  formData,
  setFormData,
  checkLevelOneForm,
  page,
  setPage,
  setCheckLevelOneForm,
}) => {
  return (
    <>
      {/* <Box sx={{ mb:"55px"}}>
        <Typography sx={{fontWeight:"bold", fontSize:"24px", mb:"15px"}}>Details Summary</Typography>
      </Box> */}

      <Box className="summary-container">
        <Typography
          className="summary-container-grid-1"
          sx={{ fontWeight: "bold", fontSize: "24px" }}
        >
          Personal Info:
        </Typography>
        <Typography
          className="summary-container-grid-2"
          sx={{ fontSize: "18px" }}
        >
          <span className="summary-subTitle"> First Name:</span>{" "}
          {formData.firstName}
        </Typography>

        <Typography
          className="summary-container-grid-3"
          sx={{ fontSize: "18px" }}
        >
          <span className="summary-subTitle"> Last Name:</span>{" "}
          {formData.lastName}
        </Typography>

        <Typography
          className="summary-container-grid-4"
          sx={{ fontSize: "18px", mb: "40px" }}
        >
          <span className="summary-subTitle"> Email:</span> {formData.email}
        </Typography>

        <Typography
          className="summary-container-grid-5"
          sx={{ fontWeight: "bold", fontSize: "22px" }}
        >
          Memorial Info:
        </Typography>

        <Typography className="summary-container-grid-6">
          <span className="summary-subTitle">Facebook User Name: </span>{" "}
          {formData.facebookUserName}
        </Typography>

        <Typography className="summary-container-grid-7">
          <span className="summary-subTitle">Facebook Email: </span>{" "}
          {formData.facebookEmail}
        </Typography>

        <Typography className="summary-container-grid-8">
          <span className="summary-subTitle">Date of birth:</span>{" "}
          {formData.birthDate}
        </Typography>
        <Typography className="summary-container-grid-9">
          <span className="summary-subTitle">Date of passing away:</span>{" "}
          {formData.passingDate}
        </Typography>
        <Typography className="summary-container-grid-10">
          <span for="about" className="summary-subTitle">
            About the momorialzed person:
          </span>
          <span className="summary-about">{formData.about}</span>
        </Typography>
      </Box>
      <NextButton
        formData={formData}
        setFormData={setFormData}
        onSubmit={()=>{
          cookies.set('userData', JSON.stringify(formData));
        }}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Finish;
