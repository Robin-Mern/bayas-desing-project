'use client';

import React from 'react';
import Image from 'next/image';
import './ServiceDetails.css';
export default function ServiceBanner({ title = 'Architecture Design', image = '/images/service-detail-banner.jpg' }) {
  return (
    <section className="serviceInnerBanner" aria-label="Service Banner">
      <div className="serviceBannerImageWrapper">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="serviceBannerImg"
          sizes="100vw"
          quality={90}
        />
        <div className="serviceBannerOverlay" />
      </div>

      <div className="container">
        <div className="serviceBannerContent">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}
