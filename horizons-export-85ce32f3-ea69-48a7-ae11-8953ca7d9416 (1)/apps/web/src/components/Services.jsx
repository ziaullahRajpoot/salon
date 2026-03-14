import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Flower2, HeartHandshake, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: 'Swedish Massage',
      description:
        'A relaxing full-body massage designed to relieve tension, improve circulation, and promote overall relaxation in the comfort of your home.',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
    },
    {
      icon: Flower2,
      title: 'Aromatherapy Massage',
      description:
        'Experience the calming effects of essential oils combined with gentle massage techniques that help restore balance to your body and mind.',
      image:
        'https://images.unsplash.com/photo-1552693673-1bf958298935',
    },
    {
      icon: Sparkles,
      title: 'Facial Treatments',
      description:
        'Rejuvenate your skin with customized facial treatments designed to cleanse, hydrate, and restore your natural glow.',
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    },
    {
      icon: HeartHandshake,
      title: 'Home Spa Experience',
      description:
        'Indulge in a luxurious spa experience at home combining relaxation techniques, body treatments, and wellness therapies.',
      image:
        'https://images.unsplash.com/photo-1600334129128-685c5582fd35',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium range of home spa and wellness services designed to help you relax,
            rejuvenate, and feel your best without leaving your home.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-flow-dense'
                }`}
              >

                {/* Image */}
                <div className={`${isEven ? '' : 'md:col-start-2'} relative group`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant-lg">
                    <img
                      src={service.image}
                      alt={`${service.title} home spa service`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-6">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4">{service.title}</h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent active:scale-[0.98]"
                  >
                    Book this service
                  </Button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;