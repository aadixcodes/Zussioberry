// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { IoCallOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";

// const navLinks = [
//   { href: '/franchise', label: 'Franchise' },
//   { href: '/gallery', label: 'Gallery' },
//   { href: '/blogs', label: 'Blog' },
//   { href: '/news', label: 'News' },
//   { href: '/career', label: 'Career' },
//   { href: '/contact', label: 'Contact'}
// ];

// const aboutPopupLinks = [
//   { href: '/about-us', label: 'About Us' },
//   { href: '/team', label: 'Our Team' }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [aboutPopupOpen, setAboutPopupOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const aboutBtnRef = useRef(null);
//   const aboutPopupRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const pathname = usePathname();

//   const handleCloseMenu = () => setIsOpen(false);

//   const isActive = (href) => {
//     if (href === '/') {
//       return pathname === '/';
//     }
//     return pathname.startsWith(href);
//   };

//   // Close About popup when clicking outside
//   useEffect(() => {
//     if (!aboutPopupOpen) return;
//     function handleClick(e) {
//       if (
//         aboutPopupRef.current &&
//         !aboutPopupRef.current.contains(e.target) &&
//         aboutBtnRef.current &&
//         !aboutBtnRef.current.contains(e.target)
//       ) {
//         setAboutPopupOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClick);
//     return () => document.removeEventListener('mousedown', handleClick);
//   }, [aboutPopupOpen]);

//   // Close About popup on route change
//   useEffect(() => {
//     setAboutPopupOpen(false);
//   }, [pathname]);

//   // Sticky navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsSticky(scrollTop > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
    
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   return (
//     <header className={`${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50' : 'relative'}`}>
//       {/* Top bar - Hidden when sticky */}
//       {!isSticky && (
//         <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 border-b-2 border-[#c0baba] font-[para] px-4">
          
//           <div className="hidden md:flex flex-col gap-1 text text-black">
//             <div className='flex items-center gap-4'>
//               <IoCallOutline className='text-[#23aa5d]'/>
//               <span>Call at: +91 9769596096</span>
//             </div>

//             <div className='flex items-center gap-4'>
//               <CiMail className='text-[#23aa5d]'/>
//               <span>Mail at: franchise@zussioberry.com</span>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <img
//               src="/assets/SmallZussioberry/zussioberry_logo.png"
//               className="w-[120px] h-[50px] md:w-[140px] md:h-[60px] object-contain"
//               alt="Zussio Berry"
//             />
//           </div>

//           <div className="hidden md:block">
//             <Link
//               href="/franchise"
//               className="bg-[#23aa5d] text-white px-5 py-2 cursor-pointer rounded-md hover:bg-green-700 transition inline-block text-center"
//             >
//               Get Franchise
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50 relative"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black/70 z-40 md:hidden cursor-pointer"
//           onClick={handleCloseMenu}
//         />
//       )}

//       {/* Mobile Menu */}
//       <div 
//         ref={mobileMenuRef}
//         className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
//           {/* Close button */}
//           <button
//             className="absolute top-6 right-6 text-gray-600"
//             onClick={handleCloseMenu}
//             aria-label="Close menu"
//           >
//             <X size={28} />
//           </button>

//           {/* Menu Items */}
//           <ul className="flex flex-col space-y-3 text-center text-lg font-medium mb-8">
//             <li>
//               <Link
//                 href="/"
//                 onClick={handleCloseMenu}
//                 className={`block py-2 hover:text-green-600 transition-colors ${
//                   isActive('/') ? 'text-green-600' : 'text-black'
//                 }`}
//               >
//                 Home
//               </Link>
//             </li>
            
//             <li>
//               <Link
//                 href="/about-us"
//                 onClick={handleCloseMenu}
//                 className={`block py-2 hover:text-green-600 transition-colors ${
//                   isActive('/about-us') ? 'text-green-600' : 'text-black'
//                 }`}
//               >
//                 About Zussioberry
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/team"
//                 onClick={handleCloseMenu}
//                 className={`block py-2 hover:text-green-600 transition-colors ${
//                   isActive('/about-us') ? 'text-green-600' : 'text-black'
//                 }`}
//               >
//                 Our Team
//               </Link>
//             </li>
            
//             {navLinks.map(({ href, label }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   onClick={handleCloseMenu}
//                   className={`block py-2 hover:text-green-600 transition-colors ${
//                     isActive(href) ? 'text-green-600' : 'text-black'
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Contact Info */}
//           <div className="border-t border-gray-200 pt-6 space-y-4 text-gray-700">
//             <div className="flex items-center gap-3">
//               <IoCallOutline className='text-[#23aa5d]'/>
//               <span>+91 9769596096</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CiMail className='text-[#23aa5d]'/>
//               <span>franchise@zussioberry.com</span>
//             </div>
//             <Link
//               href="/franchise"
//               className="block text-center bg-[#23aa5d] text-white w-full py-3 rounded-md hover:bg-green-700 transition mt-4"
//               onClick={handleCloseMenu}
//             >
//               Get Franchise
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className={`hidden md:block ${isSticky ? 'bg-white shadow-md py-3' : ''}`}>
//         <div className="max-w-7xl mx-auto flex justify-center items-center py-3">
//           <ul className="flex items-center space-x-12 lg:space-x-16 xl:space-x-20 text-lg font-medium">
//             <li>
//               <Link
//                 href="/"
//                 className={`hover:text-green-600 transition-colors ${
//                   isActive('/') ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
//                 }`}
//               >
//                 Home
//               </Link>
//             </li>
            
