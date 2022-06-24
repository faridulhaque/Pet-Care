import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Firebase.init";


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth)
    
  }
  return (
    <div>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <Link to="/" className="normal-case text-4xl text-white">
            Pet Care
          </Link>
        </div>
        <div className="flex-none ml-5">
          <ul className="menu menu-horizontal p-0">
            <li className="">
              {
                !user ? <Link to="/signIn" className="btn btn-white text-white">
                Sign In
              </Link> : <button onClick={handleSignOut} className="btn btn-white text-white">Sign Out</button>
              }
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
