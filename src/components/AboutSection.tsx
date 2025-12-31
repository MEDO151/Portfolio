import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { GraduationCap, Building2, MapPin } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    role: "Bachelor's Degree in Information Technology",
    organization: "Damanhur University (2020 - 2024)",
    details: 'Graduation Project: "MidCare" - Grade: A+',
  },
  {
    icon: Building2,
    title: "Current Position",
    role: "Frontend Developer Intern",
    organization: "Information Technology Institute (ITI)",
    details: "4-Month Intensive Code Camps (July 2025 - December 2025)",
  },
  {
    icon: MapPin,
    title: "Location",
    role: "Alexandria, Egypt",
    organization: "Open To Relocation",
    details: "",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 justify-center items-center gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
              <p>
                Graduate of Computer Science, completed the Information
                Technology Institute (ITI) program, holder of a Route diploma,
                with one year of hands-on freelance experience in frontend
                projects. I build modern web applications using React and
                TypeScript, applying strong knowledge of HTML, CSS, JavaScript
                (JS), and SASS, along with practical experience using Bootstrap
                and Tailwind CSS to create responsive, accessible user
                interfaces focused on performance and user experience.
              </p>
              <p>
                I work with responsive web design principles and API integration
                and handling, and I use version control with Git in my
                development workflow. I also have basic UI/UX experience
                supported by using Figma and an understanding of core web design
                principles. My background includes applying object-oriented
                programming (OOP) concepts where suitable, helping structure
                code in a clean and maintainable way.
              </p>
              <p>
                My interest started from turning ideas into interactive products
                and grew through real freelance projects, continuous learning,
                and staying up to date with modern web technologies.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.1}>
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="p-6 rounded-2xl bg-card border border-border/50 card-gradient border-gradient group hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                    {item.title}
                  </h3>
                  <div className="space-y-1.5">
                    <p className="text-sm font-medium text-foreground">
                      {item.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.organization}
                    </p>
                    {item.details && (
                      <p className="text-xs text-muted-foreground pt-1 border-t border-border/50 mt-2">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
