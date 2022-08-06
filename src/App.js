import { Switch, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

// import Main from "./components/main/main.jsx";
import DrawerAppBar from "./components/Navbar/Navbar.js";
import HomePage from "./pages/homePage/HomePage";
import Main from "./pages/friend list/main";

import React from "react";

const App = () => {
  return (
    <div>
      <DrawerAppBar />
      <Switch>
        <Route path="/timeline">
          <HomePage />
        </Route>
        <Route path="/invite_friends">
          <Main />
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
