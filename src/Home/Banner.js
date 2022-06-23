import React from "react";
import pet from "../assets/bannerCat.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero min-h-fit bg-base-100 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={pet} className="max-w-sm h-80" />
          <div className="min-w-0">
            <h1 className="text-5xl font-bold">Welcome to Pet Care!</h1>
            <p className="py-6">
              Hi! This is Doctor Alina! I work as a vet in Dhaka with four years
              of experience. I try to make a better world for your pets.
            </p>
            <button
              onClick={() => navigate("/signUp")}
              className="btn btn-secondary text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
