import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="card card-shadow-2xl bg-100 card-signIn mt-10">
        <h1 className="text-center text-primary text-4xl font-bold">
          Sign up to Continue...
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
              type="password"
              placeholder="Re-enter your password"
              className="input input-bordered"
            />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline btn-primary">
              Sign up with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
