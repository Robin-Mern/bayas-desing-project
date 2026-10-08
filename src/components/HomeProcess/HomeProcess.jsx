'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HomeProcess.css';

import { RxArrowRight } from 'react-icons/rx';

const PROCESS_STEPS = [
  {
    id: 1,
    number: '1/',
    title: 'Consultation',
    text: 'We discuss your vision, needs, and preferences to understand the goals and direction of your interior design project.',
  },
  {
    id: 2,
    number: '2/',
    title: 'Planning',
    text: 'We formulate detailed spatial layouts, architectural blueprints, timeline schedules, and transparent budget estimations.',
  },
  {
    id: 3,
    number: '3/',
    title: 'Design',
    text: 'Our creative architects develop photorealistic 3D visualisations, mood boards, material palettes, and bespoke custom furnishings.',
  },
  {
    id: 4,
    number: '4/',
    title: 'Execution',
    text: 'Expert on-site project management, precision craftsmanship, and turnkey installation adhering to the highest quality benchmarks.',
  },
];

export default function HomeProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const toggleStep = (id) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  return (
    <section className="homeProcessSection" id="process" aria-label="Our Working Process">
      <div className="container">
        {/* Header */}
        <div className="processHeader">
          <div className="processHeaderLeft">
            <span className="processBadge">Process</span>
            <h2 className="processTitle">Our Working Process</h2>
          </div>

          <Link href="#contact" className="processContactBtn">
            <span>Contact Us</span>
            <span className="btnArrow"><RxArrowRight size={18} strokeWidth={.6} /></span>
          </Link>
        </div>

        {/* 2-Column Content Layout */}
        <div className="processContentGrid">
          {/* Left Column: Interactive Accordion */}
          <div className="processAccordion">
            {PROCESS_STEPS.map((step) => {
              const isOpen = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`accordionItem ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="accordionHeaderBtn"
                    onClick={() => toggleStep(step.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordionTitleWrapper">
                      <span className="stepNumber">{step.number}</span>
                      <span className="stepName">{step.title}</span>
                    </div>

                    <span className="toggleIcon" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div className="accordionBody">
                    <p className="accordionText">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Framed Showcase Interior Image */}
          <div className="processImageContainer">
            <div className="processImageBackdrop" />
            <div className="processImageFrame">
              <Image
                src="/images/work-area.jpg"
                alt="Modern kitchen interior showcasing design execution"
                fill
                className="processImage"
                sizes="(max-width: 991px) 100vw, 550px"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
