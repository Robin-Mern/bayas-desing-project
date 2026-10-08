import HomeBannerSlider from "@/components/HomeBannerSlider/HomeBannerSlider";
import AboutBayas from "@/components/AboutBayas/AboutBayas";
import HomeServices from "@/components/HomeServices/HomeServices";
import HomeProjects from "@/components/HomeProjects/HomeProjects";
import HomeDealIn from "@/components/HomeDealIn/HomeDealIn";
import HomeProcess from "@/components/HomeProcess/HomeProcess";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeBlogs from "@/components/HomeBlogs/HomeBlogs";
import HomeCta from "@/components/HomeCta/HomeCta";

export default function Home() {
  return (
    <main>
      <HomeBannerSlider />
      <AboutBayas />
      <HomeServices />
      <HomeProjects />
      <HomeDealIn />
      <HomeProcess />
      <HomeTestimonials />
      <HomeBlogs />
      <HomeCta />
    </main>
  );
}

