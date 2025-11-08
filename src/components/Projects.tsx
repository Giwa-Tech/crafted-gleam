import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bingwa Sokoni Hub",
    description: "A comprehensive digital services platform where you can purchase airtime, data bundles, SMS packages, and make Lipa na M-Pesa till payments seamlessly.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    link: "https://bingwasokoni-gamma.vercel.app/",
    tags: ["React", "M-Pesa", "Digital Services", "E-Commerce"],
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and intuitive user management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://dribbble.com/yourproject2",
    tags: ["Dashboard", "Analytics", "SaaS"],
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    link: "https://github.com/yourproject3",
    tags: ["Mobile", "FinTech", "UI/UX"],
  },
  {
    title: "Social Media Platform",
    description: "Engaging social experience with content creation tools and community features.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    link: "https://behance.net/yourproject4",
    tags: ["Social", "Community", "Design"],
  },
  {
    title: "Fitness Tracking App",
    description: "Comprehensive fitness tracker with workout plans and progress analytics.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    link: "https://dribbble.com/yourproject5",
    tags: ["Health", "Mobile", "Analytics"],
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing design work with smooth animations and transitions.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    link: "https://github.com/yourproject6",
    tags: ["Portfolio", "Web Design", "Creative"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">My Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-500 h-full">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Live <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
