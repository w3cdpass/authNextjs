"use client";
import Image from "next/image";

import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when resizing to desktop view
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's 'md' breakpoint
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white w-full shadow-md">
      <div className="w-[85%] container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <Image
              src="/images/Jobhub_logo.png"
              alt="Jobhub World"
              width={100}
              height={100}
              className="h-10 w-auto"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-blue-600">
                Jobs
              </a>
            </li>
            <li>
              <a href="/resize" className="hover:text-blue-600">
                Build Resume
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="/admin"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Admin Login
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <a
            href="/admin"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Admin Login
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-40 overlay ${
          isOpen ? "visible" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 mobile-menu ${
            isOpen ? "open" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="/resize"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Build Resume
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
