"use client";
import Image from "next/image";
import Link from "next/link"
import Banner from "@/components/Banner";
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
    <>
      <Banner />
      <nav className="bg-white w-full shadow-md">
        <div className="w-[90%] container mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="logo">
            <Link href="/home">
              <Image
                src="/images/Jobhub_logo.png"
                alt="Jobhub World"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <ul className="flex gap-6 text-gray-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              {/* <li><Link href="/jobs" className="hover:text-blue-600">Apply Jobs</Link></li> */}
              <li><Link href="/interview-prepration" className="hover:text-blue-600">Interview Preparation</Link></li>
              <li><Link href="https://jobhub-resume-builder.vercel.app/" target="_blank" className="hover:text-blue-600">Build Resume Quickly</Link></li>
              <li><Link href="/about-us" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/contact-us" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Desktop Admin Link */}
          <div className="hidden xl:flex items-center">
            <Link href="/admin" className="text-gray-700 hover:text-blue-600 font-medium text-xs sm:text-sm md:text-base">
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Toggle + Admin */}
          <div className="xl:hidden flex items-center gap-4">
            <Link href="/admin" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Admin Login
            </Link>
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

        {/* Overlay and Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 ${isOpen ? "visible" : "hidden"}`}
          onClick={toggleMenu}
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-start gap-4 p-4 text-gray-700 font-medium text-sm">
              <li><Link href="/" onClick={toggleMenu} className="hover:text-blue-600">Home</Link></li>
              {/* <li><Link href="/jobs" onClick={toggleMenu} className="hover:text-blue-600">Jobs</Link></li> */}
              <li><Link href="https://jobhub-resume-builder.vercel.app/" target="_blank" onClick={toggleMenu} className="hover:text-blue-600">Build Resume</Link></li>
              <li><Link href="/interview-prepration" onClick={toggleMenu} className="hover:text-blue-600">Interview Preparation</Link></li>
              <li><Link href="/about-us" onClick={toggleMenu} className="hover:text-blue-600">About</Link></li>
              <li><Link href="/contact-us" onClick={toggleMenu} className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
