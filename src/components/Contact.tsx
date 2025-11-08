import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCallMe = () => {
    window.open("tel:+254700273841", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/254700273841", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Fill out the form or reach out 
              through any of the contact methods below.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="glass p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">hello@designer.com</p>
                </div>
              </Card>

              <Card className="glass p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">+254 7XX XXX XXX</p>
                </div>
              </Card>

              <Card className="glass p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleCallMe}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    className="bg-background/50 min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
