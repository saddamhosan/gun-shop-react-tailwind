import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const {pathname}=useLocation()
  return (
    <div
      className={
        pathname.includes("gun")
          ? "hidden justify-around items-center bg-blue-100 h-[60px] "
          : "flex justify-around items-center bg-blue-100 h-[60px] "
      }
    >
      <div>
        <h1 className="text-3xl font-bold">Gun Shop</h1>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 text-xl text-red-300" : "mr-4 text-xl"
          }
          to="/"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 text-xl text-red-300" : "mr-4 text-xl"
          }
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 text-xl text-red-300" : "mr-4 text-xl"
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 text-xl text-red-300" : "mr-4 text-xl"
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
