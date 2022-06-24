import React from "react";
import bannerPic from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";

const Banner = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if(loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="hero min-h-fit bg-base-100 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{boxSizing: 'border-box', borderRadius: '0 25px 0 25px'}} src={bannerPic} className="max-w-sm h-80" alt="vet"/>
          <div className="min-w-0">
            <h1 className="text-5xl font-bold">Welcome to Pet Care!</h1>
            <p className="py-6">
              Hi! This is Doctor Alina! I work as a vet in Dhaka with four years
              of experience. I try to make a better world for your pets.
            </p>
            {
              !user && <button
              onClick={() => navigate("/signUp")}
              className="btn btn-secondary text-white"
            >
              Get Started
            </button>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
