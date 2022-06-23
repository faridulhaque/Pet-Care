import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [rePassword, setRePassword] = useState({ value: "", error: "" });

  // handle email validation with onBlur
  const handleEmail = (e) => {
    if (/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmail({ value: e.target.value, error: "" });
    } else {
      setEmail({ value: "", error: "please enter a valid email address" });
    }
  };

  // handle password validation with onBlur
  const handlePassword = (e) => {
    if (e.target.value >= 8) {
      setPassword({ value: e.target.value, error: "" });
    } else {
      setPassword({
        value: "",
        error: "Password must be at least 8 characters long",
      });
    }
  };

  // handle password confirmation with onBlur
  const handleRePassword = (e) => {
    if (e.target.value >= 8) {
      setRePassword({ value: e.target.value, error: "" });
    } else {
      setRePassword({
        value: "",
        error: "Password must be at least 8 characters long",
      });
    }
  };
  return (
    <div>
      <div className="card card-shadow-2xl bg-100 card-signIn my-10">
        <h1 className="text-center text-secondary text-4xl font-bold">
          Sign up to Continue...
        </h1>
        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onBlur={handleEmail}
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
              onBlur={handlePassword}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              onBlur={handleRePassword}
              type="password"
              placeholder="Re-enter your password"
              className="input input-bordered"
            />
            <label className="label">
              <button
                onClick={() => navigate("/signIn")}
                className="label-text-alt link link-hover"
              >
                Already have an account?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Sign in</button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-secondary">
              Sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
