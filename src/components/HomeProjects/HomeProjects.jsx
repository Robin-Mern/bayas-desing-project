'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HomeProjects.css';
import { RxArrowRight } from 'react-icons/rx';


const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Smitha - Chavara',
    category: 'Residential',
    image: '/images/smitha-home.jpg',
    alt: 'Modern warm kitchen interior design - Smitha Chavara',
    link: '/portfolio',
    isPrimary: true, // First card contains "Works", "Our Projects", and "View All Projects" inside it as per Figma
  },
  {
    id: 2,
    title: 'Anil Kumar - Karunagappally',
    category: 'Residential',
    image: '/images/anil-home.jpg',
    alt: 'Contemporary curvilinear luxury villa - Anil Kumar Karunagappally',
    link: '#anil-kumar-karunagappally',
  },
  {
    id: 3,
    title: 'Bijesh - Varkala',
    category: 'Residential',
    image: '/images/bijesh-home.jpg',
    alt: 'Contemporary stepped luxury residence - Bijesh Varkala',
    link: '#bijesh-varkala',
  },
];

export default function HomeProjects() {
  return (
    <section className="homeProjectsSection" id="projects" aria-label="Our Projects Showcase">
      <div className="homeProjectsSection-container">
        {/* Sticky Scroll Stacking Cards Container */}
        <div className="cardsStackWrapper">
          {PROJECTS_DATA.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className="stackCardItem"
              style={{
                top: `calc(88px + ${index * 20}px)`,
                zIndex: index + 1,
              }}
            >
              {/* Card Background Image Layer */}
              <div className="stackCardImageWrapper">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority={index === 0}
                  className="stackCardImage"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  quality={90}
                />
              </div>

              {/* Ambient Dark Gradient Vignette for Readability */}
              <div className="stackCardOverlay" />

              {/* Top Section Header INSIDE Card 1 (Exactly as seen in Figma design) */}
              {project.isPrimary && (
                <div className="cardTopHeader">
                  <div className="cardTopHeaderLeft">
                    <span className="worksPillBadge">
                      <span className="worksBadgeDot" />
                      <span>Works</span>
                    </span>
                    <h2 className="cardMainHeading">Our Projects</h2>
                  </div>

                  <span className="viewAllProjectsBtn">
                    <span>View All Projects</span>
                    <span className="btnArrow">   <RxArrowRight size={18} strokeWidth={.6} /></span>
                  </span>
                </div>
              )}

              {/* Card Bottom Metadata: Category & Client Title */}
              <div className="cardBottomContent">
                <span className="categoryTag">{project.category}</span>
                <h3 className="clientTitle">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
