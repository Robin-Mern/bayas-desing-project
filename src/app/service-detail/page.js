import ServiceBanner from "@/components/ServiceDetails/ServiceBanner";
import ServiceDetailsContent from "@/components/ServiceDetails/ServiceDetailsContent";
import ServicePortfolio from "@/components/ServiceDetails/ServicePortfolio";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeBlogs from "@/components/HomeBlogs/HomeBlogs";
import HomeCta from "@/components/HomeCta/HomeCta";

export const metadata = {
  title: "Architecture Design | The Bayas - Service Details",
  description: "Explore our architecture design services, bespoke planning, and contemporary architectural solutions.",
};

export default function ServiceDetailPage() {
  return (
    <main>
      <ServiceBanner title="Architecture Design" image="/images/arche.jpg" />
      <ServiceDetailsContent />
      <ServicePortfolio />
      <HomeTestimonials />
      <HomeBlogs />
      <HomeCta />
    </main>
  );
}
