import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import Email from "../src/components/Email/Email";
import PopUp from "../src/components/PopUp/PopUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/friend list/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
// import EmailButton from "./components/EmailButton/EmailButton";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <PopUp />
        <Switch>
          <Route exact path="/email">
            <Email />
          </Route>
          <Route exact path="/terms_of_use">
            <TermsOfUse />
          </Route>

          <Route exact path="/invite_friends">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
