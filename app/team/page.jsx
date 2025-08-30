import React from "react";

const page = () => {

const teamMembers = [
  {
    name: 'Ekta Gupta',
    role: 'Co-founder',
    description: `Mrs. Ekta, an MBA in Marketing, plays a key role in Zussioberry’s branding and customer engagement. With deep knowledge of market trends and consumer needs, she has shaped the brand identity to strongly connect with its audience. Her customer-first approach and marketing expertise have been vital in building Zussioberry’s loyal customer base and keeping the brand top of mind in a dynamic market.`,
    image:
      'https://imgs.search.brave.com/ZG4yP1ZP4U0NlMm65uj-CWz_fVB3pRjQM-Os69Mfe6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTg2/NjYyMjc2L3ZlY3Rv/ci9kZWZhdWx0LXBs/YWNlaG9sZGVyLWJ1/c2luZXNzd29tYW4t/aGFsZi1sZW5ndGgt/cG9yLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1WOC1wTUxJ/eWwwS1o0aEpGT1k3/cnA0WEpCSkc0b2Zo/RlNnRl90REFBbEhN/PQ',
  },
  {
    name: 'K Subair',
    role: 'Chief Operating Officer (COO)',
    description: `With over a decade in the beverage industry, Mr. K. Subair, COO of Zussioberry, has been key to the company’s growth and operational efficiency. His expertise in manufacturing and supply chain management has streamlined processes, ensured quality, and supported large-scale production. By skillfully adapting to market changes, he has played a vital role in driving Zussioberry’s expansion.`,
    image:
      'https://imgs.search.brave.com/AJQsofzxtDm15_bBJD174HsC4tRDXrd9w_1sOdUS-Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTg2/NjY4NDM4L3ZlY3Rv/ci9kZWZhdWx0LXBs/YWNlaG9sZGVyLWJ1/c2luZXNzbWFuLWhh/bGYtbGVuZ3RoLXBv/cnRyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1HYktibHFD/ckUwSkJiUjVWcXE5/aTZ3RzU2ZEZkZFBP/Zm9lS0V0cElPRjJv/PQ',
  },
  {
    name: 'K Subair',
    role: 'Chief Operating Officer (COO)',
    description: `Mr. Chandrashekhar Dhavde brings over a decade of expertise in New Product Development and the frozen fruit industry. His focus on innovation helps Zussioberry launch fresh, nutritious, and consumer-driven products. From concept to final launch, his technical skills in product development and frozen fruit processing strengthen the brand’s commitment to quality and modern consumer preferences.`,
    image:
      'https://imgs.search.brave.com/AJQsofzxtDm15_bBJD174HsC4tRDXrd9w_1sOdUS-Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTg2/NjY4NDM4L3ZlY3Rv/ci9kZWZhdWx0LXBs/YWNlaG9sZGVyLWJ1/c2luZXNzbWFuLWhh/bGYtbGVuZ3RoLXBv/cnRyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1HYktibHFD/ckUwSkJiUjVWcXE5/aTZ3RzU2ZEZkZFBP/Zm9lS0V0cElPRjJv/PQ',
  },
];

  return (
    <>
      <section
        className="relative bg-center bg-cover min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/founderBanner.png')",
        }}>
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
            As the founder of Zussioberry, Mr. Sunil Jaiswal has been the driving force behind the brand’s growth. 
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#23aa5d] font-[heading-1]">
              Our Core Team
            </h2>
            <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg font-[para]">
              Meet the passionate minds driving Zussioberry’s flavors, innovation, and growth.
            </p>
          </div>

          {/* Team Members */}
          {teamMembers.map((member, index) => {
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
    </>
  );
};

export default page;

