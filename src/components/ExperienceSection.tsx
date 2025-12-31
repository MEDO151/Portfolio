import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import {
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  Rocket,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intensive Training Program (ITP)",
    company: "ITI, Damanhur Branch",
    location: "Damanhur, Egypt",
    period: "July 2025 – Dec 2025",
    description:
      "Frontend Cross Platform Mobile Application Track. An intensive program specializing in modern web and mobile application development, focusing on cross-platform frameworks and advanced frontend architectures.",
    highlights: [
      "Cross-Platform Mobile Dev",
      "Frontend Architecture",
      "Enterprise Application Track",
    ],
    type: "education",
    icon: Rocket,
  },
  {
    role: "Front-End Diploma",
    company: "Route Academy",
    location: "Cairo, Egypt",
    period: "Sep 2023 – Apr 2024",
    description:
      "Completed a comprehensive course covering HTML, CSS, JavaScript, and Angular. Covered advanced topics including Bootstrap, OOP, API integration, TypeScript, and version control.",
    highlights: [
      "Angular & TypeScript",
      "Git & GitHub Workflow",
      "Modern CSS (Sass, Bootstrap)",
    ],
    type: "education",
    icon: GraduationCap,
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Worldwide",
    period: "2025 - Present",
    description:
      "Working with clients globally to deliver high-quality web solutions. Specializing in React development, performance optimization, and modern UI/UX.",
    highlights: ["100% client satisfaction", "Long-term partnerships"],
    type: "freelance",
    icon: Briefcase,
  },
  {
    role: "Computer Science",
    company: "Damanhour University",
    location: "Damanhour, Egypt",
    period: "2020 - 2024",
    description:
      "Bachelor's Degree in Computer Science, focusing on algorithms, data structures, and software engineering. Completed a high-impact graduation project.",
    highlights: ["Graduation Project: MidCare (A+)", "Degree: 2.9 GPA"],
    type: "education",
    icon: GraduationCap,
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
          >
            <Briefcase className="w-7 h-7 text-primary" />
          </motion.div>
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            My professional journey
            <br />
            <span className="text-muted-foreground">and career highlights</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="relative" staggerDelay={0.15}>
            {/* Timeline Line with gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <div
                  className={`relative flex flex-col md:flex-row gap-24 mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div className="absolute left-4 md:left-[50%] w-10 h-10 -translate-x-[50%] mt-8 z-10 hover:scale-125 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-background border-4 border-primary/20 flex items-center justify-center shadow-lg shadow-primary/30">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    {/* Pulse animation for current role */}
                    {index === 0 && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      className={`group mb-6 p-6 md:p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500`}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 20px 40px -15px hsl(var(--primary) / 0.15)",
                      }}
                    >
                      {/* Period Badge */}
                      <div
                        className={`flex items-center gap-2 mb-4 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        <Badge
                          variant="outline"
                          className="gap-1.5 px-3 py-1 border-primary/30 text-primary bg-primary/5"
                        >
                          <Calendar size={12} />
                          {exp.period}
                        </Badge>
                        {exp.type === "freelance" && (
                          <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                            Ongoing
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      <div
                        className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 flex-wrap ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                          <exp.icon size={14} className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                          <MapPin size={14} className="text-primary" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {exp.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="secondary"
                            className="text-xs font-medium bg-muted/70 hover:bg-muted transition-colors"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
