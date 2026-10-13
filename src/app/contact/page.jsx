import React, { Suspense } from 'react';
import ContactPage from '@/components/ContactPage/ContactPage';
import HomeCta from '@/components/HomeCta/HomeCta';

export const metadata = {
  title: "Contact Us | The Bayas - Architectural & Interior Design",
  description: "Get in touch with The Bayas Designs for inquiries, consultations, or project collaborations. Reach out to our team of experts in architecture and interior design.",
};

export default function ContactPageContent() {
  return (
    <main>
      <Suspense fallback={<div className="container py-5 text-center">Loading contact page...</div>}>
        <ContactPage />
      </Suspense>
      <HomeCta />
    </main>
  );
}
