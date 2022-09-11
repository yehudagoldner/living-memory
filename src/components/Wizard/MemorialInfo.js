import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextButton from "./PrevNextButtons";
// import { DatePicker } from "react-responsive-datepicker";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MemorialInfo = ({
  formData,
  setFormData,
  checkLevelTwoForm,
  page,
  setPage,
  setCheckLevelTwoForm,
}) => {
  //   const [value, setValue] = React.useState(null);
  // const [isOpen, setIsOpen] = React.useState(false);

  // console.log(checkLevelOneForm);
  return (
    <>
      <Typography sx={{ fontWeight: "bold", fontSize: "24px", mb: "30px" }}>
        Information about the memorialized person
      </Typography>

      <div className="memorial-info-container">
        <TextField
          className="memorial-info-grid-1"
          id="outlined-basic"
          label="Facebook User Name"
          variant="outlined"
          value={formData.facebookUserName}
          onChange={(e) =>
            setFormData({ ...formData, facebookUserName: e.target.value })
          }
        />
        <span className="memorial-info-grid-8">
          {!formData.facebookUserName && checkLevelTwoForm ? (
            <Typography
              className="personal-info-firstname-validation"
              sx={{ color: "red" }}
            >
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </span>
        <TextField
          className="memorial-info-grid-2"
          id="outlined-basic"
          label="Facebook Email"
          variant="outlined"
          value={formData.facebookEmail}
          onChange={(e) =>
            setFormData({ ...formData, facebookEmail: e.target.value })
          }
        />
        <span className="memorial-info-grid-9">
          {!formData.facebookEmail && checkLevelTwoForm ? (
            <Typography
              className="personal-info-firstname-validation"
              sx={{ color: "red" }}
            >
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </span>

        <label className="memorial-info-grid-6" for="start">
          Date of birth:
        </label>
        <input
          className="memorial-info-grid-3"
          type="date"
          id="start"
          name="trip-start"
          value={formData.birthDate}
          onChange={(e) =>
            setFormData({ ...formData, birthDate: e.target.value })
          }
        ></input>
        <span className="memorial-info-grid-10">
          {!formData.birthDate && checkLevelTwoForm ? (
            <Typography
              className="personal-info-firstname-validation"
              sx={{ color: "red" }}
            >
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </span>

        <label className="memorial-info-grid-7" for="start">
          Date of passing away:
        </label>
        <input
          className="memorial-info-grid-4"
          type="date"
          id="start"
          name="trip-start"
          value={formData.passingDate}
          onChange={(e) =>
            setFormData({ ...formData, passingDate: e.target.value })
          }
        ></input>
        <span className="memorial-info-grid-11">
          {!formData.passingDate && checkLevelTwoForm ? (
            <Typography
              className="personal-info-firstname-validation"
              sx={{ color: "red" }}
            >
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </span>
        <TextField
          className="memorial-info-grid-5"
          id="outlined-multiline-static"
          label="Tell us about the momorialzed person"
          multiline
          rows={8}
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        />
        <span className="memorial-info-grid-12">
          {!formData.about && checkLevelTwoForm ? (
            <Typography
              className="personal-info-firstname-validation"
              sx={{ color: "red" }}
            >
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </span>
      </div>
      <NextButton
        formData={formData}
        setFormData={setFormData}
        checkLevelTwoForm={checkLevelTwoForm}
        setCheckLevelTwoForm={setCheckLevelTwoForm}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default MemorialInfo;
