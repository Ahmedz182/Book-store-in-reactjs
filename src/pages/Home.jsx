import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
import Highlight from "../components/Highlight.jsx";
import BookSection from "./BookSection.jsx";
import Title from "../components/Title.jsx";
import BlogSection from "./BlogSection.jsx";
import Highlights from "../pages/Highlights.jsx";
import QuoteSection from "./QuoteSection.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Highlight />
      <QuoteSection />
      <Title title="Recent Books" />
      <div className="bg-lightblue">
        <BookSection />
      </div>
      <Title title="HIGHLIGHTS" />
      <Highlights />
      <Title title="RECENT Blogs" />
      <div className="bg-lightblue">
        <BlogSection />
      </div>
    </>
  );
};

export default Home;
