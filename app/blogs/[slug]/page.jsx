import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {blogsData} from '../blogsData';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

const page = ({params}) => {
    const { slug } = params;
    const blog = blogsData.find(blog => blog.slug === slug);
  
    if(!blog) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold font-[para] mb-6 text-gray-800">Blog Not Found</h1>
            <Link href="/blogs" className="text-[#23aa5d] font-[para] hover:underline text-lg">
              ← Return to blogs
            </Link>
          </div>
        </div>
      );
    }

  // Function to handle special image layouts
  const renderContent = () => {
    const content = [];
    let i = 0;
    
    while (i < blog.content.length) {
      const currentItem = blog.content[i];
      
      // Special handling for blog 2 - two images side by side
      if (blog.id === 2 && currentItem.type === 'image' && 
          i + 1 < blog.content.length && blog.content[i + 1].type === 'image') {
        content.push(
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <Image 
                src={currentItem.src} 
                alt={currentItem.alt} 
                width={400}
                height={400}
                className="w-full h-[300px] rounded-lg shadow-md object-cover"
              />
              {currentItem.caption && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {currentItem.caption}
                </p>
              )}
            </div>
            <div>
              <Image 
                src={blog.content[i + 1].src} 
                alt={blog.content[i + 1].alt} 
                width={400}
                height={400}
                className="w-full h-[300px] rounded-lg shadow-md object-cover"
              />
              {blog.content[i + 1].caption && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {blog.content[i + 1].caption}
                </p>
              )}
            </div>
          </div>
        );
        i += 2; // Skip the next item since we handled both
        continue;
      }
      
      // Special handling for blog 3 - 4 images in 2x2 grid before footer
      if (blog.id === 3 && currentItem.type === 'image') {
        // Check if we have 4 consecutive images
        const imageGroup = [];
        let j = i;
        while (j < blog.content.length && blog.content[j].type === 'image' && imageGroup.length < 4) {
          imageGroup.push(blog.content[j]);
          j++;
        }
        
        if (imageGroup.length === 4) {
          content.push(
            <div key={i} className="my-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Zussioberry Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {imageGroup.map((imageItem, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
                    <Image
                      src={imageItem.src}
                      alt={imageItem.alt}
                      width={450}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          );
          i += 4; // Skip the next 3 items since we handled all 4
          continue;
        }
      }
      
      // Default rendering for all other content types
      switch (currentItem.type) {
        case 'paragraph':
          content.push(
            <p key={i} className="text-gray-700 mb-6 leading-relaxed text-lg">
              {currentItem.text}
            </p>
          );
          break;
        case 'heading':
          content.push(
            <h2 key={i} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              {currentItem.text}
            </h2>
          );
          break;
        case 'list':
          content.push(
            <ul key={i} className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              {currentItem.items.map((listItem, itemIdx) => {
                const [title, ...descParts] = listItem.split(" - ");
                const description = descParts.join(" - ");
                return (
                  <li key={itemIdx} className="text-lg">
                    <span className="font-bold">{title}</span>
                    {description && ` - ${description}`}
                  </li>
                );
              })}
            </ul>
          );
          break;
        case 'image':
          // For blog 1 and individual images in other blogs
          content.push(
            <div key={i} className="my-8">
              <Image 
                src={currentItem.src} 
                alt={currentItem.alt} 
                width={250}
                height={250}
                className="w-[250px] h-[250px] rounded-lg shadow-md item-center mx-auto object-cover"
              />
              {currentItem.caption && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {currentItem.caption}
                </p>
              )}
            </div>
          );
          break;
        case 'quote':
          content.push(
            <blockquote key={i} className="border-l-4 border-[#23aa5d] pl-4 my-8 italic text-gray-700">
              <p className="text-lg">"{currentItem.text}"</p>
              {currentItem.author && (
                <footer className="mt-2 not-italic font-semibold text-gray-800">
                  — {currentItem.author}
                </footer>
              )}
            </blockquote>
          );
          break;
        default:
          break;
      }
      
      i++;
    }
    
    return content;
  };

  return (
    <>
    {/* Hero Banner Section */}
    <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/careerBanner.png')",
      }}>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[heading-1]">
          {blog.title}
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{blog.date}</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>By {blog.author}</span>
          </div>
          <span className="hidden sm:block">•</span>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </section>

    {/* Blog Content Section */}
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back to blogs link */}
        <div className="mb-10">
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#23aa5d] hover:text-green-700 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to all blogs
          </Link>
        </div>

        {/* Blog Content */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 pt-0 sm:pt-0 md:pt-0">
            {renderContent()}
          </div>
        </article>

        {/* Related Posts */}
        
      </div>
    </section>
    </>
  )
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = blogsData.find(blog => blog.slug === slug);

  return {
    title: blog?.title || 'Blog Not Found',
    description: blog?.description || 'Blog post not available',
  };
}

export default page