import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Massage', 'Spa', 'Facial', 'Wellness'];

  const allServices = [
    {
      category: 'Massage',
      title: 'Swedish Relaxation Massage',
      description:
        'A gentle full-body massage designed to relieve stress, improve circulation, and help your body completely relax in the comfort of your home.',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'
    },
    {
      category: 'Massage',
      title: 'Deep Tissue Massage',
      description:
        'Focused massage techniques targeting deeper muscle layers to release chronic tension, muscle stiffness, and fatigue.',
      image:
        'https://images.unsplash.com/photo-1519823551278-64ac92734fb1'
    },
    {
      category: 'Spa',
      title: 'Luxury Home Spa Experience',
      description:
        'Transform your home into a relaxing spa environment with a combination of soothing massage, aromatherapy, and calming treatments.',
      image:
        'https://images.unsplash.com/photo-1552693673-1bf958298935'
    },
    {
      category: 'Facial',
      title: 'Hydrating Facial Treatment',
      description:
        'A rejuvenating facial designed to deeply cleanse, hydrate, and refresh your skin while restoring a natural healthy glow.',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'
    },
    {
      category: 'Spa',
      title: 'Aromatherapy Massage',
      description:
        'Relax your mind and body with therapeutic essential oils combined with gentle massage techniques.',
      image:
        'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea'
    },
    {
      category: 'Wellness',
      title: 'Couples Massage at Home',
      description:
        'Enjoy a relaxing massage session with your partner, designed to create a peaceful and memorable wellness experience together.',
      image:
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35'
    }
  ];

  const filteredServices =
    activeFilter === 'All'
      ? allServices
      : allServices.filter((s) => s.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Services | Home Spa & Massage</title>
        <meta
          name="description"
          content="Explore our relaxing home spa and massage services designed to help you unwind and rejuvenate."
        />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
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
              Discover our relaxing range of home spa and wellness services
              designed to help you unwind, recharge, and feel your best.
            </motion.p>
          </div>

          {/* Filters */}
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
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;