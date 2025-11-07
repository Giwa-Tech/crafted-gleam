import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Twitter, Dribbble } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Creative Designer
            </h3>
            <p className="text-muted-foreground">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all"
                aria-label="Dribbble"
              >
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Creative Designer. All rights reserved.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
