'use client';

import React from 'react';
import Image from 'next/image';
import './ServiceDetails.css';

const PORTFOLIO_ITEMS = [
  { id: 1, image: '/images/p1.jpg', alt: 'Contemporary modern bedroom' },
  { id: 2, image: '/images/p2.jpg', alt: 'Minimalist curved interior arch' },
  { id: 3, image: '/images/p3.jpg', alt: 'Elegant dining and lounge interior' },
  { id: 4, image: '/images/p4.jpg', alt: 'Traditional living room hall with wood craft' },
  { id: 5, image: '/images/p5.jpg', alt: 'Luxury architectural ceiling and art' },
  { id: 6, image: '/images/p6.jpg', alt: 'Modern luxury bedroom balcony view' },
  { id: 7, image: '/images/p7.jpg', alt: 'Arched entryway with warm lighting' },
  { id: 8, image: '/images/p8.jpg', alt: 'Warm contemporary living space' },
];

export default function ServicePortfolio() {
  return (
    <section className="servicePortfolioSection" aria-label="Architecture Portfolio Showcase">
      <div className="custonm-container">
        <h2>Architecture Portfolio</h2>

        <div className="portfolioGalleryGrid">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="portfolioCardItem">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="portfolioImg"
                sizes="(max-width: 576px) 50vw, (max-width: 991px) 50vw, 25vw"
                quality={88}
              />
              <div className="portfolioHoverOverlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
