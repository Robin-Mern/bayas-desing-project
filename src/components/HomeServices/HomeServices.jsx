'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HomeServices.css';

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Architecture Design',
    desc: 'Thoughtfully crafted architectural designs that balance form, function, and beauty to create spaces that inspire, endure, and reflect your vision.',
    image: '/images/arche.jpg',
    alt: 'Luxury open interior architecture design',
    link: '/service-detail',
  },
  {
    id: 2,
    title: 'Construction',
    desc: 'Building with purpose, precision, and quality to bring your vision to life through durable spaces crafted for lasting value.',
    image: '/images/construct.jpg',
    alt: 'Modern outdoor construction and architecture',
    link: '/service-detail',
  },
  {
    id: 3,
    title: 'Structural Design',
    desc: 'Smart structural design that brings together technical precision, safety, and durability to create a strong foundation for your vision.',
    image: '/images/struct.jpg',
    alt: 'Engineered structural interior design detail',
    link: '/service-detail',
  },
  {
    id: 4,
    title: 'Interior Design',
    desc: "Bespoke interior designs crafted with thoughtful details, timeless style, and practical functionality to create spaces you'll love to live in.",
    image: '/images/interior.jpg',
    alt: 'Custom interior design and ambient warm lighting',
    link: '/service-detail',
  },
];

export default function HomeServices() {
  return (
    <section className="homeServicesSection" id="services" aria-label="Our Services">
      <div className="container">
        {/* Header */}
        <div className="servicesHeader">
          <span className="servicesBadge">What We Do</span>
          <h2 className="servicesTitle">Our Services</h2>
        </div>

        {/* 4 Stacked Services Cards */}
        <div className="servicesList">
          {SERVICES_DATA.map((service) => (
            <Link key={service.id} href={service.link} className="serviceCard">
              <div className="serviceCardContent">
                <h3 className="serviceCardTitle">{service.title}</h3>
                <p className="serviceCardDesc">{service.desc}</p>
              </div>

              <div className="serviceCardImageWrapper">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="serviceCardImage"
                  sizes="(max-width: 768px) 100vw, 450px"
                  quality={85}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
