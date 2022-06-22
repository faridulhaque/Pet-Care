import React from "react";
import Banner from "../Home/Banner";
import PetShop from "../Home/PetShop";
import Services from "../Home/Services";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Services></Services>
      <PetShop></PetShop>
    </div>
  );
};

export default Main;
