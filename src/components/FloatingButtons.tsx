import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // Show after 20 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/254700273841", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+254700273841", "_self");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="rounded-full w-14 h-14 shadow-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground animate-float"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button
              onClick={handleCall}
              size="lg"
              className="rounded-full w-14 h-14 shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground animate-float"
              style={{ animationDelay: "1.5s" }}
              aria-label="Call now"
            >
              <Phone className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
