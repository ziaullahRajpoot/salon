
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, service, text, rating = 5, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative"
    >
      <Quote className="absolute top-6 right-8 w-12 h-12 text-muted/20" />
      <div className="flex gap-1 text-yellow-500 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-foreground/80 text-lg italic mb-8 relative z-10">
        "{text}"
      </p>
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-muted-foreground">{service}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
