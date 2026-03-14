import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import ReviewSlider from '@/components/ReviewSlider.jsx';

const HomePage = () => {

  const featuredServices = [
    {
      title: 'Swedish Relaxation Massage',
      description: 'A soothing full-body massage designed to reduce stress, improve circulation, and promote deep relaxation.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'
    },
    {
      title: 'Aromatherapy Massage',
      description: 'Experience therapeutic essential oils combined with gentle massage techniques to calm the body and mind.',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935'
    },
    {
      title: 'Rejuvenating Facial Treatment',
      description: 'A revitalizing facial designed to cleanse, hydrate, and restore your natural glow.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      service: 'Swedish Massage',
      text: 'An incredible experience! The therapist arrived on time and the massage was deeply relaxing. I felt refreshed for days.',
      rating: 5
    },
    {
      name: 'Maria Lopez',
      service: 'Aromatherapy Massage',
      text: 'Having a spa experience at home was amazing. The aromatherapy massage helped me relax after a stressful week.',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      service: 'Facial Treatment',
      text: 'My skin felt so soft and refreshed after the facial. The whole experience was calming and professional.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Well Beaute Home Spa | Luxury Home Spa & Massage</title>
        <meta name="description" content="Relax and rejuvenate with professional home spa and massage services delivered to your doorstep." />
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
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
              alt="Luxury spa massage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >

              <span className="text-secondary font-medium tracking-widest uppercase mb-4 block">
                Home Spa Experience
              </span>

              <h1 className="text-white mb-6">
                Relax. Rejuvenate. Restore.
              </h1>

              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Enjoy a premium spa experience in the comfort of your home. Our professional therapists bring relaxation, wellness, and beauty directly to you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/contact"
                  className="bg-secondary hover:bg-white hover:text-secondary text-white px-8 py-4 rounded-full text-center font-medium uppercase tracking-wider transition-all duration-300"
                >
                  Book a Session
                </Link>

                <Link
                  to="/services"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-center font-medium uppercase tracking-wider transition-all duration-300"
                >
                  Explore Services
                </Link>

              </div>

            </motion.div>
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
                to="/services"
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors uppercase tracking-wider"
              >
                View All Services →
              </Link>
            </div>

          </div>

        </section>


        <ReviewSlider />


        {/* CTA Section */}

        <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="mb-6 text-4xl md:text-5xl">
              Ready to Relax at Home?
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-10">
              Book your home spa session today and enjoy a relaxing experience without leaving your home.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-secondary hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full font-medium uppercase tracking-wider transition-all duration-300"
            >
              Book Your Appointment
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default HomePage;