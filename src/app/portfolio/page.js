import PortfolioPage from "@/components/PortfolioPage/PortfolioPage";
import HomeCta from "@/components/HomeCta/HomeCta";
import ServiceBanner from "@/components/ServiceDetails/ServiceBanner";

export const metadata = {
  title: "Portfolio | The Bayas - Architectural & Interior Design",
  description: "Explore our curated portfolio of residential villas, office spaces, bespoke interiors, and commercial architectural projects.",
};

export default function Page() {
  return (
    <main>
        <ServiceBanner title="Our Portfolio" image="/images/arche.jpg" />
      <PortfolioPage />
      <HomeCta />
    </main>
  );
}
