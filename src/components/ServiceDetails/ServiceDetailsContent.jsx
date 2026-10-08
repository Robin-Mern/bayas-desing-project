'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';
import './ServiceDetails.css';

export default function ServiceDetailsContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for getting in touch! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="serviceDetailsContentSection" aria-label="Service Details and Contact">
      <div className="container">
        <div className="serviceContentGrid">
          {/* Left Column: Architectural Story & Details */}
          <article className="serviceArticleWrapper">
            <p>
              We create thoughtfully designed architecture spaces that balance functionality, aesthetics, and structural integrity. From the initial concept to the final design, every element is carefully considered to create buildings that are visually distinctive, practical, and designed to stand the test of time.
            </p>

            <h2>Concept & Planning</h2>
            <p>
              Every successful project begins with a strong concept. We study the site, understand your requirements, and develop thoughtful design solutions that balance functionality, proportions, natural light, circulation, and the surrounding environment.
            </p>

            <h3>Residential Architecture</h3>
            <p>
              We design homes that combine contemporary aesthetics with practical living. From the overall building form to individual architectural details, every element is planned to create a comfortable, cohesive, and personalized environment tailored to your lifestyle.
            </p>

            <h4>Site Planning</h4>
            <p>
              We carefully analyze the site, orientation, surroundings, access, and available space to develop an efficient and elegant layout. Our approach ensures that the building works harmoniously with its environment while making the most of the site.
            </p>
            <ol>
              <li>Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful.</li>
              <li>Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful.</li>

            </ol>

            <h4>Commercial Architecture</h4>
            <p>
              Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful. By combining thoughtful planning, premium materials, and personalized design solutions, we transform everyday living spaces into comfortable, elegant environments that reflect your unique lifestyle. From the initial concept to the final touches, we focus on every detail to make sure the space feels cohesive, welcoming, and built to inspire.
            </p>


            <ul>
              <li>Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful.</li>
              <li>Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful.</li>

              <li>Our commercial interior design services concentrate on creating spaces that are as functional as they are beautiful.</li>

            </ul>


            <h5>Sustainable & Modern Execution</h5>
            <p>
              We integrate sustainable practices, modern building techniques, and enduring craftsmanship to ensure every architectural structure achieves maximum energy efficiency, longevity, and timeless appeal that enhances its natural surroundings.
            </p>
          </article>

          {/* Right Column: Sidebar (Form + Promo Banner) */}
          <aside className="serviceSidebarWrapper">
            {/* Get in Touch Card */}
            <div className="getInTouchCard">
              <h3>Get in Touch</h3>
              <form className="touchForm" onSubmit={handleSubmit}>
                <div className="touchFormGroup">
                  <label htmlFor="serviceName">Full Name</label>
                  <input
                    id="serviceName"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="touchFormGroup">
                  <label htmlFor="serviceEmail">Email Address</label>
                  <input
                    id="serviceEmail"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </div>

                <div className="touchFormGroup">
                  <label htmlFor="servicePhone">Phone</label>
                  <input
                    id="servicePhone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9847597269"
                    required
                  />
                </div>

                <div className="touchFormGroup">
                  <label htmlFor="serviceMessage">Tell us about your project</label>
                  <textarea
                    id="serviceMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello..."
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="touchSubmitBtn">
                  Submit
                </button>
              </form>
            </div>

            {/* Promo Banner Card */}
            <div className="promoBannerCard">
              <div className="promoBgImageWrapper">
                <Image
                  src="/images/interior.jpg"
                  alt="Custom interior solutions"
                  fill
                  className="promoBgImg"
                  sizes="(max-width: 991px) 100vw, 380px"
                  quality={88}
                />
                <div className="promoOverlay" />
              </div>
              <div className="promoCardBody">
                <span>TRANSFORM YOUR SPACE</span>
                <h3>Custom <span>Interior </span> <span>Solutions</span> </h3>
                <p>Modern designs tailored <span>to your lifestyle.</span></p>
                <Link href="/#contact" className="exploreWorkBtn">
                  Explore Our Work <span>  <RxArrowRight size={18} strokeWidth={.4} /></span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
