import React, { Suspense } from 'react';
import TestimonialsPageContent from '@/components/Testimonials/TestimonialPage';
import HomeCta from '@/components/HomeCta/HomeCta';

export const metadata = {
  title: "Testimonials | The Bayas - Architectural & Interior Design",
  description: "Discover what our satisfied clients have to say about their experiences with The Bayas Designs. Read authentic testimonials and reviews from our valued customers.",
};

export default function TestimonialsPage() {
    return (
        <main>
              
            <Suspense fallback={<div className="container py-5 text-center">Loading testimonials...</div>}>
                <TestimonialsPageContent />
            </Suspense>
            <HomeCta />
        </main>
    );
}