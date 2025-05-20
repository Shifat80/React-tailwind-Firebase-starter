import React from "react";
import { TbHomeSearch } from "react-icons/tb";
import { Link } from "react-router"; // Import Link from react-router

const Nav = () => {
  return (
    <div className="navbar bg-transparent shadow-sm">
      <div className="flex-1">
        <a className="text-2xl text-black"><TbHomeSearch /></a>
      </div>
      <div className="flex gap-2">
        <div>
          <Link to="/login">
            <button className="btn btn-primary rounded-2xl sticky">Get Started</button>
          </Link>
        </div>
        <div className="dropdown dropdown-end bg-white">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full bg-white">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;