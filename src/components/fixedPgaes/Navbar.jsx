import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { IoMdSunny } from "react-icons/io";
import { LuSunMoon } from "react-icons/lu";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light"); 
 
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector('html').setAttribute("data-theme", localTheme)
  },[theme]); 
  const handleToggle =(e)=>{
    if(e.target.checked){
      setTheme('dark');
    }else{
      setTheme('light')
    }
  }


  const links = [
    <>
      <NavLink className={"m-2 text-xl"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"m-2 text-xl"} to={"/addCoffee"}>
        Add Coffee
      </NavLink>
      <NavLink className={"m-2 text-xl"} to={"/allCoffee"}>
        All Coffee
      </NavLink>
      <NavLink className={"m-2 text-xl"} to={"/users"}>
        All User
      </NavLink>
      <NavLink className={"m-2 text-xl"} to={"/about"}>
        About
      </NavLink>
    </>,
  ];

  const HandleLogOutUser = () => {
    logOutUser()
      .then(() => {
        console.log("user log out successfully");
        alert("user logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className=" btn-ghost text-xl">
            {" "}
            Coffee Shop{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {" "}
              <span className="mr-2 bg-amber-300">{user.email}</span>{" "}
              <button onClick={HandleLogOutUser}> Logout </button>{" "}
            </>
          ) : (
            <>
              <NavLink className={"m-2 text-xl"} to={"/login"}>
                Login
              </NavLink>
              <NavLink className={"m-2 text-xl"} to={"/register"}>
                Register
              </NavLink>
            </>
          )}
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input 
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
               type="checkbox" />
              <p className="swap-on h-10 w-10 fill-current">
                <IoMdSunny size={32} />
              </p>
              <p className="swap-off h-10 w-10 fill-current">
                <LuSunMoon size={32} />
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
