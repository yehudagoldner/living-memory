import Navbar from "./components/Navbar/Navbar.js";
import FriendList from "./pages/friendList/friendList.jsx";
import Contribute from "./pages/contribute/contribute.jsx";
import UploadFile from "./pages/upload file/uploadFile.jsx";

import "./App.css";
// import ArrowDown from "./components/arrowDown/arrowDown.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />;{/* <FriendList /> */}
      {/* <Contribute /> */}
      <UploadFile />
    </div>
  );
}

export default App;
