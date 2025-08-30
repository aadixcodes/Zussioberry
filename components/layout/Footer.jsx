'use client';
import React from 'react'
import Link from 'next/link';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className="relative text-white px-6 pt-10 pb-4 font-[para]"
        style={{
          backgroundImage: "url('/assets/FooterImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 items-start py-12 mb-6 border-b border-white/20">

            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://zussioberry.com/images/zussioberry_logo.png"
                alt="ZussioBerry Logo"
                width={150}
                height={60}
                className="mb-4"
              />
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs text-center md:text-left">
                Zussioberry brings you the finest range of natural juices, milkshakes, and more — made fresh with love and quality ingredients. Taste the difference in every sip!
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center lg:pl-0">
              <h3 className="text-lg font-semibold mb-3 text-white text-center">Quick Links</h3>
              <ul className="text-sm text-gray-300 space-y-1 leading-6 text-center">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                <li><Link href="/franchise" className="hover:underline">Franchise</Link></li>
                <li><Link href="/blogs" className="hover:underline">Blogs</Link></li>
                <li><Link href="/news" className="hover:underline">News</Link></li>
                <li><Link href="/career" className="hover:underline">Career</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white text-center md:text-left">Contact Info</h3>
              <p className="text-sm text-gray-300 mb-1">Address : Elitra Awing 1106, casa bella gold, Lodha palava, near Elitra Mall,
                kalyan shil Road, Dombivali East 421204, Maharashtra, India.
              </p>
              <p className="text-sm text-gray-300 mt-6 mb-1">Phone No : +91 9769596096</p>
              <p className="text-sm text-gray-300 mb-4 ml-20">+91 969996645</p>
              {/* <p className="text-sm text-gray-300 ml-20">+91 9821922288</p> */}

              <div className="flex space-x-6 text-[#23aa5d] text-xl mt-10">
                <Link href="https://www.instagram.com/zussioberry/" className="rounded-full border-2 border-[#23aa5d] p-2 hover:bg-green-50 transition">
                  <IoLogoInstagram />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61557420845442" className="rounded-full border-2 border-[#23aa5d] p-2 hover:bg-green-50 transition">
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm px-1 pb-8">
            <p>© Copyrights Zussioberry 2025. All Rights Reserved</p>
            <p className="mt-2 md:mt-0">Terms & Condition | Privacy Policy</p>
          </div>
        </div>
    </footer>
  </>
  )
}

export default Footer