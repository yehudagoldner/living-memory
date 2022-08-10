<<<<<<< HEAD
import Navbar from "./components/Navbar/Navbar.js";
import FriendList from "./pages/friendList/friendList.jsx";
import Contribute from "./pages/contribute/contribute.jsx";
import UploadFile from "./pages/upload file/uploadFile.jsx";

import "./App.css";
// import ArrowDown from "./components/arrowDown/arrowDown.jsx";
=======
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
>>>>>>> 27afc70f38c3fbd21897ae3adbc64fc6fbdf0560

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />;{/* <FriendList /> */}
      {/* <Contribute /> */}
      <UploadFile />
=======
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
>>>>>>> 27afc70f38c3fbd21897ae3adbc64fc6fbdf0560
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
