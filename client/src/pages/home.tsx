import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReviewSlider from "@/components/ReviewSlider";
import { blogPosts } from "@/lib/blog-data";

const featuredServices = [
  {
    title: "Relaxation Massage",
    description:
      "A soothing full-body massage designed to reduce stress, improve circulation, and promote deep relaxation.",
    image: "/images/spa1.jpg",
  },
  {
    title: "Hot Stone Therapy",
    description:
      "Heated volcanic stones glide across tired muscles to melt away tension and restore balance.",
    image: "/images/spa3.jpg",
  },
  {
    title: "Rejuvenating Facial",
    description:
      "A revitalizing facial using premium products to cleanse, hydrate, and restore your natural glow.",
    image: "/images/spa4.jpg",
  },
];

const galleryImages = [
  "/images/spa8.jpg",
  "/images/spa10.jpg",
  "/images/spa13.jpg",
  "/images/spa9.jpg",
];

const featuredBlogs = blogPosts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Well Done Beauty Salon | Luxury Home Spa & Beauty Services in Dubai</title>
        <meta
          name="description"
          content="Premium at-home beauty and spa services in Dubai. Massage, facials, nails and more — delivered to your door by certified therapists."
        />
        <meta property="og:title" content="Well Done Beauty Salon | Dubai Home Spa" />
        <meta property="og:description" content="Luxury home spa and beauty services in Dubai. Book now on WhatsApp." />
        <meta property="og:url" content="https://welldonebeautysalon.com/" />
        <link rel="canonical" href="https://welldonebeautysalon.com/" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="/images/spa8.jpg"
              alt="Well Done Beauty Salon luxury spa setup"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-16 h-16 object-contain" />
                <div>
                  <span className="text-white font-serif text-xl font-bold block">Well Done</span>
                  <span className="text-white/70 text-xs tracking-widest uppercase">Beauty Salon</span>
                </div>
              </div>

              <h1 className="text-white mb-6">Relax. Rejuvenate. Restore.</h1>

              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Dubai's premier at-home beauty salon. Our certified therapists bring luxury massage, facials, and beauty services directly to you — 10am to midnight, every day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-full text-center font-medium uppercase tracking-wider transition-all duration-300 shadow-lg"
                  data-testid="link-book-session"
                >
                  Book a Session
                </Link>
                <a
                  href="https://wa.me/971509270282?text=Hello,%20I%20want%20to%20book%20a%20home%20spa%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bc5c] text-white px-8 py-4 rounded-full text-center font-medium uppercase tracking-wider transition-all duration-300 shadow-lg"
                  data-testid="link-whatsapp-hero"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-12 bg-muted/40 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "🏠", label: "At-Home Service", desc: "We come to you — no travel needed" },
                { icon: "✓", label: "Certified Therapists", desc: "Fully qualified professionals" },
                { icon: "🕙", label: "10am – Midnight", desc: "7 days a week, all year round" },
                { icon: "⭐", label: "Premium Products", desc: "Only the finest quality brands" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 p-6"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-serif">{item.label}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">
                Our Treatments
              </span>
              <h2>Popular Spa Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.2} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors uppercase tracking-wider"
                data-testid="link-view-all-services"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Gallery Strip */}
        <section className="py-4 bg-muted/20 overflow-hidden">
          <div className="flex gap-4">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="shrink-0 w-64 h-48 rounded-xl overflow-hidden">
                <img src={img} alt="Well Done Beauty Salon" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <ReviewSlider />

        {/* Blog Preview Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-secondary font-medium tracking-widest uppercase mb-2 block"
              >
                Beauty & Wellness Tips
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                From Our Blog
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mt-4 max-w-xl mx-auto"
              >
                Expert advice on beauty, wellness, and self-care tailored for Dubai residents.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
                    >
                      Read More <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-full font-medium uppercase tracking-wider transition-all duration-300 shadow-lg"
              >
                View All Articles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-20 h-20 object-contain mx-auto mb-6 brightness-0 invert opacity-90" />
            <h2 className="mb-6 text-4xl md:text-5xl">Ready to Relax at Home?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Book your home beauty session today. Available every day, 10am to midnight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary hover:bg-secondary hover:text-secondary-foreground px-10 py-4 rounded-full font-medium uppercase tracking-wider transition-all duration-300 shadow-lg"
                data-testid="link-book-appointment-cta"
              >
                Book Your Appointment
              </Link>
              <a
                href="https://wa.me/971509270282?text=Hello,%20I%20want%20to%20book%20a%20home%20beauty%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] hover:bg-[#20bc5c] text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider transition-all duration-300 shadow-lg"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
