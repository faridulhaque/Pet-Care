import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let form = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [rePassword, setRePassword] = useState({ value: "", error: "" });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

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
    if (e.target.value.length <= 7) {
      setPassword({
        value: "",
        error: "Password must be at least 8 characters long",
      });
    } else {
      setPassword({ value: e.target.value, error: "" });
    }
  };

  // handle password confirmation with onBlur
  const handleRePassword = (e) => {
    if (e.target.value === password.value) {
      setRePassword({ value: e.target.value, error: "" });
    } else {
      setRePassword({
        value: "",
        error: "Password did not match",
      });
    }
  };

  // create user with email and password
  const handleCreateUser = () => {
    console.log(email.value, password.value, rePassword.value);
    if (email.value && password.value && rePassword.value) {
      createUserWithEmailAndPassword(email.value, password.value);
    } else {
      alert("Input fields should not be empty");
    }
  };
  // handle user and loading
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (user || gUser) {
    navigate(form, { replace: true });
  }
  return (
    <div>
      <div className="card card-shadow-2xl bg-100 card-signIn my-10">
        <h1 className="text-center text-secondary text-4xl font-bold">
          Sign Up Now
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
          {email.error && <small className="text-primary">{email.error}</small>}
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
          {password.error && (
            <small className="text-primary">{password.error}</small>
          )}
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

            {rePassword.error && (
              <small className="text-primary">{rePassword.error}</small>
            )}
          </div>
          <div>
            <small
              onClick={() => navigate("/signIn")}
              className="navigation-text"
            >
              Already have an account?
            </small>
          </div>
          <div className="form-control mt-6">
            <button onClick={handleCreateUser} className="btn btn-secondary">
              Sign in
            </button>
          </div>

          <div className="form-control mt-6">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-secondary"
            >
              Sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
