'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxArrowRight } from 'react-icons/rx';
import './HomeCta.css';

export default function HomeCta() {
  return (
    <section className="homeCtaSection" aria-label="Call to action">
      {/* Background Image Layer with Dark Overlay */}
      <div className="ctaImageBg">
        <Image
          src="/images/cta.png"
          alt="Craftsman designing dream space in workshop"
          fill
          priority
          className="ctaImage"
        />
        <div className="ctaOverlay" />
      </div>

      <div className="container">
        {/* Cover Div for CTA Heading and Button */}
        <div className="ctaContent">
          <h2>
            Let’s Design Your<br />
            <span>Dream Space.</span>
          </h2>

          <Link href="#contact" className="ctaBtn">
            Get Started Now
            <RxArrowRight size={18} strokeWidth={0.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}
