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
  },
];

const ReviewSlider = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
          alt="spa background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/70 max-w-none">
            Real experiences from our happy customers
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-md h-full">
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 max-w-none">{review.text}</p>
                <div className="font-semibold text-foreground">{review.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSlider;
