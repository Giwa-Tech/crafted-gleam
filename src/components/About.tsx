import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Figma, Palette, Zap } from "lucide-react";

const skills = [
  { name: "Figma", level: 95, icon: Figma, color: "from-primary to-accent" },
  { name: "Adobe XD", level: 90, icon: Palette, color: "from-accent to-secondary" },
  { name: "React", level: 88, icon: Code2, color: "from-secondary to-primary" },
  { name: "Framer Motion", level: 85, icon: Zap, color: "from-primary to-secondary" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold mb-2 block">Get to know me</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Creative Problem Solver</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate UI/UX designer and creative developer with over 5 years of experience 
              crafting beautiful, user-centered digital experiences. My design philosophy centers on 
              simplicity, elegance, and functionality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I believe great design is invisible – it just works. By combining aesthetic sensibility 
              with technical expertise, I create solutions that not only look stunning but also solve 
              real problems for real people.
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Let's Collaborate
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                      <skill.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
