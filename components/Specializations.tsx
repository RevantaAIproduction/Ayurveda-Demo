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
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--specialization-bg", activeSlide.bg);
    return () => {
      root.style.removeProperty("--specialization-bg");
    };
  }, [activeSlide.bg]);

  return (
    <section id="specializations" className="relative overflow-hidden py-24 md:py-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.key}
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: activeSlide.bg }}
        />
      </AnimatePresence>

      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Specializations</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">
            Storytelling slides built around one central Ayurvedic image.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand.ink/70">
            Each slide stays spacious, emotional, and editorial, with the visual taking center stage and the
            copy quietly supporting it.
          </p>
        </motion.div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={1000}
            slidesPerView={1}
            allowTouchMove
            className="h-full w-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.key} className="!h-auto">
                <section className="relative flex min-h-[70vh] items-center overflow-hidden py-14 md:py-20">
                  <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
                    <div className="relative w-full">
                      <div className="absolute inset-x-0 top-0 hidden h-full md:block pointer-events-none">
                        {slide.pills.map((pill, index) => (
                          <motion.span
                            key={pill}
                            className={`absolute ${pillPositions[index] ?? "left-1/2 top-[12%] -translate-x-1/2"} rounded-full border border-white/70 bg-white/74 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand.ink shadow-[0_16px_30px_rgba(27,31,59,0.08)] backdrop-blur-md`}
                            animate={
                              reducedMotion
                                ? undefined
                                : {
                                    y: [0, -7, 0],
                                    rotate: index === 1 ? [0, 2, 0] : [0, -2, 0],
                                  }
                            }
                            transition={{
                              duration: 6.5 + index,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            {pill}
                          </motion.span>
                        ))}
                      </div>

                      <div className="md:hidden flex flex-wrap justify-center gap-3">
                        {slide.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-full border border-black/5 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand.ink"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10 md:mt-2">
                        <StoryVisual
                          image={slide.image}
                          alt={slide.title}
                          reducedMotion={reducedMotion}
                          className="max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
                        />
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-14 max-w-3xl"
                    >
                      <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-brand.ink">
                        {slide.title}
                      </h3>
                      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand.ink/72 md:text-lg">
                        {slide.description}
                      </p>
                    </motion.div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
