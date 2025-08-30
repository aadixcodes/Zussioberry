import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {blogsData} from '../blogsData';

const page = ({params}) => {
    const { slug } = params;
    const blogs = blogsData.find(Blogs => Blogs.slug === slug);
  
    if(!blogs) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-[para] mb-4">blogs Not Found</h1>
            <Link href="/blogs" className="text-[#fab604] font-[para] hover:underline">
              Return to blogs
            </Link>
          </div>
        </div>
      );
    }

  return (
    <>
    <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/careerBanner.png')",
      }}>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
          Zussioberry Detailed blogs Page
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para]">
          Stay updated with freshest juice trends, events and healthy lifestyle tips.
        </p>
      </div>
    </section>


    <section className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back to blogs */}
        <div className="mb-6 max-w-[900px] mx-auto">
          <Link
            href="/blogs"
            className="flex items-center text-[#23aa5d] hover:underline">
            ← Back to all blogs
          </Link>
        </div>

        {/* blogs Header */}
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold font-[para] mb-4 text-gray-800">
            {blogs.heading}
          </h1>
        </div>

        {/* First Image */}
        <div className="mb-6 max-w-[900px] mx-auto">
          <Image
            src={blogs.image}
            alt="Summer Blend Juice"
            width={900}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* blogs Content */}
        <div className="space-y-4 text-gray-800 text-lg font-[para] leading-relaxed max-w-[900px] mx-auto">
          <p>
            {blogs.content1}
          </p>

          <p>
            {blogs.content2}
          </p>

          <p>
            {blogs.content3}
          </p>

          <p>
            {blogs.content4}
          </p>

          <p>
            {blogs.content5}
          </p>
        </div>

        {/* Second Image */}
        <div className="mb-6 max-w-[900px] mx-auto">
          <Image
            src="/assets/Blogs.png" // replace with your image
            alt="Colorful Juices"
            width={900}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

      </div>
    </section>
    </>
  )
}

export default page