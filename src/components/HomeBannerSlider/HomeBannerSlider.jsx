'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { RxArrowRight } from 'react-icons/rx';
import './HomeBannerSlider.css';

const AUTO_PLAY_DELAY = 5000; // 5 seconds per slide

const SLIDES_DATA = [
  {
    id: 1,
    tagline: 'PREMIUM INTERIOR ARCHITECTURE',
    titleMain: 'Modern Interiors Crafted',
    titleAccent: 'for Comfort & Style.',
    image: '/images/home-slider1.jpg',
    alt: 'Modern luxury living room interior with warm architectural lighting',
    primaryCta: {
      text: 'Showcase Our Products',
      href: '#products',
    },
    secondaryCta: {
      text: 'Explore Our Service',
      href: '#services',
    },
  },
  {
    id: 2,
    tagline: 'CURATED LIVING SPACES',
    titleMain: 'Architectural Elegance',
    titleAccent: 'Tailored for Living.',
    image: '/images/home-slider2.jpg',
    alt: 'Minimalist contemporary luxury interior lounge design',
    primaryCta: {
      text: 'View Our Portfolio',
      href: '/portfolio',
    },
    secondaryCta: {
      text: 'Explore Our Service',
      href: '#services',
    },
  },
  {
    id: 3,
    tagline: 'TIMELESS LUXURY DESIGN',
    titleMain: 'Serene Aesthetics',
    titleAccent: 'Infused with Soul.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
    alt: 'Warm organic modern bedroom and living sanctuary',
    primaryCta: {
      text: 'Showcase Our Products',
      href: '#products',
    },
    secondaryCta: {
      text: 'Consult Our Designers',
      href: '#contact',
    },
  },
];

export default function HomeBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [timerKey, setTimerKey] = useState(0);

  // Touch gesture tracking for mobile swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetTimer = useCallback(() => {
    setTimerKey((prev) => prev + 1);
  }, []);

  const goToSlide = useCallback((newIndex) => {
    setCurrentIndex((current) => {
      setPrevIndex(current);
      return newIndex;
    });
    resetTimer();
  }, [resetTimer]);

  const handleNext = useCallback(() => {
    setCurrentIndex((current) => {
      setPrevIndex(current);
      return (current + 1) % SLIDES_DATA.length;
    });
    resetTimer();
  }, [resetTimer]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((current) => {
      setPrevIndex(current);
      return (current - 1 + SLIDES_DATA.length) % SLIDES_DATA.length;
    });
    resetTimer();
  }, [resetTimer]);

  // Reliable Auto-Slide Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % SLIDES_DATA.length;
      });
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [timerKey]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      // Swiped left -> next slide
      handleNext();
    } else if (distance < -45) {
      // Swiped right -> prev slide
      handlePrev();
    }
  };

  return (
    <section
      className="homeBannerSlider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Home Banner Carousel"
    >
      {/* Slides Background Track */}
      <div className="sliderTrack">
        {SLIDES_DATA.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === prevIndex;

          return (
            <div
              key={slide.id}
              className={`slideItem ${isActive ? 'active' : ''} ${isPrev ? 'prevSlide' : ''}`}
              aria-hidden={!isActive}
            >
              {/* Depth Zoom Image Layer ("Backil ninnum keri varunna reethi") */}
              <div className="slideImageWrapper">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="slideImage"
                  sizes="100vw"
                  quality={90}
                />
              </div>

              {/* Ambient Luxury Dark Vignette Overlay */}
              <div className="slideOverlay" />

              {/* Slide Foreground Content */}
              <div className="heroContentContainer">
                <div className="container heroContentInner">
                  {/* <span className="heroTagline">{slide.tagline}</span> */}

                  <h1 className="heroHeading">
                    {slide.titleMain}{' '}
                    <span className="serifAccent">{slide.titleAccent}</span>
                  </h1>

                  <div className="heroButtonsGroup">
                    <Link href={slide.primaryCta.href} className="btnHeroPill">
                      <span>{slide.primaryCta.text}</span>
                      <span className="pillArrow"><RxArrowRight size={18} strokeWidth={.6} /></span>
                    </Link>

                    <Link href={slide.secondaryCta.href} className="btnHeroPill btnHeroSecondary">
                      <span>{slide.secondaryCta.text}</span>
                      <span className="pillArrow"><RxArrowRight size={18} strokeWidth={.6} /></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="sliderNavBtn sliderNavPrev"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        className="sliderNavBtn sliderNavNext"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide Indicators with Progress Bar */}
      <div className="sliderPagination">
        {SLIDES_DATA.map((_, dotIndex) => {
          const isActive = dotIndex === currentIndex;
          return (
            <button
              key={dotIndex}
              type="button"
              className={`paginationDot ${isActive ? 'active' : ''}`}
              onClick={() => goToSlide(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
            >
              {isActive && (
                <span
                  key={`progress-${currentIndex}-${timerKey}`}
                  className="paginationProgressBar"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
