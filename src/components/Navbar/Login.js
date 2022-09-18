import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./Navbar.css";

const Login = ({ user, setUser, error, setError }) => {
  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123",
  // };

  // const Login = (details) => {
  //   console.log(details);
  //   if (
  //     details.email == adminUser.email &&
  //     details.password == adminUser.password
  //   ) {
  //     console.log("Logged in");
  //     setUser({ name: details.name, email: details.email });
  //   } else {
  //     console.log("Details do not match");
  //     setError("Details do not match")
  //   }
  // };

  // const LogOut = () => {
  //   console.log("Logout");
  //   setUser({ name: "", email: "" });
  // };

  return (
    <div className="login">
      {user.email != "" ? (
        <div className="welcome">
          {" "}
          <h3>
            Welcome,&nbsp;<span> {user.name}</span>{" "}
          </h3>{" "}
          {/* <button onClick={LogOut}>Logout</button>{" "} */}
        </div>
      ) : (
        <LoginForm {...{ user, setUser }} error={error} />
      )}
    </div>
  );
};

export default Login;
