import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
  delay?: number;
}

const PortfolioCard = ({ image, title, category, onClick, delay = 0 }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] bg-muted"
      onClick={onClick}
      data-testid={`card-portfolio-${title}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
        <span className="text-white/80 text-sm font-medium tracking-wider uppercase mb-2 block">
          {category}
        </span>
        <h3 className="text-primary-foreground text-2xl mb-4">{title}</h3>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
          <ZoomIn size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
