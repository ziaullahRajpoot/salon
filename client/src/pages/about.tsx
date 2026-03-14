import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const team = [
  {
    name: "Magda Kowalski",
    role: "Lead Therapist & Founder",
    image: "https://images.unsplash.com/photo-1701058450384-ed0e89292e1c",
    bio: "With over 10 years of international experience, Magda brings unparalleled expertise and a passion for wellness to every client she serves.",
  },
  {
    name: "Sofia Al-Hassan",
    role: "Senior Massage Therapist",
    image: "https://images.unsplash.com/photo-1680049118554-b2e40e2eef36",
    bio: "Sofia specializes in deep tissue and aromatherapy, creating deeply healing sessions tailored to each client's unique needs.",
  },
  {
    name: "Leila Mansour",
    role: "Facial & Skincare Specialist",
    image: "https://images.unsplash.com/photo-1620252655460-080dbec533ca",
    bio: "Dedicated to holistic skincare, Leila helps clients achieve their healthiest, most radiant complexion.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Well Beaute Home Spa</title>
        <meta
          name="description"
          content="Learn about our story, our expert team, and the values that drive Well Beaute Home Spa."
        />
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
                  <img src="/logo.png" alt="Well Beaute logo" className="w-14 h-14 object-contain" />
                  <span className="text-secondary font-medium tracking-widest uppercase text-sm">
                    Our Story
                  </span>
                </div>
                <h1 className="mb-8">Bringing Luxury Wellness to Your Home</h1>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Founded with a vision to make premium spa experiences accessible to everyone, Well Beaute Home Spa began as a boutique service and has grown into Dubai's premier at-home wellness destination.
                  </p>
                  <p>
                    We believe that relaxation and self-care should never require you to leave the comfort of your own space. Our certified therapists bring everything you need — from professional-grade equipment to the finest aromatherapy oils — directly to your door.
                  </p>
                  <p>
                    Every member of our team is handpicked not just for their technical skill, but for their dedication to making every client feel seen, heard, and deeply cared for.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
                    alt="Professional spa service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                  <h3 className="text-4xl font-serif text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                    Years of Excellence
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <img src="/logo.png" alt="Well Beaute logo" className="w-16 h-16 object-contain mx-auto mb-4 brightness-0 invert opacity-90" />
              <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">
                What We Stand For
              </span>
              <h2 className="text-primary-foreground mb-4">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professionalism",
                  desc: "Every therapist is fully certified, insured, and committed to the highest standards of care.",
                },
                {
                  title: "Comfort & Safety",
                  desc: "We bring premium, sanitized equipment and use only the finest quality products.",
                },
                {
                  title: "Personalized Care",
                  desc: "Each session is tailored to your specific needs, preferences, and wellness goals.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 mx-auto mb-6" />
                  <h3 className="text-primary-foreground text-2xl mb-4">{value.title}</h3>
                  <p className="text-primary-foreground/70 max-w-none">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">
                The Experts
              </span>
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                The talented professionals dedicated to bringing your wellness
                vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <TeamCard key={member.name} {...member} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
