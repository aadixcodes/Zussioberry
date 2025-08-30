'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

// Remove 'Home' from navLinks, will render it manually as first item
const navLinks = [
  // { href: '/', label: 'Home' }, // handled separately
  { href: '/franchise', label: 'Franchise' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blogs', label: 'Blog' },
  { href: '/news', label: 'News' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact'}
];

const aboutPopupLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/team', label: 'Our Team' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutPopupOpen, setAboutPopupOpen] = useState(false);
  const aboutBtnRef = useRef(null);
  const aboutPopupRef = useRef(null);
  const pathname = usePathname();

  const handleCloseMenu = () => setIsOpen(false);

  // Helper to check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Close About popup when clicking outside
  useEffect(() => {
    if (!aboutPopupOpen) return;
    function handleClick(e) {
      if (
        aboutPopupRef.current &&
        !aboutPopupRef.current.contains(e.target) &&
        aboutBtnRef.current &&
        !aboutBtnRef.current.contains(e.target)
      ) {
        setAboutPopupOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [aboutPopupOpen]);

  // Close About popup on route change (optional, for better UX)
  useEffect(() => {
    setAboutPopupOpen(false);
  }, [pathname]);

  return (
    <header>
      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 border-b-2 border-[#c0baba] font-[para]">
        
        <div className="hidden md:flex flex-col gap-1 text text-black">
          <div className='flex items-center gap-4'>
            <IoCallOutline className='text-[#23aa5d]'/>
            <span>Call at: +91 9769596096</span>
          </div>

          <div className='flex items-center gap-4'>
            <CiMail className='text-[#23aa5d]'/>
            <span>Mail at: franchise@zussioberry.com</span>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src="/assets/SmallZussioberry/zussioberry_logo.png"
            className="w-[140px] h-[60px] object-contain"
            alt="Zussio Berry"
          />
        </div>

        <div className="hidden md:block">
          <Link
            href="/franchise"
            className="bg-[#23aa5d] text-white px-5 py-2 cursor-pointer rounded-md hover:bg-green-700 transition inline-block text-center"
          >
            Get Franchise
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden cursor-pointer"
          onClick={handleCloseMenu}
        />
      )}

      {/* Navigation Menu */}
      <nav
        id="navbar-menu"
        className={`md:static md:h-auto md:w-auto md:bg-transparent 
          md:opacity-100 md:visible md:flex md:flex-row md:items-center md:justify-center
          fixed inset-0 h-full w-full bg-white z-50 flex flex-col transition-all duration-300 ease-in-out
          pt-20 md:pt-0
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-6 right-6 text-3xl text-gray-600 md:hidden"
          onClick={handleCloseMenu}
        >
          <X size={28} />
        </button>

        {/* Menu Items */}
        <ul className="text-lg text-black flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center mb-5 md:space-x-20 px-6 py-4 md:py-2 font-medium my-3">
          {/* Home link as first item */}
          <li className="flex flex-col items-center">
            <Link
              href="/"
              onClick={handleCloseMenu}
              className={`hover:text-green-600 transition-colors ${
                isActive('/')
                  ? 'text-green-600 border-t-2 border-green-600 md:pt-2'
                  : ''
              }`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          {/* About button with popup for desktop, normal link for mobile */}
          <li className="flex flex-col items-center">
            {/* Desktop: About with popup */}
            <div className="hidden md:block relative">
              <button
                ref={aboutBtnRef}
                type="button"
                className={`hover:text-green-600 transition-colors px-2 py-1 focus:outline-none flex items-center gap-1 ${
                  isActive('/about-us') || isActive('/team')
                    ? 'text-green-600 border-t-2 border-green-600 md:pt-2'
                    : ''
                }`}
                aria-haspopup="true"
                aria-expanded={aboutPopupOpen}
                onClick={() => setAboutPopupOpen((open) => !open)}
              >
                About
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform duration-200 ${aboutPopupOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {aboutPopupOpen && (
                <div
                  ref={aboutPopupRef}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2"
                  style={{ minWidth: '160px' }}
                >
                  {aboutPopupLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#23aa5d] transition-colors"
                      onClick={() => setAboutPopupOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile: About as normal link */}
            <div className="md:hidden">
              <Link
                href="/about-us"
                onClick={handleCloseMenu}
                className={`hover:text-green-600 transition-colors ${
                  isActive('/about-us')
                    ? 'text-green-600 border-t-2 border-green-600 md:pt-2'
                    : ''
                }`}
                aria-current={isActive('/about-us') ? 'page' : undefined}
              >
                About
              </Link>
            </div>
          </li>
          {/* Render the rest of the navLinks */}
          {navLinks.map(({ href, label }) => (
            <li key={href} className="flex flex-col items-center">
              <Link
                href={href}
                onClick={handleCloseMenu}
                className={`hover:text-green-600 transition-colors ${
                  isActive(href)
                    ? 'text-green-600 border-t-2 border-green-600 md:pt-2'
                    : ''
                }`}
                aria-current={isActive(href) ? 'page' : undefined}
                style={{
                  borderTopWidth: isActive(href) ? undefined : undefined,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile-only*/}
        <div className="md:hidden font-[para] text-[16px] border-t border-gray-200 px-6 py-4 space-y-4 text-gray-700">
          <div>
            <span>Call at: +91 9769596096</span>
          </div>
          <div>
            <span>Mail at: franchise@zussioberry.com</span>
          </div>
          <Link
            href="/menu"
            className="block text-center bg-[#23aa5d] text-white w-full py-2 rounded-md hover:bg-green-700 transition"
            onClick={handleCloseMenu}>
            View Menu
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

