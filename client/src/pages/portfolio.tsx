import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, category: "Massage", title: "Deep Relaxation Session", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874" },
  { id: 2, category: "Facial", title: "Glowing Skin Treatment", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881" },
  { id: 3, category: "Spa", title: "Aromatherapy Bliss", image: "https://images.unsplash.com/photo-1552693673-1bf958298935" },
  { id: 4, category: "Massage", title: "Hot Stone Therapy", image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1" },
  { id: 5, category: "Wellness", title: "Couples Retreat", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35" },
  { id: 6, category: "Spa", title: "Luxury Home Spa", image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea" },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Helmet>
        <title>Portfolio | Well Beaute Home Spa</title>
        <meta
          name="description"
          content="View our gallery of stunning spa and massage experiences."
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
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our gallery of relaxing treatments and see the dedication
              and skill behind every service we provide.
            </motion.p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="break-inside-avoid">
                <PortfolioCard
                  {...item}
                  delay={index * 0.1}
                  onClick={() => setSelectedImage(item)}
                />
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                data-testid="button-close-lightbox"
              >
                <X size={36} />
              </button>

              <div
                className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mt-6"
                >
                  <h3 className="text-3xl text-white font-serif mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-[#1B8B7E] uppercase tracking-widest text-sm">
                    {selectedImage.category}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
