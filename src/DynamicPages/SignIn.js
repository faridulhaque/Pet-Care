import React from "react";
import "./DynamicPages.css";

const SignIn = () => {
  return (
    <div>
      
        
      <div className="card card-shadow-2xl bg-100 card-signIn mt-20">
      <h1 className="text-center text-primary text-4xl font-bold">
        Sign In to Continue...
      </h1>
      <div className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <button className="label-text-alt link link-hover">
              Forgot password?
            </button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
