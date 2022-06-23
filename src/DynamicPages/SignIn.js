import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DynamicPages.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // codes for email validation
  const handleEmail = (email) => {
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmail(email);
      setEmailError("");
    } else {
      setEmailError("Invalid Email!");
      setEmail("");
    }
  };

  // codes for password validation
  const handlePassword = (password) => {
    if (password.length >= 8) {
      setPassword(password);
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 8 characters!");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="card card-shadow-2xl bg-100 card-signIn my-10">
        <h1 className="text-center text-secondary text-4xl font-bold">
          Sign In to Continue...
        </h1>

        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onBlur={(e) => handleEmail(e.target.value)}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            {emailError && <small className="text-primary">{emailError}</small>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onBlur={(e) => handlePassword(e.target.value)}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {passwordError && (
              <small className="text-primary">{passwordError}</small>
            )}
            {/* <label className="label">
              <button className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label> */}
            <label className="label">
              <button
                onClick={() => navigate("/signUp")}
                className="label-text-alt link link-hover"
              >
                Not a member?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={() => console.log(email, password)}
              className="btn btn-secondary"
            >
              Sign in
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-secondary">
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
