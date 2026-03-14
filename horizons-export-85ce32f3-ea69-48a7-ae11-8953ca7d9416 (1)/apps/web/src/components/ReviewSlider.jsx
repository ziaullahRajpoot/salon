import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Laure De Wit",
    text: "I have tried a few at-home massage services in Dubai but Magda from Well Beaute is 100% my favorite masseuse! I have done several massages with her and recommended her to all my friends. They all agree she is amazing!",
  },
  {
    name: "Lana",
    text: "Magda is highly professional and delivers outstanding service. Her at-home service is reliable, relaxing, and always on time. I highly recommend her!",
  },
  {
    name: "Mahsa Pour",
    text: "Amazing at home service. Very professional and always on time. Highly recommended for anyone looking for a relaxing massage at home.",
  },
  {
    name: "Aoife Brady",
    text: "Amazing service and very professional. One of the best home massage experiences I have had.",
  }
];

const ReviewSlider = () => {
  return (
    <section className="relative py-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
            <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
            alt="spa background"
            className="w-full h-full object-cover opacity-50"
            />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4"></div>
            

      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Real experiences from our happy customers
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >

          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-md h-full">

                <div className="flex mb-4 text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-muted-foreground mb-6">
                  {review.text}
                </p>

                <div className="font-semibold">
                  {review.name}
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default ReviewSlider;