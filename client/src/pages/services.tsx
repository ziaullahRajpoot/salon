import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = ["All", "Massage", "Facial", "Nails", "Wellness"];

const allServices = [
  {
    category: "Massage",
    title: "Swedish Relaxation Massage in Dubai",
    description:
      "A gentle full-body massage designed to relieve stress, improve circulation, and help your body completely relax in the comfort of your home in JVC, Dubai Marina, or anywhere in Dubai.",
    image: "/images/spa1.jpg",
  },
  {
    category: "Massage",
    title: "Hot Stone Therapy",
    description:
      "Heated volcanic stones melt away muscle tension and relieve chronic pain, leaving you deeply relaxed and restored — delivered to your home across Dubai.",
    image: "/images/spa3.jpg",
  },
  {
    category: "Massage",
    title: "Wood Therapy (Maderotherapy)",
    description:
      "Ancient Colombian technique using wooden tools to contour the body, reduce cellulite, and boost circulation — available at your home in JVC and all Dubai areas.",
    image: "/images/spa10.jpg",
  },
  {
    category: "Massage",
    title: "Cupping Therapy",
    description:
      "Traditional cupping technique to relieve muscle stiffness, improve blood flow, and detox the body — professionally delivered to your home in Dubai.",
    image: "/images/spa2.jpg",
  },
  {
    category: "Facial",
    title: "Hydrating Facial Treatment",
    description:
      "A rejuvenating facial using premium Dr. Renaud products to deeply cleanse, hydrate, and refresh your skin — available at your home in JVC, Jumeirah, and across Dubai.",
    image: "/images/spa4.jpg",
  },
  {
    category: "Facial",
    title: "Advanced Facial Technology",
    description:
      "Cutting-edge facial tools combined with expert technique for visible skin tightening and glow results — brought to your door anywhere in Dubai.",
    image: "/images/spa5.jpg",
  },
  {
    category: "Nails",
    title: "Gel Nail Treatment",
    description:
      "Long-lasting gel manicure with a wide colour selection — done professionally at your home in JVC, Dubai Marina, Downtown Dubai and beyond.",
    image: "/images/spa6.jpg",
  },
  {
    category: "Nails",
    title: "Full Nail Care",
    description:
      "Comprehensive nail treatment including shaping, cuticle care, and polish with premium Lola Lee products — available at your home across Dubai.",
    image: "/images/spa9.jpg",
  },
  {
    category: "Wellness",
    title: "Signature Home Spa Experience",
    description:
      "Our full luxury home spa package combining massage, facial, and beauty treatments for a complete wellness day — delivered to your home in JVC or anywhere in Dubai.",
    image: "/images/spa8.jpg",
  },
];

const serviceAreas = [
  "Jumeirah Village Circle (JVC)",
  "Dubai Marina",
  "Downtown Dubai",
  "Jumeirah",
  "Business Bay",
  "Palm Jumeirah",
  "JLT",
  "Al Barsha",
  "Arabian Ranches",
  "Mirdif",
  "Deira",
  "Bur Dubai",
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
        <title>Home Massage & Spa Services in JVC Dubai | Well Done Beauty Salon</title>
        <meta
          name="description"
          content="Professional at-home massage, spa, facial and nail services in JVC, Dubai Marina, Downtown Dubai and across UAE. Certified therapists — available daily 10am to midnight."
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
              className="mb-4"
            >
              Home Spa Services in Dubai
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base text-muted-foreground flex items-center justify-center gap-2 mb-4"
            >
              <MapPin size={14} className="text-rose-400" />
              Serving JVC, Dubai Marina, Downtown Dubai & all UAE areas
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              All services are delivered at your home in JVC, Dubai Marina, Jumeirah, and across Dubai by certified therapists. Available every day from 10am to midnight — no off days.
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

          {/* Service Areas */}
          <div className="mt-24 text-center">
            <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">
              Where We Serve
            </span>
            <h2 className="text-3xl font-serif mb-4">
              Massage & Spa Service Areas in Dubai
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              We bring professional massage, facial, nail, and spa treatments to your home anywhere in Dubai. Our most popular service areas include JVC, Dubai Marina, and Downtown Dubai — but we cover the entire city.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground shadow-sm"
                >
                  <MapPin size={13} className="text-rose-400" />
                  {area}
                </motion.span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              Not listed?{" "}
              <a href="https://wa.me/971509270282" className="text-primary hover:underline font-medium">
                WhatsApp us
              </a>{" "}
              — we likely cover your area too.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
