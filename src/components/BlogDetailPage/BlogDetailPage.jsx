'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogDetails({ params }) {
    const { id } = await params;

    const blog = blogData.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        notFound();
    }

    return (
        <main className="blog-details-page">
            <div className="blog-details-header">
                <Link href="/blog">
                    ← Back to Blogs
                </Link>

                <h1>{blog.title}</h1>
                <p>{blog.date}</p>

                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1200}
                    height={700}
                    priority
                />
            </div>

            <section className="blog-detail-wrapper">
                {blog.content.map((item, index) => (
                    <div key={index}>
                        {item.type === "text" && (
                            <p>{item.value}</p>
                        )}

                        {item.type === "image" && (
                            <div className="blog-content-image">
                                <Image
                                    src={item.src}
                                    alt={item.alt || blog.title}
                                    width={1000}
                                    height={600}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </main>
    );
}