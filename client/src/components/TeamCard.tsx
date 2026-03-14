import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamCard = ({ name, role, bio, image, delay = 0 }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group text-center"
    >
      <div className="relative w-full aspect-[3/4] mb-6 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-2xl mb-1">{name}</h3>
      <p className="text-secondary font-medium mb-4">{role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-none">{bio}</p>
    </motion.div>
  );
};

export default TeamCard;
