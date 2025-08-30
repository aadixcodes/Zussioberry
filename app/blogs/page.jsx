"use client";
import Image from "next/image";
import { useState } from "react";
import SummerCooler from '@/components/sections/SummerCooler'
import React from 'react'
import Link from "next/link";
import {blogsData} from "./blogsData";
import {recentPosts} from './blogsData';

const page = () => {

  return (
    <div>
      <SummerCooler />

      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left blogsData */}
            <div className="lg:col-span-2 space-y-10">
              {blogsData.map((blog) => (
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