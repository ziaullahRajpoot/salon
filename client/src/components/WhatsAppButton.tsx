import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/971509270282?text=Hello,%20I%20want%20to%20book%20a%20home%20spa%20service.%20My%20Address%20is%20:"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      data-testid="link-whatsapp"
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};

export default WhatsAppButton;
