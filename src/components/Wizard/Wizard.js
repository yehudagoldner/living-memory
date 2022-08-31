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
import { makeStyles } from "@mui/styles";
import { Formik, Form } from "formik";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
