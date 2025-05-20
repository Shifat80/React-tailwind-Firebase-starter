import React from "react";
import { TbHomeSearch } from "react-icons/tb";
import { Link } from "react-router"; // Import Link from react-router
import { useAuth } from "./Context/Authprovider";

const Nav = () => {
  const { user, logOut } = useAuth(); // Changed from "logout" to "logOut"

  return (
    <div className="navbar bg-transparent shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="text-2xl text-black"><TbHomeSearch /></Link>
      </div>
      <div className="flex gap-2">
        {!user ? (
          <div>
            <Link to="/login">
              <button className="btn btn-primary rounded-2xl sticky">Get Started</button>
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end bg-white">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-white">
                {user.photoURL ? (
                  <img
                    alt={user.displayName || "User avatar"}
                    src={user.photoURL}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-xl">
                    {user.displayName ? user.displayName[0].toUpperCase() :
                     user.email ? user.email[0].toUpperCase() : "U"}
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logOut}>Logout</button> {/* Changed from "logout" to "logOut" */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;