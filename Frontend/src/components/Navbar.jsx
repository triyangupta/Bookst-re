import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import {useAuth} from "../context/AuthProvider.jsx"

const Navbar = () => {

  const [authUser, setAuthUser] = useAuth()
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    }
    window.addEventListener('scroll', handlerScroll)
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    }
  }, [])
  const navbarItem = (
    <>
      <li><a className="font-medium hover:text-primary transition" href="/">Home</a></li>
      <li><a className="font-medium hover:text-primary transition" href="/course">Course</a></li>
      <li><a className="font-medium hover:text-primary transition" href="/contact">Contact</a></li>
      <li><a className="font-medium hover:text-primary transition" href="/about">About</a></li>
    </>
  );

  return (
    <div
      className={`w-full sticky top-0 z-50 transition-all duration-300 
  ${sticky ? "bg-base-200/80 backdrop-blur-md shadow-md" : "bg-base-100"}`}
    >
      <div className="navbar max-w-screen-2xl mx-auto px-4">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {navbarItem}
            </ul>
          </div>

          {/* Logo */}
          <a className="text-2xl md:text-3xl font-bold cursor-pointer text-base-content">
            BookSt@re
          </a>


        </div>

        {/* CENTER MENU (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2">
            {navbarItem}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2 md:gap-6 ml-auto">

          {/* Search */}
          <div className="hidden md:block ">
            <label className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-200 focus-within:ring-2 transition">
              <svg className="h-4 w-4 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" />
              </svg>
              <input
                type="search"
                placeholder="Search books..."
                className="bg-transparent outline-none text-sm w-32 md:w-44"
              />
            </label>
          </div>

          {/* Theme toggle */}
          <label className="swap swap-rotate ">
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* Sun */}
            <svg className="swap-off h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> </svg>

            {/* Moon */}
            <svg className="swap-on h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </label>

          {/* Login button */}
          {
            authUser ? <Logout /> :
              (
                <div>
                  <a className="cursor-pointer font-medium p-2 px-3 rounded-md bg-black text-white hover:bg-slate-600 " onClick={() => document.getElementById("my_modal_5").showModal()}>Login</a>
                  <Login />
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
