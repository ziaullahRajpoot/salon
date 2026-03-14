import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-8 flex-grow max-w-none">{description}</p>
        <Link
          href={`/contact?service=${encodeURIComponent(title)}`}
          className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors mt-auto group/link"
          data-testid={`link-book-${title}`}
        >
          Book Appointment
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
