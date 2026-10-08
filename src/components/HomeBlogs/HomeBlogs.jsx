'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';
import './HomeBlogs.css';

const BLOGS_DATA = [
  {
    id: 1,
    title: 'Modern Interior Design Trends.',
    date: 'Apr 3, 2026',
    image: '/images/l2.jpg',
    alt: 'Modern minimalist interior design trends with sculptural warm plaster walls',
    link: '#blog-1',
    aspect: 'tall',
  },
  {
    id: 2,
    title: 'Stylish & Functional Spaces.',
    date: 'Apr 3, 2026',
    image: '/images/ls.jpg',
    alt: 'Stylish and functional sunlit architectural spaces with warm earth tones',
    link: '#blog-2',
    aspect: 'compact',
  },
  {
    id: 3,
    title: 'Simple Home Design Tips.',
    date: 'Apr 3, 2026',
    image: '/images/l1.jpg',
    alt: 'Simple modern home interior design tips with ambient warm lighting',
    link: '#blog-3',
    aspect: 'tall',
  },
];

export default function HomeBlogs() {
  return (
    <section className="homeBlogsSection" id="blogs" aria-label="Insights & Inspirations">
      <div className="container">
        {/* Section Header */}
        <div className="blogsHeader">
          <div className="blogsHeaderLeft">
            <span>Blog</span>
            <h2>Insights & Inspirations</h2>
          </div>

          <Link href="#all-blogs" className="seeAllBlogsBtn">
            See All Blogs
            <RxArrowRight size={18} strokeWidth={0.6} />
          </Link>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="blogsGrid">
          {BLOGS_DATA.map((blog) => (
            <Link key={blog.id} href={blog.link} className={`blogCard blogCard-${blog.aspect}`}>
              <div className={`blogImageWrapper blogImage-${blog.aspect}`}>
                <Image
                  src={blog.image}
                  alt={blog.alt}
                  fill
                  className="blogImage"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  // quality={85}
                />
              </div>

              <div className="blogCardContent">
                <p>{blog.date}</p>
                <h5>{blog.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
