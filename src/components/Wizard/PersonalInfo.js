import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextButton from "./PrevNextButtons";

const PersonalInfo = ({
  formData,
  setFormData,
  checkLevelOneForm,
  page,
  setPage,
  setCheckLevelOneForm,
}) => {
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
          // sx={{
          //   "& > :not(style)": { m: 1, width: "25ch" },
          // }}
          noValidate
          autoComplete="off"
        >
          <div className="personal-info-firstname-validation">
            <TextField
              // sx={{ mb: "20px" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            {!formData.firstName && checkLevelOneForm ? (
              <Typography sx={{ color: "red" }}>
                This is a required field
              </Typography>
            ) : (
              ""
            )}
            <TextField
              sx={{ mt: "16px" }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {!formData.lastName && checkLevelOneForm ? (
              <Typography
                className="personal-info-firstname-validation"
                sx={{ color: "red" }}
              >
                This is a required field
              </Typography>
            ) : (
              ""
            )}
            <TextField
              sx={{ mt: "16px" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {!formData.email && checkLevelOneForm ? (
              <Typography
                className="personal-info-firstname-validation"
                sx={{ color: "red" }}
              >
                This is a required field
              </Typography>
            ) : (
              ""
            )}

            <TextField
              sx={{ mt: "16px" }}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {!formData.password && checkLevelOneForm ? (
              <Typography
                className="personal-info-firstname-validation"
                sx={{ color: "red" }}
              >
                This is a required field
              </Typography>
            ) : (
              ""
            )}
            <TextField
              sx={{ mt: "16px" }}
              id="outlined-basic"
              label="Password Verification"
              type="password"
              variant="outlined"
              value={formData.passwordVerification}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  passwordVerification: e.target.value,
                })
              }
            />
            {!formData.passwordVerification &&
            formData.passwordVerification !== formData.password &&
            checkLevelOneForm ? (
              <Typography
                className="personal-info-firstname-validation"
                sx={{ color: "red" }}
              >
                Password verification and password must be identical
              </Typography>
            ) : (
              ""
            )}
          </div>
        </Box>
        <NextButton
          formData={formData}
          setFormData={setFormData}
          checkLevelOneForm={checkLevelOneForm}
          setCheckLevelOneForm={setCheckLevelOneForm}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};
export default PersonalInfo;
