'use client';

import React, { useState, useMemo, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from './portfolioData';
import PortfolioCard from './PortfolioCard';
import { FiX, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { RxArrowRight } from 'react-icons/rx';
import './PortfolioPage.css';

const INITIAL_ITEMS_COUNT = 9;
const ITEMS_PER_LOAD = 6;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isFilterChanging, setIsFilterChanging] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [, startTransition] = useTransition();

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((proj) => proj.category === activeCategory);
  }, [activeCategory]);

  // Display only visible count
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = visibleCount < filteredProjects.length;

  // Handle Tab Switch with smooth transition
  const handleCategoryChange = (catId) => {
    if (catId === activeCategory) return;
    setIsFilterChanging(true);
    startTransition(() => {
      setActiveCategory(catId);
      setVisibleCount(INITIAL_ITEMS_COUNT);
      setTimeout(() => {
        setIsFilterChanging(false);
      }, 180);
    });
  };

  // Handle Load More with smooth animated loading
  const handleLoadMore = () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      setIsLoadingMore(false);
    }, 400);
  };

  return (
    <section className="portfolioPageSection" aria-label="Our Portfolio Showcase">
      <div className="container">
        {/* Top Category Filter Tabs */}
        <nav className="portfolioFilterNav" aria-label="Portfolio Category Filter">
          <div className="portfolioFilterTabs">
            {PORTFOLIO_CATEGORIES.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`filterTabBtn ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(tab.id)}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Projects Flex Grid Layout */}
        <div
          className={`portfolioFlexGrid ${isFilterChanging ? 'filtering' : ''}`}
          role="region"
          aria-live="polite"
        >
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.id}-${activeCategory}`}
              className="portfolioCardCol"
              style={{
                animationDelay: `${(index % ITEMS_PER_LOAD) * 60}ms`,
              }}
            >
              <PortfolioCard
                project={project}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {visibleProjects.length === 0 && (
          <div className="portfolioEmptyState">
            <p>No projects found in this category.</p>
            <button
              type="button"
              className="filterTabBtn active"
              onClick={() => handleCategoryChange('all')}
            >
              Show all projects
            </button>
          </div>
        )}

        {/* Load More Button with Smooth State */}
        {hasMore && (
          <div className="loadMoreWrapper">
            <button
              type="button"
              className={`loadMoreBtn ${isLoadingMore ? 'loading' : ''}`}
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              aria-label="Load more projects"
            >
              {isLoadingMore ? (
                <>
                  <span className="loadMoreSpinner" aria-hidden="true" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Load More</span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Project Details Quick Modal */}
      {selectedProject && (
        <div
          className="portfolioModalBackdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="portfolioModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modalCloseBtn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <div className="modalImageContainer">
              <Image
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                fill
                className="modalMainImage"
                quality={90}
              />
              <span className="portfolioBadge modalBadge">
                {selectedProject.categoryBadge}
              </span>
            </div>

            <div className="modalBody">
              <div className="modalHeaderInfo">
                <h3 className="modalTitle">{selectedProject.title}</h3>
                <p className="modalLocation">
                  <FiMapPin className="locationIcon" />
                  {selectedProject.location}
                </p>
              </div>

              <div className="modalHighlights">
                <div className="highlightItem">
                  <FiCheckCircle className="checkIcon" />
                  <span>Architectural Master Planning & Execution</span>
                </div>
                <div className="highlightItem">
                  <FiCheckCircle className="checkIcon" />
                  <span>Bespoke Handcrafted Interior Joinery</span>
                </div>
              </div>

              <div className="modalGalleryRow">
                {selectedProject.images.map((img, i) => (
                  <div key={i} className="galleryThumbWrapper">
                    <Image
                      src={img}
                      alt={`Detail ${i + 1}`}
                      fill
                      className="galleryThumbImg"
                    />
                  </div>
                ))}
              </div>

              <div className="modalFooterAction">
                <Link
                  href="/#contact"
                  className="modalInquireBtn"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Inquire About This Design</span>
                  <RxArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
