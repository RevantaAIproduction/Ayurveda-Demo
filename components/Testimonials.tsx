"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

const testimonials = [
  { text: "AyurAura helped me regain hormonal balance naturally.", stars: 5 },
  { text: "The Panchakarma program transformed my energy levels.", stars: 5 },
  { text: "Excellent care during pregnancy and postpartum.", stars: 5 },
] as const;

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Testimonials</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Stories of balance</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">Luxury care meets modern results—patient experiences, in their words.</p>
        </div>

        <div className="mt-14">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 6000, disableOnInteraction: false }} loop>
            {testimonials.map((t, idx) => (
              <SwiperSlide key={t.text}>
                <div className="max-w-3xl mx-auto px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="rounded-[28px] glass border border-black/5 p-7 md:p-9 shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
                  >
                    <div className="flex items-center gap-2">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} className="text-brand.gold text-lg">★</span>
                      ))}
                    </div>
                    <p className="mt-5 text-xl md:text-2xl font-semibold text-brand.ink leading-relaxed">
                      “{t.text}”
                    </p>
                    <div className="mt-6 text-sm text-brand.ink/60">
                      Verified client • AyurAura Wellness Center
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

