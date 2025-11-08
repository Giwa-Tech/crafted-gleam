import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Phone, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Create a sample CV download - in production, replace with actual CV
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual CV URL
    link.download = "CV.pdf";
    link.click();
  };

  const handleScheduleCall = () => {
    // In production, integrate with Calendly or similar
    window.open("tel:+254700273841", "_self");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <span className="text-primary font-medium text-lg">Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow-pulse">
              Creative Designer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            A Passionate UI/UX Designer & Creative Developer crafting beautiful digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60"
            >
              View My Work
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
            >
              Hire Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleScheduleCall}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            className="mt-20"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
