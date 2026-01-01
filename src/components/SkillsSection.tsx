import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Libraries & Tools",
    skills: [
      { name: "Framer Motion", level: 88 },
      { name: "Redux / Zustand", level: 85 },
      { name: "React Query", level: 87 },
      { name: "Webpack / Vite", level: 80 },
      { name: "Shadcn UI", level: 85 },
    ],
  },
  {
    title: "Design & Other",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Git / GitHub", level: 90 },
      { name: "REST APIs / GraphQL", level: 88 },
      { name: "Node.js", level: 60 },
      { name: "CI/CD Pipelines", level: 78 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-gold-light"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Technologies I work with
            <br />
            <span className="text-muted-foreground">and love using</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Over the years, I've gained proficiency in a wide range of tools and
            technologies that help me build outstanding web experiences.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {skillCategories.map((category, categoryIndex) => (
            <StaggerItem key={category.title}>
              <div className="p-8 rounded-2xl bg-card border border-border/50 card-gradient border-gradient h-full">
                <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
