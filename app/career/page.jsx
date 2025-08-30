import React from 'react'

const page = () => {
  return (
    <> 
    <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/assets/careerBanner.png')",
      }}>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
          Come, Join Our Team !
        </h2>
        <p className="text-sm md:text-lg text-gray-200 font-[para] mb-6 leading-relaxed">
          Join our passionate team and turn your ideas into action.
          Together, we make every sip special!
        </p>
        <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
          Order Now
        </button>
      </div>
    </section>
 
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Title & Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-[heading-1] mb-4">
          Why Join Our <span className="text-[#23aa5d]">Team</span> ?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-[para]">
          Join a passionate, friendly team where your ideas matter, your growth is valued, 
          and every day is filled with great flavors and positive vibes. Be part of something 
          meaningful at Zussioberry!
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 border-gray-200 gap-0 max-w-3xl mx-auto">
        {/* Growth Opportunity */}
        <div className="md:border-b border-gray-400 md:border-r p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Growth Opportunity</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Whether you are looking to advance your career or simply develop new
            skills, we provide ample opportunities for professional and personal growth. 
            Take on new challenges, learn from experienced mentors, and unlock your full potential with us.
          </p>
        </div>

        {/* Dynamic Work Environment */}
        <div className="md:border-b border-gray-400 p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Dynamic Work Environment</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Be part of a collaborative and supportive team that values each member's contributions.
            Our fast-paced, ever-evolving workplace ensures you stay engaged, inspired, and motivated every day.
          </p>
        </div>

        {/* Team Spirit */}
        <div className="md:border-r border-gray-400 p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Team Spirit</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Experience a strong sense of camaraderie and belonging. 
            We celebrate achievements together and support each other through challenges, 
            making every contribution count towards our shared success.
          </p>  
        </div>

        {/* Creative Culture */}
        <div className="p-8 text-center">
          <h3 className="font-semibold font-[heading-2] text-lg md:text-2xl mb-2">Creative Culture</h3>
          <p className="text-gray-600 font-[para] text-sm md:text-base leading-relaxed">
            Thrive in an environment that encourages innovation and creative problem-solving.
            Your ideas are valued here—bring your unique perspective and help us shape the future of Zussioberry!
          </p>
        </div>
      </div>
    </section>
 
<section className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
  <div className="flex flex-col md:flex-row items-center justify-between md:pl-12 max-w-6xl mx-auto gap-12">

    {/* Left Section */}
    <div className="md:w-1/2 text-center md:text-center">
      
      <h2 className="text-3xl md:text-5xl font-[heading-1] mb-4">
        Dream <span className="text-[#23aa5d]">. Apply .</span> Achieve
      </h2>

      <p className="text-gray-700 font-[para] text-sm md:text-lg leading-relaxed mb-8">
        We’d love to know you! Complete the form and join our vibrant team.
      </p>

      {/* Image */}
      <img
        src="/assets/sectionZussioberry/JoinOurTeam.png"
        alt="Green Juice"
        className="max-w-[250px] sm:max-w-[430px] mx-auto"
      />
    </div>

    {/* Right Section */}
      <div
        className="w-full md:w-1/2 relative flex flex-col items-center"
        style={{
          backgroundImage: "url('/assets/FooterImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        {/* Black Container */}
        <div className="relative z-10 w-full p-0 rounded-md font-[para] md:mt-0">
          
          {/* Green Banner Inside Black */}
          <div className="w-full relative">
            <img
              src="/assets/AnyFormTopImg.png"
              alt="Order Form Illustration"
              className="w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-black text-center text-lg sm:text-2xl font-[para] font-bold px-6 py-2 rounded">
                Start Your Career Today With Zussioberry !
              </span>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-5 sm:p-8">
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
              />
              <input
                type="text"
                placeholder="Phone Number *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
              />
              <input
                type="text"
                placeholder="Qualification *"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-white rounded-md bg-transparent text-white placeholder:text-gray-300 text-base"
              />
              <textarea
                placeholder="Apply For *"
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
  )
}

export default page