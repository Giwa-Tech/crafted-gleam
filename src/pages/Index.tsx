import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <PageLoader onLoadComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
          <FloatingButtons />
        </>
      )}
    </div>
  );
};

export default Index;
