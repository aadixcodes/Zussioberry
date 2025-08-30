"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  return (

    <>
        {/* Hero Section */}
        <section
        className="relative bg-cover bg-center text-white min-h-[70vh] flex items-center justify-center"
        style={{
            backgroundImage: "url('/assets/ContactBaner.png')",
        }}>
          
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
              Contact Us
            </h2>
            <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para] max-w-xl mx-auto">
              We'd love to hear from you !!
            </p>
        </div>
    </section>



    <section className="py-16 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h3 className="text-green-600 text-xl font-[heading-2] font-bold">Get in touch with us</h3>
          <h2 className="text-3xl md:text-5xl font-[heading-1] mt-6">
            Do you need help?<br /> Contact with us now!
          </h2>

          {/* Office */}
          <div className="mt-8 space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-2xl text-green-600" />
              <div>
                <h4 className="font-[para] font-bold text-xl">Our Office</h4>
                <p className="text-lg font-[para]">
                Elitra Awing 1106, casa bella gold, Lodha palava, near Elitra Mall,
                kalyan shil Road, Dombivali East 421204, Maharashtra, India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-2xl text-green-600" />
              <div>
                <h4 className="font-[para] font-bold text-xl">Phone Number</h4>
                <p className="text-lg font-[para]">+91 9769596096</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaWhatsapp className="text-2xl text-green-600" />
              <div>
                <h4 className="font-[para] font-bold text-xl">WhatsApp</h4>
                <p className="text-lg font-[para]">+91 969996645</p>
              </div>
            </div>

            <div className="flex items-start gap-3 font-[para]">
              <FaEnvelope className="text-2xl text-green-600" />
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Email Address</h4>
                <p className="text-lg"><b>Customer Care:</b> <br />support@zussioberry.com</p>
                <p className="text-lg"><b>Franchise Enquiry:</b> <br /> franchise@zussioberry.com</p>
                <p className="text-lg"><b>Job Enquiry:</b> <br /> career@zussioberry.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-full relative flex flex-col items-center">
          {/* Black Container */}
          <div className="relative z-10 w-full bg-black bg-opacity-60 p-0 rounded-md font-[para] mt-10 md:mt-0">
            {/* Green Banner Inside Black */}
            <div className="w-full relative">
              <img
                src="/assets/AnyFormTopImg.png"
                alt="Order Form Illustration"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black text-2xl sm:text-3xl font-[para] font-bold px-6 py-2 rounded">
                  Get in Touch !
                </span>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-5 sm:p-8">
              <form className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number *"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
                />
                <input
                  type="text"
                  placeholder="Enter Subject *"
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
                />
                <textarea
                  placeholder="Your Address *"
                  rows={3}
                  className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#23aa5d] text-white font-[para] py-2.5 sm:py-3 rounded-md hover:bg-green-600 text-lg transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}

