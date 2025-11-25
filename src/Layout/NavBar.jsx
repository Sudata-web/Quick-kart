// src/components/NavBar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import toast, {} from "react-hot-toast";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); 

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm md:text-base transition ${
      isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
    }`;

  const onSearch = (e) => {
    e.preventDefault();
    console.log("search:", q);
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");
    setUser(null);
    setOpen(false);
    navigate("/signin"); 
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="QuickCart"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
              Q
            </span>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Quick<span className="text-gray-800">Cart</span>
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right: Search + Sign In (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={onSearch} className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="w-56 lg:w-72 rounded-full border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
              />
            </form>
            {/* <Link
              to="/signin"
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-orange-500 hover:text-orange-600 transition"
            >
              Sign In
            </Link> */}
            {user ?(
              <>
              <span className="text-gray-700 font-medium">Hi,{user.name.split(" ")[0]}</span>
              <button onClick={handleLogout}
              className="inline-flex items-center rounded-full border-gray-200 px-4 py-2 text-sm font-medium">
                LogOut
              </button>
              </>
            ):(
              <Link to="/signin"
              className="inline-flex items-center rounded-full border-gray-200 px-4 py-2 text-sm font-medium">
              </Link>
            )}
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-3">
            <form onSubmit={onSearch} className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
              />
            </form>

            <nav className="flex flex-col">
              <NavLink
                onClick={() => setOpen(false)}
                to="/"
                className={navLinkClass}
                end
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/products"
                className={navLinkClass}
              >
                Shop
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/about"
                className={navLinkClass}
              >
                About Us
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </nav>

            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-orange-500 hover:text-orange-600 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;