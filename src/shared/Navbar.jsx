import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const {user , logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
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
        <Link to="/" className="text-white">
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-white">
          OUR MENU
        </Link>
      </li>
      <li>
        <Link to="/order/salad" className="text-white">
          Order Food
        </Link>
      </li>
      <li>
        <Link to="/shop" className="text-white">
          OUR SHOP
        </Link>
      </li>
      {
        // user ? 'true' : 'false'
        // user? 'condition'? 'double true' : 'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome" className="text-white">
            Dashboard
          </Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome" className="text-white">
            Dashboard
          </Link>
        </li>
      )}
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
            <h2 className="block tracking-[0.3em]  font-light ">RESTAURANT</h2>
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
        <Link to="/dashboard/cart" className="relative">
          <FaShoppingCart className="text-2xl" />
          <span className="badge badge-error badge-sm absolute -top-2 -right-2">
            +{cart.length}
          </span>
        </Link>

        {/* Sign out */}
        {user?.email ? (
          <>
            {user?.photoURL ? (
              <div>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL}
                  alt="User"
                />
                <p className="text-sm">{user.displayName}</p>
              </div>
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
