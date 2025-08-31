// "use client";
// import Image from "next/image";
// import React from 'react'

// const NewsletterSection = () => {
//   return (
//     <section className="relative w-full h-[500px] md:h-[600px] mb-20 overflow-hidden flex items-center justify-center">
//       {/* Background Image */}
//       <Image
//         src="/assets/SmallZussioberry/beverage/bgImg.jpg"
//         alt="Big Deals Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Top & Bottom Effect */}
//       <div className="absolute top-0 left-0 w-full">
//         <Image
//           src="/assets/SmallZussioberry/beverage/pattern-1.png"
//           alt="Overlay Top"
//           width={1600}
//           height={100}
//           className="w-full object-cover"
//         />
//       </div>
//       <div className="absolute bottom-0 left-0 w-full">
//         <Image
//           src="/assets/SectionBottomTexture.png"
//           alt="Overlay Bottom"
//           width={1600}
//           height={100}
//           className="w-full object-cover"
//         />
//       </div>


// <div className="relative z-10 flex w-[70%] items-center justify-start h-full">


//       {/* Center Content */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <div className="bg-[#d9d4b8]/90 rounded-full w-[400px] h-[400px] flex flex-col justify-center items-center text-center px-6 shadow-lg">
//           <p className="text-sm italic text-gray-700">30% Off For Juice</p>
//           <h2 className="text-2xl md:text-3xl font-bold mt-2">
//             Big Deals of the Week
//           </h2>
//           <p className="text-gray-700 text-sm mt-3">
//             Us percipit urbanitas referrentur ea. Mei at numquam molestiae
//             intellegam. Ansed dictas accumsan.
//           </p>

//           {/* Email Input */}
//           <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-md">
//             <input
//               type="email"
//               placeholder="Type your email"
//               className="px-4 py-2 text-sm outline-none w-48 md:w-56"
//             />
//             <button className="bg-[#23aa5d] cursor-pointer text-white px-4 py-2 hover:bg-[#1c8a4a] transition">
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   )
// }

// export default NewsletterSection;

"use client";
import Image from "next/image";
import React from 'react'

const NewsletterSection = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:h-[600px] mb-12 md:mb-20 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/SmallZussioberry/beverage/bgImg.jpg"
        alt="Big Deals Background"
        fill
        priority
        className="object-cover"
      />

      {/* Top & Bottom Effect */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Image
          src="/assets/SmallZussioberry/beverage/pattern-1.png"
          alt="Overlay Top"
          width={1600}
          height={100}
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image
          src="/assets/SectionBottomTexture.png"
          alt="Overlay Bottom"
          width={1600}
          height={100}
          className="w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex w-full px-4 sm:px-6 md:px-8 lg:w-[70%] items-center justify-start md:justify-center h-full">
        {/* Center Content */}
        <div className="relative z-10 flex items-center justify-center w-full h-full py-8">
          <div className="bg-[#d9d4b8]/90 rounded-full w-[280px] h-[280px] xs:w-[320px] xs:h-[320px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] flex flex-col justify-center items-center text-center p-6 sm:p-8 md:px-6 shadow-lg">
            <p className="text-xs sm:text-sm italic text-gray-700">30% Off For Juice</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1 sm:mt-2">
              Big Deals of the Week
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm mt-2 sm:mt-3 max-w-[240px] sm:max-w-xs">
              Us percipit urbanitas referrentur ea. Mei at numquam molestiae
              intellegam. Ansed dictas accumsan.
            </p>

            {/* Email Input */}
            <div className="mt-4 sm:mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-[240px] sm:max-w-xs">
              <input
                type="email"
                placeholder="Type your email"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm outline-none flex-grow"
              />
              <button className="bg-[#23aa5d] cursor-pointer text-white px-3 sm:px-4 py-2 hover:bg-[#1c8a4a] transition flex-shrink-0">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection;