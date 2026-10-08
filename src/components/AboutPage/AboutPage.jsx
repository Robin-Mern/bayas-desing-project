'use client';

import React from 'react';
import Image from 'next/image';
import './AboutPage.css';

const FEATURES_DATA = [
  {
    id: 1,
    title: 'Comfort First',
    description: 'Every piece is designed for everyday comfort without compromise.',
    icon: (
      <svg
        className="featureIconSvg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        <path d="M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z" />
        <path d="M6 18v2" />
        <path d="M18 18v2" />
        <path d="M7 11v3" />
        <path d="M17 11v3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Trusted Service',
    description: 'Hassle-free delivery and support that keeps customers coming back.',
    icon: (
      <svg
        className="featureIconSvg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m11 15 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L13 10" />
        <path d="m13 9-2-2a1 1 0 0 0-1.4 0L5 11.6a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0L11 14" />
        <path d="m7 7 2 2" />
        <path d="m17 17-2-2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Premium Craftsmanship',
    description: 'Handcrafted with high-quality materials, built to last for years.',
    icon: (
      <svg
        className="featureIconSvg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m14.7 10.7 4.6-4.6a2 2 0 0 0 0-2.8l-.6-.6a2 2 0 0 0-2.8 0L11.3 7.3" />
        <path d="m5 19 6.3-6.3" />
        <path d="m9.3 10.7-4.6-4.6a2 2 0 0 1 0-2.8l.6-.6a2 2 0 0 1 2.8 0L12.7 7.3" />
        <path d="m19 19-6.3-6.3" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Modern Designs',
    description: 'Elegant, timeless pieces that blend seamlessly with any space.',
    icon: (
      <svg
        className="featureIconSvg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.24 3.76a6 6 0 0 0-8.49 0L3.5 12a4 4 0 0 0 0 5.66l.84.84a4 4 0 0 0 5.66 0l8.24-8.24a6 6 0 0 0 0-8.5z" />
        <path d="M10 14l6-6" />
        <path d="M20 12v3m-1.5-1.5h3" strokeWidth="1.5" />
        <path d="M16 18v2m-1-1h2" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="aboutPageWrapper">
      <div className="container">
        {/* Top Story Section */}
        <section className="aboutStorySection" aria-label="About Bayas Introduction">
          <div className="aboutHeaderRow">
            <div className="aboutTitleCol">
              <h2 className="aboutMainHeading">About Bayas</h2>
            </div>
            <div className="aboutTextCol">
              <p className="aboutDescription">
                The Bayas was founded in 2019 with a strong emphasis on values and diversity, led by individuals who possess over a quarter of a century of experience in design and manufacturing in the Middle East, mastering innovation and precision. The name &ldquo;The Bayas&rdquo; finds its inspiration from Baya weavers (Thookkanamkuruvi), nature&rsquo;s engineers.
              </p>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="aboutBannerImageWrapper">
            <Image
              src="/images/home-slider2.jpg"
              alt="The Bayas luxury interior living room craftsmanship"
              fill
              priority
              className="aboutBannerImage"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              quality={92}
            />
          </div>
        </section>

        {/* Why Bayas / Quality Craftsmanship Section */}
        <section className="aboutWhySection" aria-label="Why Bayas Quality Craftsmanship">
          <div className="whyHeader">
            <span className="whyBadge">Why Bayas?</span>
            <h2 className="whyTitle">Quality Craftsmanship</h2>
            <p className="whySubtitle">
              Built with premium wood and materials, designed to last for years.
            </p>
          </div>

          {/* 4 Feature Columns */}
          <div className="whyFeaturesGrid">
            {FEATURES_DATA.map((feature) => (
              <div key={feature.id} className="featureCard">
                <div className="featureIconContainer">
                  {feature.icon}
                </div>
                <h3 className="featureTitle">{feature.title}</h3>
                <p className="featureDescription">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
