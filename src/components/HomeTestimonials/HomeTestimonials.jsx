'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

import './HomeTestimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: '“Recommend to anyone seeking innovative architectural solutions. Their attention to detail, creative approach, and professionalism truly stood out. Their professionalism and dedication to excellence are evident in every project they undertake.”',
    name: 'Dr. Ajith S',
    role: 'DOCTOR',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    quote: '“From the initial design consultations to the final turnkey execution, The Bayas Designs exceeded all our expectations. The custom lighting and bespoke spaces feel like living inside a modern sanctuary. The custom lighting and bespoke spaces feel like living inside a modern sanctuary The custom lighting and bespoke spaces feel like living inside a modern sanctuary”',
    name: 'Meera Nambiar',
    role: 'ENTREPRENEUR',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    quote: '“The execution speed, transparency in budgeting, and uncompromising material quality made our home construction journey completely effortless. Truly a world-class architectural team.”',
    name: 'Rajesh Varma',
    role: 'ARCHITECT & INVESTOR',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

// Cloned slides for seamless infinite loop: [Last, Slide 1, Slide 2, Slide 3, First]
const EXTENDED_SLIDES = [
  { ...TESTIMONIALS_DATA[TESTIMONIALS_DATA.length - 1], uniqueKey: 'clone-prev' },
  ...TESTIMONIALS_DATA.map((item) => ({ ...item, uniqueKey: `real-${item.id}` })),
  { ...TESTIMONIALS_DATA[0], uniqueKey: 'clone-next' },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isAnimatingRef = useRef(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // When transition is disabled after wrapping, re-enable it on next render frame
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
          isAnimatingRef.current = false;
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  const handleNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === EXTENDED_SLIDES.length - 1) {
      // Reached clone of first slide: instantly snap to real first slide at index 1
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached clone of last slide: instantly snap to real last slide
      setWithTransition(false);
      setCurrentIndex(EXTENDED_SLIDES.length - 2);
    } else {
      isAnimatingRef.current = false;
    }
  };

  // Continuous auto-slide with shorter delay (3.2 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="homeTestimonialsSection" id="testimonials" aria-label="Happy Client Stories">
      <div className="container">
        {/* Section Header */}
        <div className="testimonialHeader">
          <span>Testimonial</span>
          <h2>Happy Client Stories</h2>
        </div>

        {/* Content Layout */}
        <div className="testimonialGrid">
          {/* Left: Rotating Circular Stamp Badge */}
          <div className="trustedStampWrapper" aria-hidden="true">
            {/* <Image src="/images/trusted-client.svg" /> */}
            <Image
              src="/images/trusted-client.svg"
              alt="the sfg" width={120}
              height={120} />
            <svg className="stampSvgCircle" viewBox="0 0 200 200">
              <path
                id="stampTextPath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                fill="none"
              />
              <text fill="rgba(255, 255, 255, 0.75)" fontSize="13" fontWeight="700" letterSpacing="3.5">
                <textPath href="#stampTextPath" startOffset="0%">
                  • TRUSTED BY CLIENTS • TESTIMONIAL •
                </textPath>
              </text>
            </svg>
            <div className="stampCenterQuotes">“</div>
          </div>

          {/* Right: Continuous Infinite Loop Testimonials Carousel */}
          <div
            className="testimonialContentArea"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Overflow Viewport */}
            <div className="testimonialSliderViewport">
              <div
                className={`testimonialTrack ${withTransition ? 'isTransitioning' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {EXTENDED_SLIDES.map((testimonial, idx) => (
                  <div
                    key={testimonial.uniqueKey || idx}
                    className="testimonialSlide"
                  >
                    <p>{testimonial.quote}</p>

                    <div className="clientProfile">
                      <div className="clientAvatar">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="clientAvatarImg"
                          sizes="52px"
                        />
                      </div>

                      <div className="clientInfo">
                        <span>{testimonial.name}</span>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next Slider Controls */}
            <div className="testimonialNavArrows">
              <button
                type="button"
                className="testimonialArrowBtn"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                className="testimonialArrowBtn"
                onClick={handleNext}
                aria-label="Next Testimonial"
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
