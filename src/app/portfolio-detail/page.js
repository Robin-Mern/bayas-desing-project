import React, { Suspense } from 'react';
import PortfolioDetailContent from '@/components/PortfolioDetail/PortfolioDetailContent';
import ServicePortfolio from '@/components/ServiceDetails/ServicePortfolio';
import MoreProjectsSlider from '@/components/PortfolioDetail/MoreProjectsSlider';
import HomeTestimonials from '@/components/HomeTestimonials/HomeTestimonials';

export const metadata = {
  title: "Project Details | The Bayas - Architectural & Interior Design",
  description: "Explore comprehensive architectural project details, spatial planning, photography, and bespoke design execution by The Bayas Designs.",
};

export default function PortfolioDetailPage() {
  return (
    <main>
      {/* 1. New Content Section to add portfolio contents */}
      <Suspense fallback={<div className="container py-5 text-center">Loading project details...</div>}>
        <PortfolioDetailContent />
      </Suspense>

      {/* 2. Service Portfolio Section */}
      <ServicePortfolio />

      {/* 3. Home Testimonials Section */}
      <HomeTestimonials />

      {/* 4. More Projects Slider like attached image */}
      <Suspense fallback={null}>
        <MoreProjectsSlider />
      </Suspense>

      
    </main>
  );
}

