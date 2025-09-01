"use client";
import Image from "next/image";
import { useState } from "react";
import SummerCooler from '@/components/sections/SummerCooler'
import React from 'react'
import Link from "next/link";
import {blogsData} from "./blogsData";
import {recentPosts} from './blogsData';

const page = () => {
   const firstBlog = blogsData[0];

  return (
    <div>
<section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/assets/AboutBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-6xl mx-auto w-full px-4 py-10 sm:py-14 md:py-16 flex flex-col-reverse md:grid md:grid-cols-2 gap md:gap-10 items-center h-full">
          {/* Text Content */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] text-white mb-3 sm:mb-4">
              {firstBlog.title.split(' ')[0]} <span className="font-[heading-1]">{firstBlog.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            {/* <h3 className="text-lg sm:text-xl md:text-2xl font-[heading-2] font-bold text-white mb-3 sm:mb-4">
              {firstBlog.desc.split('.')[0]}.
            </h3> */}
            <p className="text-xs sm:text-sm md:text-lg font-[para] text-gray-200 leading-relaxed mb-5 sm:mb-6 max-w-xl">
              {firstBlog.desc.length > 200 ? `${firstBlog.desc.substring(0, 200)}...` : firstBlog.desc}
            </p>
            <Link href={`/blogs/${firstBlog.slug}`}>
              <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
                Read More
              </button>
            </Link>
          </div>
          {/* Image */}
          <div className="w-full flex justify-center md:justify-end items-center">
            <Image
              src={firstBlog.image}
              alt={firstBlog.title}
              width={320}
              height={320}
              className="rounded-lg shadow-lg w-60 h-60 sm:w-80 sm:h-80 object-cover"
              priority
            />
          </div>
        </div>
      </section>





      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left blogsData */}
            <div className="lg:col-span-2 space-y-10">
              {blogsData.slice(1).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#23aa5d] text-white font-[para] text-sm text-center px-3 py-1 rounded-md">
                        {blog.date}
                      </div>
                      <p className="text-gray-500 text-sm">
                        By - <span className="text-[#23aa5d]">{blog.author}</span>
                      </p>
                    </div>
                    <h3 className="text-xl font-[para] font-bold mt-3">{blog.title}</h3>
                    <p className="text-gray-600 mt-2 font-[para]">{blog.desc}</p>
                    <Link href={`/blogs/${blog.slug}`}>
                      <button className="mt-4 px-5 cursor-pointer py-2 bg-[#23aa5d] text-white rounded-md hover:bg-green-700 transition">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Recent Posts */}
            <aside className="bg-gray-50 p-6 rounded-lg shadow-md self-start">
              <h4 className="text-xl font-[para] mb-6">Recent Post</h4>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={70}
                      height={70}
                      className="rounded-md"
                    />
                    <div>
                      <h5 className="font-medium text-gray-800 font-[para]">{post.title}</h5>
                      <p className="text-sm text-gray-500">
                        By -{" "}
                        <span className="font-[para] text-[#23aa5d] font-medium">
                          {post.author}
                        </span>{" "}
                        | {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>


    </div>
  )
}

export default page