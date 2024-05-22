import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  const [navToggle, setNavToggle] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setNavToggle(true);
    } else {
      setNavToggle(false);
    }
  }, []);

  return (
    <header
      className="flex justify-between items-center h-12 
        bg-cyan-700 px-2 text-white"
    >
      <h1 className="text-xl capitalize">shop</h1>
      <div className="flex w-3/4 relative md:w-4/5 md:justify-between">
        <input
          type="text"
          placeholder="search for ......."
          className="rounded w-4/5 pl-2 outline-0 text-black
            md:w-3/5 lg:w-3/4"
        />
        <FaBars
          className="ml-auto text-3xl cursor-pointer p-1
            hover:bg-cyan-600 md:hidden"
          onClick={() => {
            setNavToggle(!navToggle);
          }}
        />
        <ul
          className={`flex flex-col bg-cyan-700 transition-all absolute -right-2 top-9 w-screen
             duration-1000 md:static md:w-1/3 md:flex-row md:justify-between lg:w-1/5 lg:mr-4 ${
               navToggle ? "nav-hide" : "nav-show"
             }`}
        >
          <li className="nav-link">categoury</li>
          <li className="nav-link flex justify-center items-center">
            <FaCartShopping className="text-xl" />
          </li>
          <li className="nav-link">log in</li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
