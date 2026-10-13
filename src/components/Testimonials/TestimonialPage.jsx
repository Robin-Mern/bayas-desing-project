import React from 'react';
import testimonialsData from './TestimonialsData';
import Image from 'next/image';
import Link from 'next/link';
import './Testimonialpage.css';


export default function TestimonialsPageContent() {
    return (
        <section className="testimonialsPageContentWrapper">
            <div className="common-breadcrumbs">
                <div className="container">
                    <div className="page-breadcrumbs">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="testimonials-header">
                <div className="container">
                    <div className="testimonials-header-row">
                        <h2>What Our Happy <span>Clients Say</span></h2>
                        <div className="tesimonials-header-rating">
                            <span className="rating-value">4.9/5</span>
                            <p>1200+ verified clients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-content">
                <div className="container">
                    <div className="testimonials-grid">

                        {testimonialsData.map((testimonial) => (
                            <div
                                className="testimonials-cards"
                                key={testimonial.id}
                            >
                                <div className="testimonials-card-top">
                                    <div className="cards-rating-head">
                                        <div className="card-ratings">
                                            <span className="ratings"></span>
                                            <span className="ratings"></span>
                                            <span className="ratings"></span>
                                            <span className="ratings"></span>
                                            <span className="ratings"></span>
                                        </div>

                                        <span className="rating-plus">+</span>
                                    </div>

                                    <div className="testimonals-review-box">
                                        <p>{testimonial.review}</p>
                                    </div>
                                </div>

                                <div className="testimonials-card-bottom">
                                    <div className="user-avatar">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                        />
                                    </div>

                                    <div className="user-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="testimonials-video">
                <div className="container">
                    <div className="testimonial-videowrapper">
                        <Image
                            src="/images/testimonial-video-thumb.jpg"
                            alt="Testimonial Video"
                            width={800}
                            height={450}
                        />
                        <span className="play-btn">
                            <Image
                            src="/images/play-btn.svg"
                            alt="Testimonial Video"
                            width={80}
                            height={80}
                        />
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
}