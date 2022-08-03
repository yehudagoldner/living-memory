import Navbar from "../src/component/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />;
    </BrowserRouter>
  );
}

export default App;
