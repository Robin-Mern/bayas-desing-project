import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Blogpage.css";
import blogData from "./BlogPageData";

export default function BlogPage() {
    return (

        <section className="blog-list-wrapper">

            <div className="common-breadcrumbs">
                <div className="container">
                    <div className="page-breadcrumbs">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Our Blogs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-content-row">

                <div className="container">
                
                <h2>Insights & Inspirations</h2>

                <div className="blog-content-grid">

                    {blogData.map((blog) => (

                        <div className="blog-card" key={blog.id}>
                            <div className="blog-image">
                                <Link href="/">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title} 
                                        width={420}
                                        height={440}
                                    />
                                </Link>
                            </div>
                            <div className="blog-content">
                                <h5>{blog.date}</h5>
                                <h3>{blog.title}</h3>
                            </div>
                        </div>

                    ))}

                </div>

                <Link href="" className="show-all-btn">Show More</Link>

                </div>

            </div>

        </section>
    );
}