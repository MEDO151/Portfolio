import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive and visually stunning interfaces",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and seamless user experiences",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Passionate about crafting
            <br />
            <span className="text-muted-foreground">
              exceptional web experiences
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Graduate of Computer Science, completed the Information
                Technology Institute (ITI) program, holder of a Route diploma,
                with one year of hands-on freelance experience in frontend
                projects. I build modern web applications using React and
                TypeScript, with solid experience in Bootstrap and Tailwind CSS,
                focusing on responsive layouts, performance, and user
                experience.
              </p>
              <p>
                I also have basic UI/UX experience that helps me design clear,
                usable interfaces before developing them.
              </p>
              <p>
                My interest started from turning ideas into interactive products
                and grew through real freelance projects, continuous learning,
                and staying up to date with modern web technologies.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-6"
            staggerDelay={0.1}
          >
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient border-gradient group hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
