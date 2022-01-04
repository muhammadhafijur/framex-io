import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    let sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      let parsedUser = JSON.parse(sessionUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("user");
    setUser({ email: "", name: "" });
    navigate("/");
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex font-bold lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to="/home" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/shop" className="mr-5 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/about-us" className="mr-5 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-gray-900">
              Blog
            </Link>
          </nav>
          <Link
            to="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-gray-800 rounded-full"
              viewBox="0 0 24 24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g transform="translate(2 3)">
                  <path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" />
                  <circle cx="10" cy="10" r="4" />
                </g>
              </svg>
            </svg>
            <span className="ml-3 text-xl">Framex</span>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {user?.email ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="inline-flex font-bold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="inline-flex mr-2 font-bold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                  Log Out
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="inline-flex mr-2 font-bold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="inline-flex mr-2 font-bold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Register
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
