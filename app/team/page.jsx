// import React from "react";

// const page = () => {

// const teamMembers = [
//   {
//     name: 'Ekta Gupta',
//     role: 'Co-founder',
//     description: `Mrs. Ekta, an MBA in Marketing, plays a key role in Zussioberry’s branding and customer engagement. With deep knowledge of market trends and consumer needs, she has shaped the brand identity to strongly connect with its audience. Her customer-first approach and marketing expertise have been vital in building Zussioberry’s loyal customer base and keeping the brand top of mind in a dynamic market.`,
//     image:
//       '/assets/womenplaceholder.webp',
//   },
//   {
//     name: 'K Subair',
//     role: 'Chief Operating Officer (COO)',
//     description: `With over a decade in the beverage industry, Mr. K. Subair, COO of Zussioberry, has been key to the company’s growth and operational efficiency. His expertise in manufacturing and supply chain management has streamlined processes, ensured quality, and supported large-scale production. By skillfully adapting to market changes, he has played a vital role in driving Zussioberry’s expansion.`,
//     image:
//       '/assets/menplaceholder.webp',
//   },
//   {
//     name: 'K Subair',
//     role: 'Chief Operating Officer (COO)',
//     description: `Mr. Chandrashekhar Dhavde brings over a decade of expertise in New Product Development and the frozen fruit industry. His focus on innovation helps Zussioberry launch fresh, nutritious, and consumer-driven products. From concept to final launch, his technical skills in product development and frozen fruit processing strengthen the brand’s commitment to quality and modern consumer preferences.`,
//     image:
//       '/assets/menplaceholder.webp',
//   },
// ];

//   return (
//     <>
//       <section
//         className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/assets/founderBanner.png')",
//         }}>
//         <div className="relative z-10 mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10"
//           style={{ width: "100%", maxWidth: "900px" }}>
//           {/* Left Text Content */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white md:pr-8 mt-8 md:mt-0 min-w-[280px] max-w-xl">
//             <h3 className="text-xl sm:text-2xl font-bold font-[heading-2] mb-2 sm:mb-4">
//               - Our Founder & CEO
//             </h3>
//             <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] mb-3 sm:mb-4">
//               Sunil Jaiswal
//             </h2>
//             <p className="text-gray-200 mb-6 text-base sm:text-lg leading-relaxed font-[para] max-w-lg">
//             As the founder of Zussioberry, Mr. Sunil Jaiswal has been the driving force behind the brand’s growth. 
//             With 15+ years of experience, he rose from managing a small kiosk to establishing a modern processing plant. 
//             His industry expertise, strategic vision, and commitment to quality and innovation have positioned Zussioberry 
//             as a trusted name in the market.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0 flex justify-center items-center min-w-[220px] max-w-xs">
//             <img
//               src="/assets/sectionZussioberry/founder.png"
//               alt="Sunil Jaiswal"
//               className="w-full max-w-[250px] sm:max-w-sm rounded-lg shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-14 sm:py-20">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6">
//           {/* Section Title */}
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
//               Our Core Team
//             </h2>
//             <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
//               Meet the passionate minds driving Zussioberry’s flavors, innovation, and growth.
//             </p>
//           </div>

//           {/* Team Members */}
//           {teamMembers.map((member, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <div
//                 key={index}
//                 className={`flex flex-col-reverse ${
//                   isEven ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16`}
//               >
//                 {/* Description */}
//                 <div className="w-full md:w-[45%] max-w-xl px-2 sm:px-4 mt-6 md:mt-0 text-center md:text-left">
//                   <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-[para]">
//                     {member.description}
//                   </p>
//                 </div>

//                 {/* Image */}
//                 <div className="relative w-48 h-56 sm:w-64 sm:h-72 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 sm:py-3">
//                     <h3 className="text-base sm:text-lg font-bold font-[para]">{member.name}</h3>
//                     <p className="text-xs sm:text-sm font-[para]">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default page;



'use client';

import React, { useState } from "react";

