import React, { useContext } from "react";

import Header from "../src/components/Header/Header";
import Email from "../src/components/Email/Email";
import PopUp from "../src/components/PopUp/PopUp";
import HomePage from "../src/pages/homePage/HomePage";
import AddPhoto from "./pages/homePage/linkComponents/addingPhoto/AddPhoto";
import FriendList from "./pages/friendList/friendList.jsx";
import Contribute from "./pages/contribute/contribute.jsx";
import Candles from "./pages/candles/Candles";

import { Switch, Route } from "react-router-dom";
import { FacebookProvider } from "./context/context.provider.jsx";
import Navbar from "../src/components/Navbar/Navbar";

export default function UserRoutes(props) {
  const userid = props.match.params.userid;  
  return (
    <FacebookProvider userid={userid}>
      <Navbar logedIn />
      {<Header {...{userid}} />} 
      
      {/* <Route exact path="/bookview" component={Book} /> */}
      <Switch>
        <Route exact path={`/:userid/candles`} component={Candles} />
        <Route exact path="/:userid/" component={HomePage} />
        <Route exact path="/:userid/contribute" component={Contribute} />
        <Route exact path="/:userid/photos" component={AddPhoto} />

        <Route exact path="/:userid:/email">
          <Email />
        </Route>
        

        <Route exact path="/:userid/invite_friends">
          <FriendList />
        </Route>
        <Route exact path="/:userid/details/:imageID" component={PopUp} />
      </Switch>
    </FacebookProvider>
  );
}
