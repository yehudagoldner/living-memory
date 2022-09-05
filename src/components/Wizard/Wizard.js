import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import MemorialInfo from "./MemorialInfo";
import Finish from "./Finish";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./Wizard.css";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    facebookUserName: "",
    facebookEmail: "",
    firstName: "",
    lastName: "",
    email: "",
    about: "",
    birthDate: "",
    passingDate: "",
    about: "",
  });

  //   const FormTitles = ["Personal info", "Memorial info", "finish"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;

      case 1:
        return <MemorialInfo formData={formData} setFormData={setFormData} />;

      case 2:
        return <Finish formData={formData} />;
    }
  };

  return (
    <section className="form">
      <div className="progressbar">
        <div
          className={page === 0 ? "progress-steps active" : "progress-steps"}
          data-title="Personal Info"
        >
          {" "}
        </div>
        <div
          className={page === 1 ? "progress-steps active" : "progress-steps"}
          data-title="Memorial Info"
        >
          {" "}
        </div>
        <div
          className={page === 2 ? "progress-steps active" : "progress-steps"}
          data-title="Details Summary"
        >
          {" "}
        </div>
      </div>

      <div className="form-container">
        <div className="header">
          <h1></h1>
        </div>
        <div className="body">
          {PageDisplay()}
          <div className="footer">
            <Button sx={{mr:"5px"}}
              className="prev-btn"
              variant="outlined"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </Button>
            <Button sx={{ml:"5px"}}
              className="next-btn"
              variant="outlined"
              onClick={() => {
                if (page === 2) {
                  window.confirm("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === 2 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
