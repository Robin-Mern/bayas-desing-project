import AboutPage from "@/components/AboutPage/AboutPage";
import HomeProcess from "@/components/HomeProcess/HomeProcess";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeBlogs from "@/components/HomeBlogs/HomeBlogs";
import HomeCta from "@/components/HomeCta/HomeCta";

export const metadata = {
  title: "About Us | The Bayas - Architectural & Interior Design",
  description: "Learn about The Bayas story, craftsmanship values, and dedication to premium interior and architectural design.",
};

export default function Page() {
  return (
    <main>
      <AboutPage />
      <HomeProcess />
      <HomeTestimonials />
      <HomeBlogs />
      <HomeCta />
    </main>
  );
}
