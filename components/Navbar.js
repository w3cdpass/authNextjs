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
    <nav className='bg-white shadow-lg flex justify-center'>
      <div className='w-[85%] flex justify-between p-5 sm:text-[18px] lg:text-[20px] '>  
            <a href=''><Image src="/images/Jobhub_logo.png" alt='jobhub world logo' width={100} height={100} /></a>        
        <ul className='flex justify-center gap-4'>
          <li><a href=''>Home</a></li>
          <li><a href=''>Jobs</a></li>
          <li><a href=''>Build Resume</a></li>
          <li><a href=''>About</a></li>
          <li><a href=''>Contact Us</a></li>
        </ul>
        <div>
          <a href=''>Admin Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;