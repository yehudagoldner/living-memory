// import UploadFile from "./pages/upload file/uploadFile.jsx";
import "./App.css";
import React from "react";
import Wizard from "../src/components/Wizard/Wizard";
import {
  Switch,
  Route,  
} from "react-router-dom";
import { FacebookProvider } from "./context/context.provider.jsx";

import "./App.css";
// import EmailButton from "./components/EmailButton/EmailButton";

import UserRoutes from "./UserRoutes.js";
// import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
// import AddWriting from "./pages/homePage/linkComponents/addingWriting/AddWriting";


function App() {
  return (
<<<<<<< HEAD
    <FacebookProvider>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
=======
    <div className="App">
    
>>>>>>> 0578df523ac7e05b90b534b824cedf5a3a8cb930
        {/* <FriendList /> */}
        {/* <Contribute /> */}
        {/* <UploadFile /> */}
        {/* <BrowserRouter> */}
        {/* <Navbar /> */}

        <Switch>
          <Route exact path="/" component={Wizard} />
          
            {/* <Route exact path="/bookview" component={Book} /> */}
            <Route exact path="/:userid/" component={UserRoutes} />                      
        </Switch>
        {/* <Footer /> */}
        {/* </BrowserRouter> */}
      </div>
  );
}

export default App;
