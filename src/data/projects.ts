import Planora from "@/assets/Planora.png";
import Planora1 from "@/assets/Planora1.png";
import Planora2 from "@/assets/Planora2.png";
import ECommerse from "@/assets/E-commerce.png";
import ECommerse1 from "@/assets/E-commerce1.png";
import ECommerse2 from "@/assets/E-commerce2.png";
import Maha from "@/assets/Maha.png";
import Maha1 from "@/assets/Maha1.png";
import Maha2 from "@/assets/Maha2.png";
import Ashraf from "@/assets/ashraf.png";
import Ashraf1 from "@/assets/ashraf1.png";
import Ashraf2 from "@/assets/ashraf2.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: string;
  category: string;
  year: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "planora",
    title: "Planora - Event Management Web App",
    description:
      "A comprehensive event management platform enabling users to create, manage, and promote events with secure authentication, ticketing, online payments, and QR-based check-in.",
    longDescription:
      "Planora is a comprehensive event management platform designed to streamline the entire event lifecycle. It enables users to create, manage, and promote events with ease, featuring secure authentication, ticketing systems, and online payment processing. The platform also includes QR-based check-in for seamless attendee management.\n\nKey features include a responsive dashboard for organizers, real-time updates powered by Supabase, and streamlined workflows for handling attendees, tickets, and event analytics. The platform provides multiple role-based dashboards:\n- An **Admin Dashboard** allows complete control over the system, monitoring users, events, payments, and analytics.\n- A **Host Dashboard** enables event organizers to manage events, services, and track ticket sales.\n- A **User Dashboard** allows attendees to review bookings and tickets.\n- **Payment Integration**: Secure online payment processing for seamless ticket purchases.\n\nThe system also integrates an AI chatbot to assist users and supports real-time messaging between users and hosts for instant communication.",
    image: Planora,
    gallery: [Planora, Planora1, Planora2],
    tech: ["ReactJS", "TailwindCSS", "JavaScript","i18next", "Framer Motion","Shadcn UI", "Redux Toolkit", "Supabase", "Stripe"],
    liveUrl: "https://planora-events.netlify.app",
    githubUrl: "https://github.com/HexaDevs6/planora",
    featured: "Graduation Project (ITI)",
    category: "Web Application",
    year: "2025",
    features: [
      "Role-Based Dashboards (Admin, Host, User)",
      "Secure Ticketing & Payment Processing",
      "Real-time Updates & Messaging",
      "QR Code Check-in System",
      "AI Chatbot Assistant",
      "Comprehensive Analytics & Monitoring",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Angular Web App",
    description:
      "A fully dynamic e-commerce platform built with Angular, featuring a modern and responsive user interface connected to a Node.js backend. The application supports product browsing, advanced search and filtering, adding items to the shopping cart and favorites list, and completing real online payments through secure payment gateways.",
    longDescription:
      "FreshCart is a comprehensive e-commerce solution designed to provide a seamless shopping experience. Built with **Angular**, it features a responsive and modern interface that adapts to all devices.\n\nKey capabilities include:\n- **Dynamic Product Browsing**: Interactive category sliders and advanced filtering by brand and category allow users to find products effortlessly.\n- **Shopping Features**: A persistent shopping cart with real-time badge updates and a wishlist for saving favorite items.\n- **Secure Checkout**: Integrated payment processing supports Visa and MasterCard for secure transactions.\n- **User Accounts**: Full authentication system for managing profiles, order history, and saved preferences.\n\nThe platform leverages a modular architecture with **Bootstrap** for styling and connects to a robust API for real-time inventory and data management.",
    image: ECommerse,
    gallery: [ECommerse, ECommerse1, ECommerse2],
    tech: ["Angular", "TypeScript", "Bootstrap", "Node.js", "Payment Gateway"],
    liveUrl: "https://e-commerce-puce-five.vercel.app",
    githubUrl: "https://github.com/MEDO151/E-commerce",
    featured: "Graduation Project (Route)",
    category: "Web Application",
    year: "2024",
    features: [
      "Dynamic Product Sliders & Categories",
      "Advanced Search & Filtering",
      "Persistent Cart & Wishlist",
      "Secure Payment Integration",
      "User Authentication (Sign Up/In)",
      "Responsive Bootstrap UI",
    ],
  },
  {
    id: "saas-Booking-App",
    title: "Maha - Booking Web App",
    description:
      "A specialized coaching and therapy booking platform featuring secure payments, session scheduling, and a comprehensive admin dashboard for managing clients and content.",
    longDescription:
      "Maha Aldafer's coaching platform is a sophisticated web application designed to facilitate mental health and wellness consultations. It streamlines the booking process with a user-friendly interface and robust backend management.\n\nKey features include:\n- **Advanced Booking System**: Clients can easily schedule sessions, selecting from various therapy types and available time slots.\n- **Secure Payments**: fully integrated with **Moyasar** to support credit cards and **Apple Pay** for seamless transactions.\n- **Admin Dashboard**: A comprehensive control panel allowing administrators to view all bookings with options to **confirm, cancel, or reschedule** sessions. It also provides a full view of registered users and content management capabilities.\n- **RTL Design**: Fully optimized Right-to-Left interface to support Arabic content natively.\n- **Zoom Integration**: Automated generation of meeting links for booked virtual sessions.\n\nThe application is built for performance and accessibility, ensuring a smooth experience for both clients and administrators.",
    image: Maha,
    gallery: [Maha, Maha1, Maha2],
    tech: ["React","TypeScript", "Vite", "TailwindCSS", "Shadcn UI", "Moyasar", "Supabase"],
    liveUrl: "https://maha-ad.vercel.app",
    githubUrl: "https://github.com/MEDO151/sessions_saas-maha",
    featured: "Freelance Project",
    category: "Web Application",
    year: "2025",
    features: [
      "Online Booking & Scheduling",
      "Moyasar Payment (Apple Pay)",
      "Admin Panel (Bookings, Users)",
      "Booking Management (Reschedule/Cancel)",
      "Content Management System",
      "Responsive RTL Layout",
    ],
  },
  {
    id: "Ashraf Al-Muhtaseb-Portfolio-CMS-Web-App",
    title: "Ashraf Al-Muhtaseb - Portfolio & CMS",
    description:
      "A dynamic portfolio with a full CMS, allowing complete control over content, articles, and SEO settings via a secure admin panel.",
    longDescription:
      "This project is a highly dynamic portfolio website built with a custom Content Management System (CMS). It empowers the owner to modify every aspect of the site without touching code.\n\n**Admin Panel Capabilities:**\n- **Content Management**: Edit text and images for all sections (Hero, About, Contact).\n- **Blog Engine**: Full CRUD operations for articles/blog posts.\n- **SEO Control**: A dedicated SEO manager to update meta titles, descriptions, keywords, and favicons in real-time.\n- **Multi-language**: Seamless support for both **English and Arabic** content.\n- **Security**: Protected admin route with secure authentication.\n\nThe frontend delivers a high-performance experience with **React** and **Tailwind CSS**, supported by a robust **Spring Boot** backend deployed on **Railway** with domain management via **Namecheap** and email services by **Resend**.",
    image: Ashraf,
    gallery: [Ashraf, Ashraf1, Ashraf2],
    tech: ["React", "Spring Boot", "Tailwind CSS","i18next", "Shadcn UI", "Railway", "Resend", "Namecheap"],
    liveUrl: "https://www.idata.center",
    githubUrl: "https://github.com/MEDO151/ashraf_portfolio",
    // featured property removed or undefined implies not featured if strict check, or we can set it
    featured: "Freelance Project",
    category: "CMS Application",
    year: "2024",
    features: [
      "Full Content Management System (CMS)",
      "Multi-language Support (English/Arabic)",
      "Dynamic SEO Management (Meta Tags)",
      "Article/Blog CRUD Operations",
      "Secure Admin Panel (Spring Boot security)",
      "Email Integration (Resend)",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
