
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1612379172887-070d61c2c9c2',
      alt: 'Professional hair styling transformation showcasing elegant updo',
      tall: true,
    },
    {
      url: 'https://images.unsplash.com/photo-1701978224283-65a54a3d01fc',
      alt: 'Beautiful hair coloring result with natural highlights',
      tall: false,
    },
    {
      url: 'https://images.unsplash.com/photo-1560869713-bf165a9cfac1',
      alt: 'Luxurious facial treatment in progress at spa',
      tall: false,
    },
    {
      url: 'https://images.unsplash.com/photo-1694345906570-e0958e1cd8a3',
      alt: 'Stunning makeup application and beauty transformation',
      tall: true,
    },
    {
      url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
      alt: 'Professional manicure service with elegant nail art',
      tall: false,
    },
    {
      url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8',
      alt: 'Relaxing spa treatment with aromatherapy',
      tall: true,
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of transformations and see the artistry behind every service
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="group relative block w-full overflow-hidden rounded-xl shadow-elegant transition-all duration-300 hover:shadow-elegant-lg"
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                  <div className="relative">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
