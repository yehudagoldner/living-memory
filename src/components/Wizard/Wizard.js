import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import MemorialInfo from "./MemorialInfo";
import Finish from "./Finish";
import Navbar from "../Navbar/Navbar";
import Button from "@mui/material/Button";

import "./Wizard.css";
import { Typography } from "@mui/material";
import NextButton from "./PrevNextButtons";

const Form = () => {

  const [page, setPage] = useState(0);

  const [checkLevelOneForm, setCheckLevelOneForm] = useState(false);
  const [checkLevelTwoForm, setCheckLevelTwoForm] = useState(false);
  console.log(checkLevelOneForm);

  const [formData, setFormData] = useState({
    facebookUserName: "",
    facebookEmail: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordVerification: "",
    about: "",
    birthDate: "",
    passingDate: "",
    about: "",
  });



  const PageDisplay = (checkLevelOneForm, checkLevelTwoForm) => {
    switch (page) {
      case 0:
        return (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            checkLevelOneForm={checkLevelOneForm}
            setPage={setPage}
            page={page}
            setCheckLevelOneForm={setCheckLevelOneForm}
          />
        );

      case 1:
        return (
          <MemorialInfo
            formData={formData}
            setFormData={setFormData}
            checkLevelTwoForm={checkLevelTwoForm}
            setPage={setPage}
            page={page}
            setCheckLevelTwoForm={setCheckLevelTwoForm}
          />
        );

      case 2:
        return (
          <Finish
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
            page={page}
          />
        );
    }
  };

  return (
    <>
    <Navbar />
    <section className="form">
      <h1 className="wizard-title">
      Create a memorial site for your loved one in one click
      </h1>
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
          {PageDisplay(checkLevelOneForm, checkLevelTwoForm)}
          {/* <div className="footer">
            <Button
              sx={{ mr: "5px" }}
              className="prev-btn"
              variant="outlined"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </Button>
            <Button
              sx={{ ml: "5px" }}
              className="next-btn"
              variant="outlined"
              onClick={() => {
                nextClick();
              }}
            >
              {page === 2 ? "Submit" : "Next"}
            </Button>
          </div> */}
        </div>
      </div>
    </section>
    </>
  );
};
export default Form;
