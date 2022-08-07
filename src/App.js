import Navbar from "../src/component/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Main from "./components/main/main.jsx";
function App() {
  return (
    <div className="App">
      <Main />   
      <BrowserRouter>
        <Navbar />;
      </BrowserRouter>
    </div>
  );
}

export default App;
