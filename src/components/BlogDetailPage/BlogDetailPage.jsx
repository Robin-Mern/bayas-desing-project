import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogData from "../BlogPage/BlogPageData";
import "./Blogdetail.css";

export default function BlogDetails({ id }) {
    const blog = blogData.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        notFound();
    }

    return (
        <section className="blog-details-page">
            <div className="blog-details-header">
                <div className="container">

                    <h5>{blog.date}</h5>
                    <h1>{blog.title}</h1>

                </div>
            </div>

            <div className="blog-content-row">
                <div className="container">
                    <div className="blog-details-main-img">
                        <Image
                            src={blog.image}
                            alt={blog.title || blog.title}
                            width={1000}
                            height={600}
                        />
                    </div>

                    <div className="blog-details-col1">
                        {blog.content.map((item, index) => (
                            <div key={index}>
                                {(item.type === "main-image" ||
                                    item.type === "image") && (
                                        <div className="blog-content-image">
                                            <Image
                                                src={item.src}
                                                alt={item.alt || blog.title}
                                                width={1000}
                                                height={600}
                                            />
                                        </div>
                                    )}

                                <div class="blog-content-row">
                                    <div className="blog-content-col1">
                                        {item.type === "text" && (
                                            <p>{item.value}</p>
                                        )}
                                    </div>

                                </div>


                            </div>
                        ))}
                    </div>

                    <div className="blog-details-col2">
                        <div className="sidebar">
                            <div className="sidebar-row1">
                                <h3>Get in Touch</h3>
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="example@email.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="+1(45) 555-0132" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tell-us">Tell us about your project</label>
                                        <textarea id="tell-us" className="form-control" placeholder="Name"></textarea>
                                    </div>
                                    <input type="submit" value="Submit" className="submit-btn" />
                                </form>
                            </div>
                            <div className="sidebar-row2">
                                <Image src="/images/sidebar-img.png" alt="sidebar image" width={480} height={480} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}