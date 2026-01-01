import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  navigation: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ],
  resources: [
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
};
import Logo from "@/assets/Logo.png";
const socialLinks = [
  { href: "https://github.com/MEDO151", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/mohamed-alkafrawy-58892529b",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:mohamedxalkafrawy@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-muted/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a
              href="#home"
              className="inline-block text-3xl font-heading font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={Logo} alt="main-logo" className="w-16 h-16" />
            </motion.a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Frontend Developer crafting exceptional digital experiences with
              modern technologies and attention to detail.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Mohamed Alkafrawy. Crafted with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            and lots of coffee.
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp size={16} />
            </motion.span>
          </Button>
        </div>
      </div>
    </footer>
  );
};