//             <li className="relative">
//               <button
//                 ref={aboutBtnRef}
//                 className={`hover:text-green-600 transition-colors px-2 py-1 cursor-pointer flex items-center gap-1 ${
//                   (isActive('/about-us') || isActive('/team')) ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
//                 }`}
//                 onClick={() => setAboutPopupOpen((open) => !open)}
//               >
//                 About
//                 <ChevronDown
//                   size={18}
//                   className={`transition-transform duration-200 ${aboutPopupOpen ? 'rotate-180' : ''}`}
//                 />
//               </button>
              
//               {aboutPopupOpen && (
//                 <div
//                   ref={aboutPopupRef}
//                   className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2"
//                 >
//                   {aboutPopupLinks.map(({ href, label }) => (
//                     <Link
//                       key={href}
//                       href={href}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#23aa5d] transition-colors"
//                       onClick={() => setAboutPopupOpen(false)}
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
            
//             {navLinks.map(({ href, label }) => (
//               <li key={href}>
//                 <Link
//                   href={href}
//                   className={`hover:text-green-600 transition-colors ${
//                     isActive(href) ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const navLinks = [
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
  const [isSticky, setIsSticky] = useState(false);
  const aboutBtnRef = useRef(null);
  const aboutPopupRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  const handleCloseMenu = () => setIsOpen(false);

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

  // Close About popup on route change
  useEffect(() => {
    setAboutPopupOpen(false);
  }, [pathname]);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className={`${isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50' : 'relative'}`}>
      {/* Top bar - Hidden when sticky */}
      {!isSticky && (
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 md:py-6 border-b-2 border-[#c0baba] font-[para] px-4">
          
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
              className="w-[120px] h-[50px] md:w-[140px] md:h-[60px] object-contain"
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
              className="p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      )}

      {/* Compact Mobile Navbar (shown when sticky on mobile) */}
      {isSticky && (
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <img
              src="/assets/SmallZussioberry/zussioberry_logo.png"
              className="w-[100px] h-[40px] object-contain"
              alt="Zussio Berry"
            />
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 md:hidden cursor-pointer"
          onClick={handleCloseMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-gray-600"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-3 text-center text-lg font-medium mb-8">
            <li>
              <Link
                href="/"
                onClick={handleCloseMenu}
                className={`block py-2 hover:text-green-600 transition-colors ${
                  isActive('/') ? 'text-green-600' : 'text-black'
                }`}
              >
                Home
              </Link>
            </li>
            
            <li>
              <Link
                href="/about-us"
                onClick={handleCloseMenu}
                className={`block py-2 hover:text-green-600 transition-colors ${
                  isActive('/about-us') ? 'text-green-600' : 'text-black'
                }`}
              >
                About Zussioberry
              </Link>
            </li>

            <li>
              <Link
                href="/team"
                onClick={handleCloseMenu}
                className={`block py-2 hover:text-green-600 transition-colors ${
                  isActive('/about-us') ? 'text-green-600' : 'text-black'
                }`}
              >
                Our Team
              </Link>
            </li>
            
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={handleCloseMenu}
                  className={`block py-2 hover:text-green-600 transition-colors ${
                    isActive(href) ? 'text-green-600' : 'text-black'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <IoCallOutline className='text-[#23aa5d]'/>
              <span>+91 9769596096</span>
            </div>
            <div className="flex items-center gap-3">
              <CiMail className='text-[#23aa5d]'/>
              <span>franchise@zussioberry.com</span>
            </div>
            <Link
              href="/franchise"
              className="block text-center bg-[#23aa5d] text-white w-full py-3 rounded-md hover:bg-green-700 transition mt-4"
              onClick={handleCloseMenu}
            >
              Get Franchise
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={`hidden md:block ${isSticky ? 'bg-white shadow-md py-3' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-center items-center py-3">
          <ul className="flex items-center space-x-12 lg:space-x-16 xl:space-x-20 text-lg font-medium">
            <li>
              <Link
                href="/"
                className={`hover:text-green-600 transition-colors ${
                  isActive('/') ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
                }`}
              >
                Home
              </Link>
            </li>
            
            <li className="relative">
              <button
                ref={aboutBtnRef}
                className={`hover:text-green-600 transition-colors px-2 py-1 cursor-pointer flex items-center gap-1 ${
                  (isActive('/about-us') || isActive('/team')) ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
                }`}
                onClick={() => setAboutPopupOpen((open) => !open)}
              >
                About
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${aboutPopupOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {aboutPopupOpen && (
                <div
                  ref={aboutPopupRef}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2"
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
            </li>
            
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-green-600 transition-colors ${
                    isActive(href) ? 'text-green-600 border-t-2 border-green-600 pt-2' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;