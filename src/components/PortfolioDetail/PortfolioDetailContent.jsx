'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PORTFOLIO_PROJECTS } from '@/components/PortfolioPage/portfolioData';
import { FiMapPin, FiCalendar, FiMaximize2, FiUser, FiLayers, FiCheck } from 'react-icons/fi';
import { RxArrowLeft } from 'react-icons/rx';
import './PortfolioDetailContent.css';

export default function PortfolioDetailContent() {
  const searchParams = useSearchParams();
  const projectIdParam = searchParams.get('id');

  // Find selected project or default to project #1
  const project = React.useMemo(() => {
    if (!projectIdParam) return PORTFOLIO_PROJECTS[0];
    const found = PORTFOLIO_PROJECTS.find((p) => String(p.id) === String(projectIdParam));
    return found || PORTFOLIO_PROJECTS[0];
  }, [projectIdParam]);

  const images = project.images && project.images.length > 0
    ? project.images
    : ['/images/smitha-home.jpg', '/images/anil-home.jpg', '/images/bijesh-home.jpg'];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Specifications metadata
  const projectMeta = [
    { label: 'Location', value: project.location || 'Chavara, Kollam, Kerala', icon: FiMapPin },
    { label: 'Client', value: project.title.startsWith('DR.') ? 'Dr. Sreechith & Family' : 'Private Client', icon: FiUser },
    { label: 'Built Area', value: '4,850 Sq. Ft.', icon: FiMaximize2 },
    { label: 'Year of Completion', value: '2024', icon: FiCalendar },
    { label: 'Category', value: project.categoryBadge || 'Villas', icon: FiLayers },
  ];

  const highlights = [
    'Passive climatic architecture designed for natural coastal breeze ventilation',
    'Double-height formal living lounge with custom acoustic timber ceilings',
    'Seamless connection between interior pavilions and central landscaped courtyards',
    'Bespoke solid teakwood furniture and customized ambient architectural lighting',
    'Eco-friendly thermal insulated roof slabs with integrated solar harvesting',
  ];

  return (
    <div className="portfolioDetailContentWrapper">
      {/* 1. Top Breadcrumb & Title Section */}
      <section className="projectHeaderSection">
        <div className="container">
          
          <div className="project-breadcrumbs">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li>{project.title}</li>
            </ul>
          </div>

          <div className="projectTitleBlock">
            {/* <span className="projectCategoryBadge">
              {project.categoryBadge || 'Villas'}
            </span> */}
            <h1 className="projectTitle">{project.title}</h1>
            {/* <p className="projectLocation">
              <FiMapPin className="pinIcon" />
              <span>{project.location || 'Chavara, Kollam'}</span>
            </p> */}
          </div>

          
        </div>
      </section>

      {/* 2. Interactive Media Hero & Thumbnails */}
      <section className="projectHeroMediaSection">
        <div className="container">
          <div className="projectFeaturedImageFrame">
            <Image
              src={images[activeImageIndex] || images[0]}
              alt={`${project.title} featured view ${activeImageIndex + 1}`}
              fill
              priority
              className="projectFeaturedImg"
              sizes="(max-width: 1200px) 100vw, 1240px"
            />
          </div>

          
        </div>
      </section>

      
      {/* <section className="projectMetaSection">
        <div className="container">
          <div className="projectMetaGrid">
            {projectMeta.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="projectMetaCard">
                  <div className="metaIconWrap">
                    <IconComp size={20} />
                  </div>
                  <div className="metaText">
                    <span className="metaLabel">{item.label}</span>
                    <strong className="metaValue">{item.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* 4. Architectural Narrative & Scope Story */}
      <section className="projectStorySection">
        <div className="container">
          <div className="projectStoryGrid">

            
            <div className="storyRightCol">
              <div className="highlightsBox">
                <h3 className="highlightsTitle">Architectural Highlights</h3>
                <ul className="highlightsList">
                  {highlights.map((h, i) => (
                    <li key={i} className="highlightListItem">
                      <div className="checkIconWrap">
                        <FiCheck size={16} />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            

            <div className="storyLeftCol">
              <span className="storySectionSub">Design Concept & Vision</span>
              <h2 className="storySectionHeading">
                A Tropical Sanctuary Rooted in Modernist Elegance
              </h2>
              <div className="storyParagraphs">
                <p>
                  Commissioned by Dr. Sreechith, this bespoke villa in Chavara stands as an ode to
                  Kerala’s vernacular heritage reimagined through contemporary clean lines and high-volume
                  spaces. Every contour of the residence was planned around the natural light trajectory
                  and wind circulation, ensuring that each room remains naturally illuminated and ventilated.
                </p>
                <p>
                  The interior design blends hand-selected teakwood, warm artisanal stone, and sleek
                  matte finishes. A seamless transition connects the living and dining spaces to an
                  internal tropical courtyard, bringing nature directly into everyday living while
                  preserving personal family privacy.
                </p>
              </div>
            </div>

            

          </div>
        </div>
      </section>

      
      {/* <section className="projectGalleryShowcaseSection">
        <div className="container">
          <div className="gallerySectionHeader">
            <span className="gallerySub">Spatial Showcase</span>
            <h2 className="galleryHeading">Spaces & Detailing</h2>
          </div>

          <div className="projectGalleryGrid">
            {images.slice(0, 4).map((img, i) => {
              const captions = [
                'Exterior Elevation & Tropical Landscape',
                'Formal Living Lounge with Wooden Detailing',
                'Dining Pavilion & Open Kitchen Concept',
                'Master Bedroom with Private Balcony View',
              ];

              return (
                <div key={i} className="galleryGridItem">
                  <div className="galleryImgWrapper">
                    <Image
                      src={img}
                      alt={captions[i] || `Project view ${i + 1}`}
                      fill
                      className="galleryImg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="galleryCaptionBar">
                      <span>{captions[i] || `Perspective ${i + 1}`}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

    </div>
  );
}

