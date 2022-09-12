// import UploadFile from "./pages/upload file/uploadFile.jsx";
import "./App.css";
import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Wizard from "../src/components/Wizard/Wizard";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import Candles from "./pages/candles/Candles";
import { Switch, Route } from "react-router-dom";
import { FacebookProvider } from "./context/context.provider.jsx";

import "./App.css";
// import EmailButton from "./components/EmailButton/EmailButton";

import UserRoutes from "./UserRoutes.js";
// import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
// import AddWriting from "./pages/homePage/linkComponents/addingWriting/AddWriting";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <FriendList /> */}
      {/* <Contribute /> */}
      {/* <UploadFile /> */}
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}

      <Route exact path="/" component={Wizard} />
      <Route exact path="/terms_of_use">
          <TermsOfUse />
        </Route>
      {/* <Route exact path="/bookview" component={Book} /> */}    
      <Route path="/:userid/" component={UserRoutes} />

      {/* <Footer /> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
