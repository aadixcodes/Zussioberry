import React from "react";
import Link from "next/link";
const page = () => {

  const timelineData = [
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
    {
      year: "2005 - 2007",
      title: "From Kiosk to Legacy",
      desc: "In 2005, Sunil Jaiswal began with a small fruit kiosk in Navi Mumbai.",
    },
  ];

  return (
    <>
      <section
        className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/AboutBanner.png')",
        }}>
          
          <div className="relative z-10 max-w-6xl w-full mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 text-white">
              A Passion for Quality,<br className="hidden xs:inline" /> A Love for Flavor!
            </h2>
            <p className="text-sm xs:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-[para] max-w-lg">
              Zussioberry started as a small juice kiosk, loved for its fresh
              flavors and quality. Today, it blends classic favorites with
              creative twists, served in a vibrant and welcoming space.
            </p>

            {/* <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
              Order Now
            </button> */}
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/assets/ImgAbout.png"
              alt="Juice Glass"
              className="w-64 xs:w-70 sm:w-60 md:w-full max-w-xs sm:max-w-sm md:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 md:px-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-[#23aa5d] text-3xl sm:text-4xl md:text-6xl font-[heading-1] mb-4">
            Our Journey Through the Years
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-xl font-[para]">
            Take a look at the key milestones that shaped Zussioberry into the
            brand it is today.
          </p>
        </div>

        {/* Responsive Timeline */}
        <div className="max-w-6xl mx-auto font-[para]">
          {/* Mobile layout: vertical timeline */}
          <div className="flex flex-col gap-10 md:hidden">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-black text-[#23aa5d] text-sm font-semibold px-4 py-2 rounded-full">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-[#23aa5d] italic font-[heading-1] text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm font-[para] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Desktop layout: original alternating timeline */}
          <div className="hidden md:block space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between md:justify-center gap-6 md:gap-20 ${
                  index % 2 === 0 ? "flex-row-reverse md:flex-row" : ""
                }`}
              >
                <div className="flex-1 text-right md:text-left max-w-xs">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-[#23aa5d] italic font-[heading-1] text-2xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm font-[para] leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 max-w-xs">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-[#23aa5d] italic font-[heading-1] text-2xl mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm font-[para] leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          {/* Mission */}
          <div
            className="relative flex items-center justify-center w-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]"
            style={{
              backgroundImage:
                "url('/assets/sectionZussioberry/OurMission.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-white text-4xl sm:text-4xl md:text-5xl font-[heading-1] text-center leading-snug drop-shadow-lg">
              Our <br /> Mission
            </h2>
          </div>

          <div className="bg-white flex items-center justify-center p-6 sm:p-10 md:p-14 min-h-[200px]">
            <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed font-[para] text-center max-w-lg">
              Our mission is to serve fresh, expertly crafted fruit beverages
              and frozen treats that are as responsible as they are refreshing.
              By supporting local farmers and embracing sustainability, we
              ensure every product delights both you and the planet.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white flex items-center justify-center p-6 sm:p-10 md:p-14 min-h-[200px] order-3 md:order-none">
            <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed font-[para] text-center max-w-lg">
              At Zussioberry, we believe in turning every sip into a joyful
              memory. With our unique blends, warm hospitality, and vibrant
              flavors, we craft experiences that leave you smiling. We’re driven
              by innovation, exploring new tastes and nurturing a community
              built on happiness and inclusion.
            </p>
          </div>

          <div
            className="relative flex items-center justify-center w-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] order-4 md:order-none"
            style={{
              backgroundImage:
                "url('/assets/sectionZussioberry/OurVision.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-white text-4xl sm:text-4xl md:text-5xl font-[heading-1] text-center leading-snug drop-shadow-lg">
              Our <br /> Vision
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

