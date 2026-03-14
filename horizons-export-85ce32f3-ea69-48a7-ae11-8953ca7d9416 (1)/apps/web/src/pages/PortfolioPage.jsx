
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, category: 'Hair Color', title: 'Dimensional Balayage', image: 'https://images.unsplash.com/photo-1608515152841-ede49b2e1bd1' },
    { id: 2, category: 'Makeup', title: 'Bridal Elegance', image: 'https://images.unsplash.com/photo-1452223355713-db7fc5eed0b9' },
    { id: 3, category: 'Hair Styling', title: 'Textured Waves', image: 'https://images.unsplash.com/photo-1577378187001-ed44409a0d44' },
    { id: 4, category: 'Nails', title: 'Classic French', image: 'https://images.unsplash.com/photo-1608896772441-5a0d6fdd2acf' },
    { id: 5, category: 'Makeup', title: 'Evening Glam', image: 'https://images.unsplash.com/photo-1623474769376-87682a78c0fe' },
    { id: 6, category: 'Skincare', title: 'Radiant Glow', image: 'https://images.unsplash.com/photo-1668245186988-16d4996622b0' },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Welldonebeautysaloon</title>
        <meta name="description" content="View our gallery of stunning hair, makeup, and beauty transformations." />
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
              Our Artistry
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our gallery of transformations and see the dedication and skill behind every service we provide.
            </motion.p>
          </div>

          {/* Masonry-style Grid */}
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

        {/* Lightbox Modal */}
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
              >
                <X size={36} />
              </button>
              
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
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
};

export default PortfolioPage;
