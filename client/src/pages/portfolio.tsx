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
  { id: 1, category: "Massage", title: "Relaxation Setup", image: "/images/spa1.jpg" },
  { id: 2, category: "Cupping Therapy", title: "Cupping Session", image: "/images/spa2.jpg" },
  { id: 3, category: "Hot Stone Massage", title: "Hot Stone Therapy", image: "/images/spa3.jpg" },
  { id: 4, category: "Facial", title: "Premium Skincare", image: "/images/spa4.jpg" },
  { id: 5, category: "Facial", title: "Beauty Tools", image: "/images/spa5.jpg" },
  { id: 6, category: "Nails", title: "Nail Art Collection", image: "/images/spa6.jpg" },
  { id: 7, category: "Nails", title: "Gel Polish Range", image: "/images/spa7.jpg" },
  { id: 8, category: "Spa", title: "Signature Setup", image: "/images/spa8.jpg" },
  { id: 9, category: "Nails", title: "Colour Selection", image: "/images/spa9.jpg" },
  { id: 10, category: "Massage", title: "Wood Therapy Tools", image: "/images/spa10.jpg" },
  { id: 11, category: "Massage", title: "Maderotherapy", image: "/images/spa11.jpg" },
  { id: 12, category: "Massage", title: "Therapeutic Session", image: "/images/spa12.jpg" },
  { id: 13, category: "Massage", title: "Evening Spa Ritual", image: "/images/spa13.jpg" },
];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Helmet>
        <title>Gallery | Well Done Beauty Salon Dubai</title>
        <meta
          name="description"
          content="View our gallery of stunning home spa and beauty treatments by Well Done Beauty Salon, Dubai."
        />
        <link rel="canonical" href="https://welldonebeautysalon.com/portfolio" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-16 h-16 object-contain" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary font-medium tracking-widest uppercase mb-2 block"
            >
              Our Work
            </motion.span>
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
              Real photos from our actual sessions — the quality and care you can expect when you book with us.
            </motion.p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="break-inside-avoid">
                <PortfolioCard
                  {...item}
                  delay={index * 0.05}
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
                  <h3 className="text-3xl text-white font-serif mb-2">{selectedImage.title}</h3>
                  <p className="text-secondary uppercase tracking-widest text-sm">{selectedImage.category}</p>
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
