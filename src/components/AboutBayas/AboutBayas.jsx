'use client';

import React from 'react';
import Image from 'next/image';
import './AboutBayas.css';

const STATS_DATA = [
  {
    id: 1,
    number: '300',
    label: 'Happy Customers',
    subLabel: 'Homes Furnished',
  },
  {
    id: 2,
    number: '100',
    label: 'Products Delivered',
    subLabel: '1,000+ Pieces Crafted',
  },
  {
    id: 3,
    number: '8',
    label: 'Experience Years',
    subLabel: 'Years of Experience',
  },
  {
    id: 4,
    number: '70%',
    label: 'Returning Clients',
    subLabel: 'Repeat Customers',
  },
];

export default function AboutBayas() {
  return (
    <section className="aboutBayasSection" id="about" aria-label="About Bayas">
      <div className="container">
        {/* 2-Column Story Grid */}
        <div className="aboutStoryGrid">
          {/* Left: Warm Living Room Image */}
          <div className="aboutImageWrapper">
            <Image
              src="/images/about.jpg"
              alt="Warm contemporary living room interior with circular art"
              fill
              className="aboutImage"
              sizes="(max-width: 991px) 100vw, 550px"
              quality={88}
            />
          </div>

          {/* Right: Text Content */}
          <div className="aboutStoryContent">
            <span className="aboutBadge">About Us</span>
            <h2 className="">About Bayas</h2>
            <p className="">
              The Bayas creates thoughtfully designed architecture, interiors, construction, and products that blend functionality, aesthetics, and lasting quality. With a commitment to innovation and craftsmanship.
            </p>
          </div>
        </div>

        {/* 4 Stats Metrics Row */}
        <div className="aboutStatsGrid">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="statItem">
              <h3 className="statNumber">{stat.number}</h3>
              <h6 className="statLabel">{stat.label}</h6>
              <p className="statSubLabel">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
