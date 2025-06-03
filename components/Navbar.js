'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    if (tokenCookie) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);


  function handleLogout() {
    document.cookie = 'token=; Max-Age=0; path=/;';
    setAuthenticated(false)
    router.push('/signin');
  }
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <a href="/home" className="flex items-center py-4">
                <Image alt='jobhub logo' src="/images/Jobhub_logo.png" width={150} height={150} />
              </a>
            </div>
            {/* Primary Nav - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/home" className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold">Home</a>
              <a href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Services</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
              <a href="/candidatesignup" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Candidate Login</a>
              <a href="/candidatesignin" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">C Login</a>
            </div>
          </div>
          {/* Secondary Nav - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {!authenticated ? (
              <>
                <a href="/signin" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</a>
                <a href="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</a>
              </>
            ) : (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="">
          <li><a href="#" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Services</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;