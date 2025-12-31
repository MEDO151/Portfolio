import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
} from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scale with modern architecture.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive charts, custom reporting, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["Next.js", "D3.js", "Tailwind", "Supabase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-converting landing page with smooth animations, optimized performance, and A/B testing integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates, drag-and-drop, and team workspaces.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tech: ["React", "Redux", "Firebase", "Material UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Projects that showcase
            <br />
            <span className="text-muted-foreground">my expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I've worked on, ranging from complex web
            applications to beautifully crafted landing pages.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-8"
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <ScaleOnHover>
                <article className="group rounded-2xl bg-card border border-border/50 overflow-hidden card-gradient border-gradient hover:border-primary/30 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                    {/* Quick Links Overlay */}
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </motion.div>

                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" size={18} />
              View All Projects on GitHub
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
