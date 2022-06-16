import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link to="/" className="normal-case text-4xl">
            Pet Care
          </Link>
        </div>
        <div className="flex-none ml-5">
          <ul className="menu menu-horizontal p-0">
            <li className="">
              <Link to="/signIn" className="btn btn-primary text-white">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
