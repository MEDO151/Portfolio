import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectById, projects } from "@/data/projects";
import { useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} variant="default">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 sm:pt-28 sm:pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-8 gap-2 hover:bg-primary/10"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Button>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="text-primary border-primary/30"
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  {project.title}
                </h1>

                <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.longDescription.split("\n").map((line, index) => {
                    if (!line.trim()) return <br key={index} />;

                    const isBullet = line.trim().startsWith("-");
                    const content = isBullet
                      ? line.trim().substring(1).trim()
                      : line;

                    const parts = content.split("**");
                    const formattedContent = parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <strong
                          key={i}
                          className="font-semibold text-foreground"
                        >
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    );

                    return (
                      <p
                        key={index}
                        className={`mb-2 ${
                          isBullet
                            ? 'pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-primary'
                            : ""
                        }`}
                      >
                        {formattedContent}
                      </p>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="lg" className="gap-2" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                        View Source
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={16} className="text-primary" />
                    <h3 className="font-semibold">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 text-sm rounded-full bg-muted/70 text-foreground border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
                  <motion.img
                    key={activeImage}
                    src={project.gallery[activeImage]}
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    className="w-full aspect-video object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Image Navigation */}
                  {project.gallery.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveImage((prev) =>
                            prev === 0 ? project.gallery.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setActiveImage((prev) =>
                            prev === project.gallery.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {project.gallery.length > 1 && (
                  <div className="flex gap-3">
                    {project.gallery.map((img, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`relative flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                          activeImage === index
                            ? "border-primary"
                            : "border-border/50 hover:border-primary/50"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {activeImage === index && (
                          <motion.div
                            layoutId="activeThumb"
                            className="absolute inset-0 bg-primary/10"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-center">
                Key Features
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="py-12 sm:py-16 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {prevProject ? (
                <motion.div whileHover={{ x: -5 }}>
                  <Link
                    to={`/project/${prevProject.id}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ChevronLeft className="group-hover:text-primary transition-colors" />
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide mb-1">
                        Previous
                      </p>
                      <p className="font-medium text-foreground">
                        {prevProject.title}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}

              <Button
                variant="outline"
                onClick={() => navigate("/#projects")}
                className="gap-2"
              >
                <ArrowLeft size={16} />
                All Projects
              </Button>

              {nextProject ? (
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to={`/project/${nextProject.id}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wide mb-1">
                        Next
                      </p>
                      <p className="font-medium text-foreground">
                        {nextProject.title}
                      </p>
                    </div>
                    <ChevronRight className="group-hover:text-primary transition-colors" />
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default ProjectDetails;
