'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HomeDealIn.css';

import { RxArrowRight } from 'react-icons/rx';

const TOP_PRODUCTS = [
  {
    id: 1,
    title: 'Hanging Wood Shade Light',
    image: '/images/int1.jpg',
    alt: 'Hanging Wood Shade Light with warm ambient glow',
    link: '#products',
  },
  {
    id: 2,
    title: 'Arcio Hanging Light',
    image: '/images/int2.jpg',
    alt: 'Arcio Hanging Light in modern living interior',
    link: '#products',
  },
  {
    id: 3,
    title: 'Parametric Wood Light',
    image: '/images/int3.jpg',
    alt: 'Parametric Wood Light lantern in contemporary bedroom',
    link: '#products',
  },
];

const BOTTOM_PRODUCTS = [
  {
    id: 4,
    title: 'Bull-wood Art Light',
    image: '/images/int4.jpg',
    alt: 'Bull-wood Art Light over elegant dining area',
    link: '#products',
  },
  {
    id: 5,
    title: 'Wall hanging wood light',
    image: '/images/int5.jpg',
    alt: 'Wall hanging wood light over cozy sofa seating',
    link: '#products',
  },
];

export default function HomeDealIn() {
  return (
    <section className="homeDealInSection" id="deal-in" aria-label="We Deal In Categories">
      <div className="container">
        {/* Header */}
        <div className="dealInHeader">
          <span className="dealInBadge">Our Products</span>
          <h2 className="dealInTitle">We Deal In</h2>
          <p className="dealInSubtitle">
            Explore the categories we specialize in, each crafted with attention to detail and purpose.
          </p>
        </div>

        {/* Top 3 Cards Row */}
        <div className="dealInGrid">
          {TOP_PRODUCTS.map((product) => (
            <Link key={product.id} href={product.link} className="dealInCard">
              <div className="dealInCardImageWrapper">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="dealInCardImage"
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                />
              </div>

              <div className="dealInCardOverlay" />

              <span className="dealInCardTag">{product.title}</span>

              <span className="dealInShopBtn">
                <span>Shop Now</span>
                <span className="btnArrow"><RxArrowRight size={18} strokeWidth={.4} /></span>
              </span>
            </Link>
          ))}

{BOTTOM_PRODUCTS.map((product) => (
            <Link key={product.id} href={product.link} className="dealInCard">
              <div className="dealInCardImageWrapper">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="dealInCardImage"
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={85}
                />
              </div>

              <div className="dealInCardOverlay" />

              <span className="dealInCardTag">{product.title}</span>

              <span className="dealInShopBtn">
                <span>Shop Now</span>
                <span className="btnArrow"><RxArrowRight size={18} strokeWidth={.4} /></span>
              </span>
            </Link>
          ))}

        </div>

        {/* Bottom 2 Cards Row */}
        {/* <div className="dealInRowBottom">
          {BOTTOM_PRODUCTS.map((product) => (
            <Link key={product.id} href={product.link} className="dealInCard">
              <div className="dealInCardImageWrapper">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="dealInCardImage"
                  sizes="(max-width: 768px) 100vw, 600px"
                  quality={85}
                />
              </div>

              <div className="dealInCardOverlay" />

              <span className="dealInCardTag">{product.title}</span>

              <span className="dealInShopBtn">
                <span>Shop Now</span>
                <span className="btnArrow"><RxArrowRight size={18} strokeWidth={.4} /></span>
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
}
