import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Well Done Beauty Salon Dubai</title>
        <meta
          name="description"
          content="Learn about Well Done Beauty Salon — Dubai's trusted home spa and beauty service, available every day 10am to midnight."
        />
        <link rel="canonical" href="https://welldonebeautysalon.com/about" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-20">
        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-14 h-14 object-contain" />
                  <span className="text-secondary font-medium tracking-widest uppercase text-sm">Our Story</span>
                </div>
                <h1 className="mb-8">Bringing Luxury Beauty to Your Home</h1>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Well Done Beauty Salon was founded with a single mission: to make premium beauty and wellness services truly accessible — right at your doorstep in Dubai.
                  </p>
                  <p>
                    We bring professional-grade equipment, premium products, and certified therapists directly to your home, hotel, or villa. No traffic, no waiting rooms — just pure relaxation from the moment we arrive.
                  </p>
                  <p>
                    From relaxation massages and hot stone therapy to facials, nail art, and wood therapy — every treatment is performed with the utmost care, hygiene, and skill.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-serif text-primary font-bold">7</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Days a Week</div>
                  </div>
                  <div className="w-px h-16 bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-serif text-primary font-bold">14h</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Daily Hours</div>
                  </div>
                  <div className="w-px h-16 bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-serif text-primary font-bold">100%</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">At Home</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/spa12.jpg"
                    alt="Well Done Beauty Salon therapist at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block">
                  <p className="text-4xl font-serif text-primary font-bold">10am</p>
                  <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">to 12 Midnight</p>
                  <p className="text-secondary text-sm mt-1">Every Day — No Off Days</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Images Showcase */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">Our Tools & Products</span>
              <h2>Everything We Bring to You</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["/images/spa3.jpg", "/images/spa2.jpg", "/images/spa4.jpg", "/images/spa13.jpg"].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-md group"
                >
                  <img
                    src={img}
                    alt="Well Done Beauty Salon treatment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-16 h-16 object-contain mx-auto mb-4 brightness-0 invert opacity-90" />
              <h2 className="text-primary-foreground mb-4">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Professionalism", desc: "Every therapist is fully certified, insured, and committed to the highest standards of care and hygiene." },
                { title: "Premium Quality", desc: "We use only the finest products — from Dr. Renaud skincare to quality massage oils and tools." },
                { title: "Your Comfort First", desc: "Every session is tailored to your needs, preferences, and schedule — done entirely at your home." },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-primary-foreground text-2xl mb-4">{value.title}</h3>
                  <p className="text-primary-foreground/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
