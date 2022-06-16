import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./DynamicPages/SignIn";
import SignUp from "./DynamicPages/SignUp";

import Main from "./Main/Main";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
