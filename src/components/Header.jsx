import React, { useState } from "react";

const NavItems = () => (
  <>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Overview
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Year in Review
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Leadership
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Investment Case
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Strategic Review
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        Operating Review
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-gray-200 text-white">
        ESG
      </a>
    </li>
  </>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-screen h-[70vh] bg-cover bg-center bg-no-repeat p-8"
      style={{ backgroundImage: "url('./image.png')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-1 px-4 md:px-0">
        <div className="flex justify-between items-center w-full md:w-auto">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-24 h-9 md:w-36 md:h-12 flex-shrink-0"
          />
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex justify-center w-full mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <NavItems />
          </ul>
        </nav>
        <nav className="hidden md:flex space-x-4 mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-200 text-white">
                العربي
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon / outlined / action / download-upload / download">
                    <path
                      id="Vector"
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M7 10L12 15L17 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_3"
                      d="M12 15V3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute top-[35%] left-[10%]">
        <h1 className="text-white text-2xl md:text-4xl font-bold hover:cursor-pointer">
          Overview
        </h1>
      </div>
    </header>
  );
};

export default Header;
