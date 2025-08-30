import React from 'react';

const MakeOrder = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-2 sm:px-4 md:px-8 py-10 sm:py-16"
      style={{
        backgroundImage: "url('/assets/contactBanner.png')",
      }}>
        
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start justify-center">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white mb-6 md:mb-0">
          <h2 className="text-3xl xs:text-3xl md:text-5xl text-[#23aa5d] mb-3 sm:mb-4 font-[heading-1] text-center md:text-left">
            Make Your Order
          </h2>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-[heading-2] mb-3 sm:mb-4 text-center md:text-left">
            Freshness Just a Click Away!
          </h3>
          <p className="text-base font-[para] sm:text-lg leading-relaxed text-gray-200 mb-6 sm:mb-8 max-w-lg text-center md:text-left">
            Craving your favorite juice or smoothie? Place your order online and
            let the freshness come to you! Quick, easy, and made just the way you
            like it — delivered at your convenience.
          </p>
          {/* Call */}
          <div className="border border-white px-6 py-4 sm:px-6 sm:py-5 rounded-md w-full max-w-xs flex flex-col items-center justify-center text-center mx-auto md:mx-0">
            <p className="mb-2 sm:mb-3 text-lg sm:text-xl whitespace-nowrap font-[para]">Any Queries? Call At</p>
            <p className="text-[#23aa5d] text-lg sm:text-xl flex items-center whitespace-nowrap">
              <i className="fas fa-phone-alt mr-2"></i>+91 9769596096
            </p>
          </div>
        </div>

      <div className="w-full md:w-1/2 relative flex flex-col items-center">
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
                Fill Your Order!
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
                placeholder="Current Opening *"
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
  );
};

export default MakeOrder;