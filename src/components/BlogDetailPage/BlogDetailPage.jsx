'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetailPage({ blog }) {
    return (
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
                                alt={item.alt}
                                width={1000}
                                height={600}
                            />
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}