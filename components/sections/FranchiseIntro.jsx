// // components/FranchiseIntro.js
// // "use client";
// import Image from 'next/image';

// const FranchiseIntro = () => {
//   return (
//     <section className="py-16 relative">
//       {/* Own Your Zussioberry Section */}
//       <div
//         className="w-full h-[70vh] flex flex-col justify-center items-center text-center mb-40 relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/assets/FranchiseBanner2.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
//           <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 text-white">
//             Own Your Zussioberry!
//           </h2>
//           <p className="text-sm xs:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-[para] max-w-lg px-4">
//             Own a Zussioberry franchise and lead your city’s favorite juice
//             spot!
//           </p>
//         </div>
//       </div>

//       {/* Earth Image Overlay (pulled down to overlap white section) */}
//       <div className="absolute left-1/2 top-[25%] transform -translate-x-1/2 translate-y-1/2 z-20">
//         <Image
//           src="/assets/sectionZussioberry/Earth.png"
//           alt="Earth"
//           width={600}
//           height={600}
//           className="max-w-[80%] md:max-w-[400px]"
//           priority
//         />
//       </div>

//       {/* Why Partner With Us Section */}
//       <div className="text-center z-10 relative mt-[20rem]">
//         <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
//           Why <span className="text-[#23aa5d]">Partner</span> With Us?
//         </h3>
//         <p className="text-gray-600 mt-4 max-w-xl mx-auto font-[para]">
//           Become a part of our growing family and share the taste of success as
//           you serve refreshing flavors and build lasting connections in your
//           community.
//         </p>

//         {/* Features */}
//         {(() => {
//           const features = [
//             {
//               title: "✔ Proven Concept",
//               description: "Our successful business model ensures profitability and growth.",
//               bg: ""
//             },
//             {
//               title: "✔ Comprehensive Support",
//               description: "We provide full training, marketing, and operational assistance.",
//               bg: "bg-gray-50"
//             },
//             {
//               title: "✔ Innovative Products",
//               description: "Premium fresh juices and creative blendable options your customers will love.",
//               bg: "bg-gray-50"
//             },
//             {
//               title: "✔ Brand Strength",
//               description: "Established brand reputation and loyal customer base for franchise success.",
//               bg: "bg-gray-50"
//             }
//           ];
//           return (
//             <>
//               {/* Mobile: vertical stack, Desktop: grid */}
//               <div className="mt-10 flex flex-col gap-6 px-2 max-w-xs mx-auto sm:hidden">
//                 {features.map((feature, idx) => (
//                   <div
//                     key={feature.title}
//                     className={`${feature.bg} p-5 rounded-lg transition-transform duration-200`}
//                   >
//                     <h4 className="text-[#23aa5d] text-base font-[heading-2] font-bold">{feature.title}</h4>
//                     <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-10 hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-6xl mx-auto">
//                 {features.map((feature, idx) => (
//                   <div
//                     key={feature.title}
//                     className={`${feature.bg} p-6 rounded-lg  transition-transform duration-200`}
//                   >
//                     <h4 className="text-[#23aa5d] text-lg font-[heading-2] font-bold">{feature.title}</h4>
//                     <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </>
//           );
//         })()}
//       </div>
//     </section>
//   );
// };

// export default FranchiseIntro;


// components/FranchiseIntro.js
"use client";
import Image from 'next/image';

const FranchiseIntro = () => {
  return (
    <section className="py-16 relative">
      {/* Own Your Zussioberry Section */}
      <div
        className="w-full h-[70vh] flex flex-col justify-center items-center text-center mb-40 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/FranchiseBanner2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
          <h2 className="font-[heading-1] text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 text-white">
            Own Your Zussioberry!
          </h2>
          <p className="text-sm xs:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-[para] max-w-lg px-4">
            Own a Zussioberry franchise and lead your city's favorite juice
            spot!
          </p>
        </div>
      </div>

      {/* Earth Image Overlay (pulled down to overlap white section) */}
      <div className="absolute left-1/2 top-[25%] transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="animate-rotate-earth">
          <Image
            src="/assets/sectionZussioberry/Earth.png"
            alt="Earth"
            width={600}
            height={600}
            className="max-w-[80%] md:max-w-[400px]"
            priority
          />
        </div>
      </div>

      {/* Why Partner With Us Section */}
      <div className="text-center z-10 relative mt-[20rem]">
        <h3 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
          Why <span className="text-[#23aa5d]">Partner</span> With Us?
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto font-[para]">
          Become a part of our growing family and share the taste of success as
          you serve refreshing flavors and build lasting connections in your
          community.
        </p>

        {/* Features */}
        {(() => {
          const features = [
            {
              title: "✔ Proven Concept",
              description: "Our successful business model ensures profitability and growth.",
              bg: ""
            },
            {
              title: "✔ Comprehensive Support",
              description: "We provide full training, marketing, and operational assistance.",
              bg: "bg-gray-50"
            },
            {
              title: "✔ Innovative Products",
              description: "Premium fresh juices and creative blendable options your customers will love.",
              bg: "bg-gray-50"
            },
            {
              title: "✔ Brand Strength",
              description: "Established brand reputation and loyal customer base for franchise success.",
              bg: "bg-gray-50"
            }
          ];
          return (
            <>
              {/* Mobile: vertical stack, Desktop: grid */}
              <div className="mt-10 flex flex-col gap-6 px-2 max-w-xs mx-auto sm:hidden">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className={`${feature.bg} p-5 rounded-lg transition-transform duration-200`}
                  >
                    <h4 className="text-[#23aa5d] text-base font-[heading-2] font-bold">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className={`${feature.bg} p-6 rounded-lg  transition-transform duration-200`}
                  >
                    <h4 className="text-[#23aa5d] text-lg font-[heading-2] font-bold">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-2 font-[para]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>

      <style jsx>{`
        @keyframes rotateEarth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-earth {
          animation: rotateEarth 20s linear infinite;
          display: inline-block; /* Ensures proper rotation */
        }
      `}</style>
    </section>
  );
};

export default FranchiseIntro;