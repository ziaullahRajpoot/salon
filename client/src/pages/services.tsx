import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = ["All", "Massage", "Facial", "Nails", "Wellness"];

const allServices = [
  {
    category: "Massage",
    title: "Swedish Relaxation Massage",
    description:
      "A gentle full-body massage designed to relieve stress, improve circulation, and help your body completely relax in the comfort of your home.",
    image: "/images/spa1.jpg",
  },
  {
    category: "Massage",
    title: "Hot Stone Therapy",
    description:
      "Heated volcanic stones melt away muscle tension and relieve chronic pain, leaving you deeply relaxed and restored.",
    image: "/images/spa3.jpg",
  },
  {
    category: "Massage",
    title: "Wood Therapy (Maderotherapy)",
    description:
      "Ancient Colombian technique using wooden tools to contour the body, reduce cellulite, and boost circulation.",
    image: "/images/spa10.jpg",
  },
  {
    category: "Massage",
    title: "Cupping Therapy",
    description:
      "Traditional cupping technique to relieve muscle stiffness, improve blood flow, and detox the body.",
    image: "/images/spa2.jpg",
  },
  {
    category: "Facial",
    title: "Hydrating Facial Treatment",
    description:
      "A rejuvenating facial using premium Dr. Renaud products to deeply cleanse, hydrate, and refresh your skin.",
    image: "/images/spa4.jpg",
  },
  {
    category: "Facial",
    title: "Advanced Facial Technology",
    description:
      "Cutting-edge facial tools combined with expert technique for visible skin tightening and glow results.",
    image: "/images/spa5.jpg",
  },
  {
    category: "Nails",
    title: "Gel Nail Treatment",
    description:
      "Long-lasting gel manicure with a wide colour selection — done professionally at your home.",
    image: "/images/spa6.jpg",
  },
  {
    category: "Nails",
    title: "Full Nail Care",
    description:
      "Comprehensive nail treatment including shaping, cuticle care, and polish with premium Lola Lee products.",
    image: "/images/spa9.jpg",
  },
  {
    category: "Wellness",
    title: "Signature Home Spa Experience",
    description:
      "Our full luxury home spa package combining massage, facial, and beauty treatments for a complete wellness day.",
    image: "/images/spa8.jpg",
  },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? allServices
      : allServices.filter((s) => s.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Services | Well Done Beauty Salon Dubai</title>
        <meta
          name="description"
          content="Explore our full range of home spa services in Dubai — massage, facials, nails, and more. Available daily 10am to midnight."
        />
        <link rel="canonical" href="https://welldonebeautysalon.com/services" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-16 h-16 object-contain" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary font-medium tracking-widest uppercase mb-2 block"
            >
              What We Offer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              All services are delivered at your home by certified therapists. Available every day from 10am to midnight — no off days.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-testid={`button-filter-${cat}`}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                {...service}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
