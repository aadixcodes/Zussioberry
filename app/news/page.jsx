"use client";

import NewsFront from '@/components/sections/NewsFront'
import React from 'react'
import Image from "next/image";
import { Calendar } from "lucide-react";
import Link from 'next/link';
import {newsData} from './newsData';

const rightNewsData = [
  {
    id: 1,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/h6AzCsG5r1yalqdY2dLKltXy69qsO-wtBHD2TCohhFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzE0LzA3LzU5/LzM2MF9GXzEzMTQw/NzU5MTZfOXF1ekVN/SERFcjhjMUJLQWpT/blBxU2NNUTFJV0hR/bXUuanBn",
  },
  {
    id: 2,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/2GvoIwijnjEBuydvh_ktz_VQVRCJTDWYcfYp5_WVmHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Vi/L2ZlL2Y3ZWJmZWM5/Y2FkMDljMDNlMmYy/YjdkYWI5NzZkMjMy/LmpwZw",
  },

  {
    id: 3,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/h6AzCsG5r1yalqdY2dLKltXy69qsO-wtBHD2TCohhFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzE0LzA3LzU5/LzM2MF9GXzEzMTQw/NzU5MTZfOXF1ekVN/SERFcjhjMUJLQWpT/blBxU2NNUTFJV0hR/bXUuanBn",
  },
  {
    id: 4,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/2GvoIwijnjEBuydvh_ktz_VQVRCJTDWYcfYp5_WVmHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Vi/L2ZlL2Y3ZWJmZWM5/Y2FkMDljMDNlMmYy/YjdkYWI5NzZkMjMy/LmpwZw",
  },

  {
    id: 5,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/h6AzCsG5r1yalqdY2dLKltXy69qsO-wtBHD2TCohhFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzE0LzA3LzU5/LzM2MF9GXzEzMTQw/NzU5MTZfOXF1ekVN/SERFcjhjMUJLQWpT/blBxU2NNUTFJV0hR/bXUuanBn",
  },
  {
    id: 6,
    date: "22 July, 2025",
    title: "Now Delivering Fresh to Your Doorstep",
    description:
      "Enjoy our natural juices at home with doorstep delivery. Fresh, healthy, and convenient — just for you!",
    image: "https://imgs.search.brave.com/2GvoIwijnjEBuydvh_ktz_VQVRCJTDWYcfYp5_WVmHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y3L2Vi/L2ZlL2Y3ZWJmZWM5/Y2FkMDljMDNlMmYy/YjdkYWI5NzZkMjMy/LmpwZw",
  },
];

const page = () => {
  return (
    <div>
      <NewsFront />

      <section className="py-16 px-6 lg:px-20 bg-white">
        {/* News Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section: Main News (Big Card) */}
          <div>
            {newsData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
              >
                <Image
                  src={item.image}
                  alt={item.img_alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  priority
                  unoptimized={item.image.startsWith('http')}
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold font-[para] text-gray-900 mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-[para]">{item.content1}</p>
                  <Link href={`/news/${item.slug}`} className="inline-block">
                    <button className="bg-[#23aa5d] hover:bg-green-800 text-white cursor-pointer px-4 py-2 rounded-md text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Other News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 self-start">
            {rightNewsData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                style={{ height: 'auto' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                  unoptimized={item.image.startsWith('http')}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-md font-semibold font-[para] text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <Link href={`/news/${item.slug}`} className="inline-block">
                    <button className="bg-[#23aa5d] hover:bg-green-800 text-white cursor-pointer px-4 py-2 rounded-md text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page