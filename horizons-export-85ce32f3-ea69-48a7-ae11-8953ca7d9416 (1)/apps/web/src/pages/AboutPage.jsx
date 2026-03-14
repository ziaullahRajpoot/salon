
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamCard from '@/components/TeamCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const AboutPage = () => {
  const team = [
    {
      name: 'Isabella Rossi',
      role: 'Master Stylist & Founder',
      image: 'https://images.unsplash.com/photo-1701058450384-ed0e89292e1c',
      bio: 'With over 15 years of international experience, Isabella brings unparalleled expertise and vision to every client.'
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Colorist',
      image: 'https://images.unsplash.com/photo-1620252655460-080dbec533ca',
      bio: 'Marcus specializes in dimensional color and balayage, creating seamless, natural-looking results.'
    },
    {
      name: 'Sophia Laurent',
      role: 'Senior Esthetician',
      image: 'https://images.unsplash.com/photo-1680049118554-b2e40e2eef36',
      bio: 'Dedicated to holistic skincare, Sophia helps clients achieve their healthiest, most radiant complexion.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Welldonebeautysaloon</title>
        <meta name="description" content="Learn about our story, our expert team, and the values that drive Welldonebeautysaloon." />
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
                <span className="text-secondary font-medium tracking-widest uppercase mb-4 block">
                  Our Story
                </span>
                <h1 className="mb-8">Redefining Beauty Standards</h1>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    Founded with a vision to elevate the salon experience, Welldonebeautysaloon began as a boutique studio and has grown into a premier destination for comprehensive luxury beauty care.
                  </p>
                  <p>
                    We believe that a visit to the salon should be more than just an appointment—it should be a rejuvenating escape. Our space was designed to be a sanctuary where artistry meets relaxation, allowing you to unwind while our experts work their magic.
                  </p>
                  <p>
                    Every member of our team is handpicked not just for their technical skill, but for their dedication to making every client feel seen, heard, and beautiful.
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
                    src="https://images.unsplash.com/photo-1633681926019-03bd9325ec20" 
                    alt="Salon interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden md:block">
                  <h3 className="text-4xl font-serif text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-secondary font-medium tracking-widest uppercase mb-2 block">
                The Artists
              </span>
              <h2 className="mb-4">Meet Our Experts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                The talented professionals dedicated to bringing your beauty vision to life.
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
};

export default AboutPage;
