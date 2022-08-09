import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import Email from "../src/components/Email/Email";
import PopUp from "../src/components/PopUp/PopUp";
import HomePage from "../src/pages/homePage/HomePage";
// import Main from "./pages/friend list/Main";
import Footer from "./components/Footer/Footer";
import DrawerAppBar from "./components/Navbar/Navbar.js";
import {
  Switch,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
// import EmailButton from "./components/EmailButton/EmailButton";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
// import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
// import AddWriting from "./pages/homePage/linkComponents/addingWriting/AddWriting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />

        <Switch>
          <Route exact path="/details" component={PopUp} />

          <Route exact path="/" component={HomePage} />

          <Route exact path="/email">
            <Email />
          </Route>
          <Route exact path="/terms_of_use">
            <TermsOfUse />
          </Route>

          <Route exact path="/invite_friends">
            {/* <Main /> */}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

// export default App
//   return (
//     <div className="App">
//       <DrawerAppBar />
//       <HomePage />
//     </div>
//   );
// }

export default App;
