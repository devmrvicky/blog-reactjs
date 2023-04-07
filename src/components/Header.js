import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";

const Header = ({ expandSearchBox, setExpandSearchBox, search, setSearch }) => {
  const [isPullDown, setIsPullDown] = useState(false);

  return (
    <header className="bg-cyan-50">
      <div className="container mx-auto flex items-center justify-between py-2 relative">
        <Logo title="React Js Blog" />
        {/* pages link */}
        <ul
          className={`pages ${
            isPullDown ? "pull-down" : ""
          } flex flex-col items-center justify-center  md:justify-between gap-3 bg-white md:bg-transparent shadow-sm md:shadow-none z-20 absolute py-2 w-full md:static md:w-unset md:flex-row`}
        >
          <li>
            <Link
              to="/"
              className="capitalize text-xl text-slate-400 hover:text-slate-600 py-2 px-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="capitalize text-xl text-slate-400 hover:text-slate-600 py-2 px-4"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="capitalize text-xl text-slate-400 hover:text-slate-600 py-2 px-4"
            >
              contact
            </Link>
          </li>
        </ul>
        {/* control buttons */}
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link
              to="/NewPost"
              className="flex items-center gap-3 border py-2 px-3 rounded-3xl hover:bg-zinc-50"
            >
              <FaPlus className="text-xs" />
              <span className="capitalize">post</span>
            </Link>
          </li>
          <li className="search-post relative">
            <form
              action=""
              className={`flex items-center justify-center hover:border rounded-full overflow-hidden h-10 ${
                expandSearchBox
                  ? "w-96 border shadow-md bg-slate-50 px-3 absolute right-0 -top-5 lg:static"
                  : "w-10"
              } hover:shadow-md hover:bg-slate-50`}
              onClick={() => setExpandSearchBox(true)}
            >
              <FaSearch className="text-xl text-slate-400" />
              <input
                type="search"
                autoFocus={true}
                placeholder="Search posts..."
                // className="w-96 py-1 pl-3 outline-none text-md"
                className={`${
                  !expandSearchBox ? "w-0" : "w-full py-1 pl-3"
                } outline-none text-md bg-transparent`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onBlur={(e) => setExpandSearchBox(false)}
              />
            </form>
          </li>
          <li className="light-dark">
            <button>
              <span className="toggle"></span>
            </button>
          </li>
          {/* menu button */}
          <li className="md:hidden">
            <button
              className="bg-red-500 hover:shadow-md h-9 w-12 flex flex-col items-center justify-center gap-1 cursor-pointer"
              onClick={() => setIsPullDown((oldValue) => !oldValue)}
            >
              <span
                className={`line h-1 w-8 block bg-white ${
                  !isPullDown ? "" : "rotate-[28deg] origin-left"
                } `}
              ></span>
              <span
                className={`line h-1 w-8 block bg-white ${
                  !isPullDown ? "" : "invisible"
                }`}
              ></span>
              <span
                className={`line h-1 w-8 block bg-white ${
                  !isPullDown ? "" : "rotate-[-28deg] origin-left"
                } `}
              ></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
