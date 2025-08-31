import React from "react";

const WelcomeTo = () => {
  return (
    <>

<section className="flex items-center justify-center min-h-[70vh] py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
  

  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 lg:gap-16">
    
    {/* Left Image */}
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img
        src="/assets/SmallZussioberry/zussioberry_logo.png"
        alt="Juice with fruits"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
      />
    </div>

    {/* Right Text */}
    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-[#23aa5d] text-3xl xs:text-3xl md:text-5xl font-[heading-1] mb-3">
        Welcome to Zussioberry
      </h2>
      <h3 className="text-2xl sm:text-3xl font-[para] mb-4">About Us</h3>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-[para] max-w-xl">
        Zussioberry is your go-to destination for the most delicious
        and vibrant fresh fruit juices, milkshakes, smoothies, falooda,
        ice-creams and more. We're more than just a cafe; we're a
        celebration of flavor and fun! Our menu is a delightful fusion
        of classic favorites and innovative creations, all crafted
        with the freshest ingredients and a passion for taste.
      </p>
      <a
        href="/about-us"
        className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-sm sm:text-base md:text-lg font-[para] transition inline-block text-center"
      >
        View More
      </a>
    </div>
  </div>
</section>

    </>
  );
};

export default WelcomeTo;
