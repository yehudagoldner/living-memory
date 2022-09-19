import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import config from "../../config";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";


const checkUser = async (user, setError, history, setUser)=>{
  setUser(user)
  const { data } = await axios.get(`${config.API_ENDPOINT}/api/creator?email=${user.email}&password=${user.password}`)
 if(data) {
  history.push(`/${data.facebook_id}`)
   return;
 } 
 setError("Invalid email or password")
}

const LoginForm = ({ Login, setUser }) => {
  const history = useHistory()
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form className="form-outer" onSubmit={submitHandler}>
      <div className="form-inner">
       
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
            onClick={() => checkUser(details, setError, history, setUser)}
          >
            LOGIN
          </Button>
        
        {/* <input className="loginbutton" type="submit" value="LOGIN" /> */}        
      </div>
    </form>
  );
};

export default LoginForm;
