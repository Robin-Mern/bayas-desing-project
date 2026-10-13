import React from "react";
import BlogDetails from "@/components/BlogDetailPage/BlogDetailPage";
import HomeCta from '@/components/HomeCta/HomeCta';
import HomeBlogs from "@/components/HomeBlogs/HomeBlogs";

export const metadata = {
  title: "Blog Details | The Bayas - Architectural & Interior Design",
  description:
    "Explore architecture, interior design, and creative insights from The Bayas Designs.",
};

export default async function BlogDetailContent({ params }) {
  const { id } = await params;

  return [

    <BlogDetails id={id} />,
    <HomeBlogs />,
    <HomeCta />

  ]
}