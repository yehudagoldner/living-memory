import FriendList from "./pages/friendList/friendList.jsx";
import Contribute from "./pages/contribute/contribute.jsx";
// import UploadFile from "./pages/upload file/uploadFile.jsx";
import "./App.css";
import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import Email from "../src/components/Email/Email";
import PopUp from "../src/components/PopUp/PopUp";
import Wizard from "../src/components/Wizard/Wizard";
import HomePage from "../src/pages/homePage/HomePage";
import Footer from "./components/Footer/Footer";
import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
import DrawerAppBar from "./components/Navbar/Navbar.js";
import Book from "./components/Book/Book";
import {
  Switch,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { FacebookProvider } from "./context/context.provider.jsx";

import "./App.css";
// import EmailButton from "./components/EmailButton/EmailButton";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
// import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
// import AddWriting from "./pages/homePage/linkComponents/addingWriting/AddWriting";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />

      {/* <FriendList /> */}
      {/* <Contribute /> */}
      {/* <UploadFile /> */}
      <BrowserRouter>
=======
    <FacebookProvider>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
        {/* <FriendList /> */}
        {/* <Contribute /> */}
        {/* <UploadFile /> */}
        {/* <BrowserRouter> */}
>>>>>>> 5eece0ea5461d9bea847e4659ff9800ab6b982d4
        {/* <Navbar /> */}
        <Switch>
          <Route
            exact
            path="/wizard"
            render={(props) => <Wizard {...props} />}
          />
        

<<<<<<< HEAD
        <Route
          exact
          path="/details/:imageID"
          render={(props) => (
            <>
              <Header />
              <PopUp  {...props}/>
            </>
          )}
        />
        <Route exact path="/bookview" component={Book} />
=======
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/photos" component={AddPhoto} />

          {/* <Route exact path="/">
          <HomePage />
        </Route> */}
>>>>>>> 5eece0ea5461d9bea847e4659ff9800ab6b982d4

        <Route exact path="/" render={(props) => (
            <>
              <Header />
              
              <HomePage />
            </>
          )} />

<<<<<<< HEAD
        <Route exact path="/email">
          <>
            <Email />              
            </>
        </Route>
        <Route exact path="/terms_of_use">
          
          <TermsOfUse />
        </Route>

        <Route exact path="/invite_friends">
          {/* <Main /> */}
        </Route>
        {/* <Footer /> */}
        </Switch>
      </BrowserRouter>
    </div>
=======
          <Route exact path="/invite_friends">
            <FriendList />
          </Route>
        </Switch>
        <Footer />
        {/* </BrowserRouter> */}
      </div>
    </FacebookProvider>
>>>>>>> 5eece0ea5461d9bea847e4659ff9800ab6b982d4
  );
}

export default App;
