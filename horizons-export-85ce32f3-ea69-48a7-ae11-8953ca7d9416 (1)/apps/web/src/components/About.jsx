
import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'Sofia Martinez',
      role: 'Master stylist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      bio: '12 years of experience in precision cuts and color artistry',
    },
    {
      name: 'Anika Bergström',
      role: 'Spa specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bio: 'Certified esthetician specializing in holistic skincare',
    },
    {
      name: 'Maya Chen',
      role: 'Color expert',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909',
      bio: 'Award-winning colorist with expertise in balayage techniques',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every service we provide',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Your comfort and satisfaction are at the heart of everything we do',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our clients and team',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Well Done Beauty Saloon has been a cornerstone of beauty and wellness in our community since 2012. 
            We combine traditional techniques with modern innovations to deliver exceptional results that enhance 
            your natural beauty and boost your confidence.
          </p>
        </motion.div>

        {/* Salon Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-elegant-lg">
            <img
              src="https://images.unsplash.com/photo-1577378187001-ed44409a0d44"
              alt="Modern and elegant interior of Well Done Beauty Saloon with styling stations"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            Our values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-4">
                    <Icon size={32} />
                  </div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            Meet our team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-elegant">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Well Done Beauty Saloon`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
