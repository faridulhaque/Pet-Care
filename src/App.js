import { Route, Routes } from "react-router-dom";
import "./App.css";
import ServiceDetail from "./DynamicPages/ServiceDetail";
import SignIn from "./DynamicPages/SignIn";
import SignUp from "./DynamicPages/SignUp";

import Main from "./Main/Main";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route
          path="/home/:id"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
