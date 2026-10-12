'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RxArrowRight } from 'react-icons/rx';
import { PORTFOLIO_PROJECTS } from '@/components/PortfolioPage/portfolioData';
import './MoreProjectsSlider.css';

export default function MoreProjectsSlider({ currentProjectId }) {
  const router = useRouter();
  const sliderTrackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter out current project or show all relevant projects
  const displayProjects = React.useMemo(() => {
    if (!currentProjectId) return PORTFOLIO_PROJECTS;
    const others = PORTFOLIO_PROJECTS.filter((p) => p.id !== Number(currentProjectId));
    return others.length > 0 ? others : PORTFOLIO_PROJECTS;
  }, [currentProjectId]);

  const updateScrollButtons = () => {
    if (!sliderTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderTrackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const handleScroll = (direction) => {
    if (!sliderTrackRef.current) return;
    const cardWidth = sliderTrackRef.current.querySelector('.moreProjectCard')?.offsetWidth || 380;
    const scrollAmount = (cardWidth + 24) * 1; // scroll 1 or more cards

    sliderTrackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(updateScrollButtons, 350);
  };

  const handleCardClick = (id) => {
    router.push(`/portfolio-detail?id=${id}`);
  };

  return (
    <section className="moreProjectsSection" aria-label="More Projects">
      <div className="container">
        {/* Top Header Row with Title in Center & Nav Arrows at Ends */}
        <div className="moreProjectsHeader">
          <button
            type="button"
            className="sliderNavArrow sliderArrowPrev"
            onClick={() => handleScroll('prev')}
            aria-label="Previous projects"
          >
            <FiChevronLeft size={24} />
          </button>

          <h2 className="moreProjectsTitle">More Projects</h2>

          <button
            type="button"
            className="sliderNavArrow sliderArrowNext"
            onClick={() => handleScroll('next')}
            aria-label="Next projects"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Scrollable / Draggable Projects Track */}
        <div
          className="moreProjectsTrackWrapper"
          ref={sliderTrackRef}
          onScroll={updateScrollButtons}
        >
          <div className="moreProjectsTrack">
            {displayProjects.map((project) => {
              const mainImage = project.images && project.images.length > 0
                ? project.images[0]
                : '/images/smitha-home.jpg';

              return (
                <article
                  key={project.id}
                  className="moreProjectCard"
                  onClick={() => handleCardClick(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(project.id);
                    }
                  }}
                >
                  {/* Image Container with Category Badge */}
                  <div className="moreProjectImgWrapper">
                    <span className="moreProjectBadge">
                      {project.categoryBadge || 'Villas'}
                    </span>

                    <Image
                      src={mainImage}
                      alt={project.title}
                      fill
                      className="moreProjectImg"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                  </div>

                  {/* Info Row: Title on Left, Yellow Circle Arrow on Right */}
                  <div className="moreProjectInfoRow">
                    <h3 className="moreProjectCardTitle">
                      {project.title}
                    </h3>

                    <Link
                      href={`/portfolio-detail?id=${project.id}`}
                      className="moreProjectArrowBtn"
                      aria-label={`View details of ${project.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <RxArrowRight className="moreProjectArrowIcon" size={20} strokeWidth={0.8} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