const TeamPage = () => {
  const coreTeamMembers = [
    {
      name: 'Ekta Gupta',
      role: 'Co-founder',
      description: `Mrs. Ekta, an MBA in Marketing, plays a key role in Zussioberry's branding and customer engagement. With deep knowledge of market trends and consumer needs, she has shaped the brand identity to strongly connect with its audience. Her customer-first approach and marketing expertise have been vital in building Zussioberry's loyal customer base and keeping the brand top of mind in a dynamic market.`,
      image: '/assets/womenplaceholder.webp',
    },
    {
      name: 'K Subair',
      role: 'Chief Operating Officer (COO)',
      description: `With over a decade in the beverage industry, Mr. K. Subair, COO of Zussioberry, has been key to the company's growth and operational efficiency. His expertise in manufacturing and supply chain management has streamlined processes, ensured quality, and supported large-scale production. By skillfully adapting to market changes, he has played a vital role in driving Zussioberry's expansion.`,
      image: '/assets/menplaceholder.webp',
    },
    {
      name: 'Chandrashekhar Dhavde',
      role: 'Product Development Head',
      description: `Mr. Chandrashekhar Dhavde brings over a decade of expertise in New Product Development and the frozen fruit industry. His focus on innovation helps Zussioberry launch fresh, nutritious, and consumer-driven products. From concept to final launch, his technical skills in product development and frozen fruit processing strengthen the brand's commitment to quality and modern consumer preferences.`,
      image: '/assets/menplaceholder.webp',
    },
  ];

  const additionalTeamMembers = [
    { name: "CHANDRASHEKHAR KISAN DHADVE", designation: "PLANT MANAGER", category: "management", gender: "male" },
    { name: "CHETAN AMBRE", designation: "QUALITY CONTROL MANAGER", category: "quality", gender: "male" },
    { name: "DIGAMBAR SAUDAGAR", designation: "COLD STORAGE AND FREEZING MANAGER", category: "management", gender: "male" },
    { name: "SACHIN SAWANT", designation: "MAINTENANCE ENGINEER", category: "support", gender: "male" },
    { name: "SANTOSH BABURAO BODKE", designation: "Procurement Co-ordinator", category: "management", gender: "male" },
    { name: "SHANGRILA PRASHANT ALMABADE", designation: "Production Executive", category: "production", gender: "male" },
    { name: "MAHESH SAMPAT MUTTHAL", designation: "Production Executive", category: "production", gender: "male" },
    { name: "ALKA DARADE", designation: "Production Executive", category: "production", gender: "female" },
    { name: "YOGESHWAR KISAN KOKATE", designation: "Production Executive", category: "production", gender: "male" },
    { name: "MAYURI OHAL", designation: "Food Technologist", category: "quality", gender: "female" },
    { name: "DARSHAN PATIL", designation: "Food Technologist", category: "quality", gender: "male" },
    { name: "RANJAN BADATYA", designation: "PACKAGING & LABELING INCHARGE", category: "production", gender: "male" },
    { name: "VISHAL KUMAR", designation: "Production Executive", category: "production", gender: "male" },
    { name: "GANESH WAJE", designation: "MAINTENANCE EXECUTIVE", category: "support", gender: "male" },
    { name: "BHAJAN VERMA", designation: "ACCOUNTS MANAGER", category: "management", gender: "male" },
    { name: "RIBA MANIYAR", designation: "ACCOUNTS EXECUTIVE", category: "management", gender: "female" },
    { name: "PAYAL KHAIRNAR", designation: "LOGISTICS CO-ORDINATOR", category: "management", gender: "female" },
    { name: "RAMESH PATEL", designation: "MACHINE OPERATORS", category: "production", gender: "male" },
    { name: "PRAFFUL VARKHADE", designation: "PRODUCTION LINE WORKERS", category: "production", gender: "male" },
    { name: "MOHAMMAD SABIR", designation: "PRODUCTION LINE WORKERS", category: "production", gender: "male" },
    { name: "NAINA BAWISKAR", designation: "PRODUCTION LINE WORKERS", category: "production", gender: "female" },
    { name: "DILIP SASANE", designation: "HOUSEKEEPING", category: "support", gender: "male" },
    { name: "RAJKUMAR", designation: "Warehouse & Store In-charge", category: "management", gender: "male" },
    { name: "TUKARAM BHANDKAR", designation: "Security Guards", category: "support", gender: "male" },
    { name: "ANIL MANDALE", designation: "Security Guards", category: "support", gender: "male" },
    { name: "MAYUR MANDALE", designation: "Security Guards", category: "support", gender: "male" },
    { name: "Ashok Jedgule", designation: "Delivery drivers", category: "support", gender: "male" },
    { name: "JALINDER GOFANE", designation: "Delivery drivers", category: "support", gender: "male" },
    { name: "VISHAL BAGUL", designation: "Café Manager", category: "management", gender: "male" },
    { name: "CHARKU BAITHA", designation: "Café Manager", category: "management", gender: "male" },
    { name: "NIRANJAN HATI", designation: "Café Manager", category: "management", gender: "male" },
    { name: "VISHAL GAIKWAD", designation: "Café Manager", category: "management", gender: "male" },
    { name: "SHUBHAM JADHAV", designation: "Food Technologist", category: "quality", gender: "male" },
    { name: "SANTOSH HATI", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "PADMOLOCHAN HATI", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "BHARAT HATI", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "SANGITA THORAT", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "female" },
    { name: "PAPPU DAS", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "BITTU PRAMANICK", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "CHANDAN GIRI", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" },
    { name: "JOY BISWAS", designation: "FOOD PRODUCTION TEAM", category: "production", gender: "male" }
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMembers = activeFilter === "all" 
    ? additionalTeamMembers 
    : additionalTeamMembers.filter(member => member.category === activeFilter);

  return (
    <>
      <section
        className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/founderBanner.png')",
        }}>
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10"
          style={{ width: "100%", maxWidth: "900px" }}>
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left text-white md:pr-8 mt-8 md:mt-0 min-w-[280px] max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-[heading-2] mb-2 sm:mb-4">
              - Our Founder & CEO
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] mb-3 sm:mb-4">
              Sunil Jaiswal
            </h2>
            <p className="text-gray-200 mb-6 text-base sm:text-lg leading-relaxed font-[para] max-w-lg">
            As the founder of Zussioberry, Mr. Sunil Jaiswal has been the driving force behind the brand's growth. 
            With 15+ years of experience, he rose from managing a small kiosk to establishing a modern processing plant. 
            His industry expertise, strategic vision, and commitment to quality and innovation have positioned Zussioberry 
            as a trusted name in the market.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 flex justify-center items-center min-w-[220px] max-w-xs">
            <img
              src="/assets/sectionZussioberry/founder.png"
              alt="Sunil Jaiswal"
              className="w-full max-w-[250px] sm:max-w-sm rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
              Our Core Team
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
              Meet the passionate minds driving Zussioberry's flavors, innovation, and growth.
            </p>
          </div>

          {/* Team Members */}
          {coreTeamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col-reverse ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16`}
              >
                {/* Description */}
                <div className="w-full md:w-[45%] max-w-xl px-2 sm:px-4 mt-6 md:mt-0 text-center md:text-left">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-[para]">
                    {member.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-48 h-56 sm:w-64 sm:h-72 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 sm:py-3">
                    <h3 className="text-base sm:text-lg font-bold font-[para]">{member.name}</h3>
                    <p className="text-xs sm:text-sm font-[para]">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Team Members Section */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
              Our Team Members
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
              Dedicated professionals working together to deliver excellence.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button 
              className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "all" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveFilter("all")}
            >
              All Members
            </button>
            <button 
              className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "management" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveFilter("management")}
            >
              Management
            </button>
            <button 
              className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "production" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveFilter("production")}
            >
              Production
            </button>
            <button 
              className={`px-4 cursor-pointer py-2 rounded-full font-medium transition-all ${activeFilter === "quality" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveFilter("quality")}
            >
              Quality Control
            </button>
            <button 
              className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all ${activeFilter === "support" ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveFilter("support")}
            >
              Support Staff
            </button>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {filteredMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.gender === "female" ? "/assets/womenplaceholder.webp" : "/assets/menplaceholder.webp"} 
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 text-xs">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;