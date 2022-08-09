import { Switch, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

// import Main from "./components/main/main.jsx";
import DrawerAppBar from "./components/Navbar/Navbar.js";
import HomePage from "./pages/homePage/HomePage";
import Main from "./pages/friend list/main";

import React from "react";
import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
import AddWriting from "./pages/homePage/linkComponents/addingWriting/AddWriting";

const App = () => {
  return (
    <div>
      <DrawerAppBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/invite_friends">
          <Main />
        </Route>
        <Route path="/photos">
          <AddPhoto />
        </Route>
      </Switch>
    </div>
  );
};

// export default App
//   return (
//     <div className="App">
//       <DrawerAppBar />
//       <HomePage />
//     </div>
//   );
// }

export default App;
