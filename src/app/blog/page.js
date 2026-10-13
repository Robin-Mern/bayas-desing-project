import React, { Suspense } from 'react';
import BlogPageContent from '@/components/BlogPage/BlogPage';

export const metadata = {
  title: "Our Blogs | The Bayas - Architectural & Interior Design",
  description: "Explore our blog for the latest insights, trends, and tips in architecture and interior design. Stay inspired with expert advice and creative ideas from The Bayas Designs.",
};

export default function BlogListPage() {
    return (
        <main>
            <Suspense fallback={<div className="container py-5 text-center">Loading blogs...</div>}>
                <BlogPageContent />
            </Suspense>
        </main>
    );
}