"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import StoryVisual from "@/components/StoryVisual";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    key: "women",
    title: "Women's Wellness",
    description: "Hormonal balance, calmer routines, and care that feels deeply personal.",
    image: "/images/specializations/lotus.png",
    pills: ["Wellness", "Hormonal Balance", "Care"],
    bg: "#f3edf8",
  },
  {
    key: "panchakarma",
    title: "Panchakarma",
    description: "A structured cleansing ritual that restores rhythm, clarity, and balance.",
    image: "/images/specializations/panchakarma.png",
    pills: ["Detox", "Restore", "Renew"],
    bg: "#eef8f5",
  },
  {
    key: "child-health",
    title: "Child Health",
    description: "Growth, immunity, and development supported through a gentle Ayurvedic lens.",
    image: "/images/specializations/healing-tree.png",
    pills: ["Growth", "Immunity", "Development"],
    bg: "#eef8f0",
  },
  {
    key: "mother-baby",
    title: "Mother & Baby",
    description: "A nurturing visual language for motherhood, care, and nourishment.",
    image: "/images/specializations/mother-baby.png",
    pills: ["Motherhood", "Care", "Nourishment"],
    bg: "#fff4f7",
  },
  {
    key: "rasayana",
    title: "Rasayana",
    description: "Longevity and rejuvenation expressed with warmth, light, and depth.",
    image: "/images/specializations/rasayana.png",
    pills: ["Longevity", "Rejuvenation", "Vitality"],
    bg: "#fbf8ef",
  },
] as const;

const pillPositions = [
  "left-0 top-[8%]",
  "right-0 top-[18%]",
  "left-[8%] bottom-[12%]",
] as const;

export default function Specializations() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // keep for future styling; no-op for now
  }, []);

  return (
    <section id="specializations" className="relative overflow-hidden py-24 md:py-32">
      <AnimatePresence mode="wait">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: slides[activeIndex]?.bg ?? "#ffffff" }}

        />
      </AnimatePresence>

      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Specializations</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Editorial wellness pathways</h2>

          <p className="mt-4 text-lg leading-relaxed text-brand.ink/70">
            Swipe through care pathways—each slide keeps generous negative space and premium pacing.
          </p>

        </motion.div>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={900}
            slidesPerView={2.2}
            spaceBetween={26}
            centeredSlides={false}
            allowTouchMove
            freeMode={{ enabled: true, momentum: true, momentumRatio: 0.9 }}
            grabCursor
            className="w-full pr-2"
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 1.55,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 26,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={slide.key} className="!h-auto">
                <article
                  className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/40 backdrop-blur-md"
                  style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
                >
                  <div className="relative p-6 md:p-7">
                    <div className="absolute inset-0 -z-10 opacity-60" style={{ background: slide.bg }} />

                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-[18px] md:text-[22px] font-semibold tracking-[-0.02em] text-brand.ink">
                          {slide.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-brand.ink/70">
                          {slide.description}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[0.34em] font-semibold text-brand.deep/70">
                          AyurAura
                        </span>
                      </div>

                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand.primary/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-brand.gold/60" />
                        <span className="h-1.5 w-1.5 rounded-full bg-brand.lavender/70" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand.deep/60">Explore</div>
                      <div className="text-brand.primary font-semibold">→</div>
                    </div>

                    <div className="mt-5">
                      <div className="w-[92px] md:w-[110px]">
                        <StoryVisual
                          image={slide.image}
                          alt={slide.title}
                          reducedMotion={reducedMotion}
                          className="max-w-[110px] sm:max-w-[120px] md:max-w-[140px]"
                        />
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
