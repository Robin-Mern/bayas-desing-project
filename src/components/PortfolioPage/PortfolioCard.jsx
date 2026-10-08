'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RxArrowRight } from 'react-icons/rx';

export default function PortfolioCard({ project, onOpenDetails }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images && project.images.length > 0
    ? project.images
    : ['/images/smitha-home.jpg'];

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = () => {
    if (onOpenDetails) {
      onOpenDetails(project);
    }
  };

  return (
    <article className="portfolioCard" onClick={handleCardClick} role="button" tabIndex={0}>
      {/* Media & Carousel Container */}
      <div className="portfolioMediaContainer">
        {/* Top-Left Category Tag */}
        <span className="portfolioBadge">
          {project.categoryBadge}
        </span>

        {/* Carousel Image with Smooth Transition */}
        <div className="portfolioImageWrapper">
          <Image
            src={images[currentImageIndex]}
            alt={`${project.title} - photo ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 991px) 50vw, 380px"
            className="portfolioCardImg"
            priority={project.id <= 3}
          />
        </div>

        {/* Left Arrow Button */}
        {images.length > 1 && (
          <button
            type="button"
            className="carouselNavBtn carouselNavPrev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <FiChevronLeft className="carouselNavIcon" />
          </button>
        )}

        {/* Right Arrow Button */}
        {images.length > 1 && (
          <button
            type="button"
            className="carouselNavBtn carouselNavNext"
            onClick={handleNext}
            aria-label="Next image"
          >
            <FiChevronRight className="carouselNavIcon" />
          </button>
        )}

        {/* Subtle Slide Indicators */}
        {images.length > 1 && (
          <div className="carouselDots" aria-hidden="true">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`carouselDot ${idx === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Info Bottom Row */}
      <div className="portfolioInfoRow">
        <h3 className="portfolioTitle">
          {project.title}
        </h3>

        <button
          type="button"
          className="portfolioActionBtn"
          aria-label={`View details for ${project.title}`}
          onClick={(e) => {
            e.stopPropagation();
            if (onOpenDetails) onOpenDetails(project);
          }}
        >
          <RxArrowRight className="portfolioActionIcon" />
        </button>
      </div>
    </article>
  );
}
