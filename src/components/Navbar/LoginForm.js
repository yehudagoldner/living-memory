import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./Navbar.css";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="form-outer" onSubmit={submitHandler}>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="name"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="password"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        {error != "" ? <div className="error"> {error} </div> : ""}
        <Button
          type="submit"
          sx={{ color: "white", mt: "30px" }}
        >
          LOGIN
        </Button>
        {/* <input className="loginbutton" type="submit" value="LOGIN" /> */}
      </div>
    </form>
  );
};

export default LoginForm;
