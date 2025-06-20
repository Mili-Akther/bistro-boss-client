import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/" className="font-bold text-yellow-400">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-white">
          CONTACT US
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="text-white">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-white">
          OUR MENU
        </Link>
      </li>
      <li>
        <Link to="/shop" className="text-white">
          OUR SHOP
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10  bg-black/30 text-white px-4 md:px-10 max-w-screen-xl">
      {/* Left side: Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl leading-tight"
        >
          <div className="">
            <h2 className="block font-bold text-3xl">BISTRO BOSS</h2>
            <h2 className="block tracking-[0.3em]  font-light ">
              RESTAURANT
            </h2>
          </div>
        </Link>
      </div>

      {/* Center menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-4">
        {/* Shopping cart with badge */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl" />
          <span className="badge badge-error badge-sm absolute -top-2 -right-2">
            1
          </span>
        </Link>

        {/* Sign out */}
        <button className="btn btn-ghost text-white">SIGN OUT</button>

        {/* User icon */}
        <FaUserCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
