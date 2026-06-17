"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    key: "women",
    title: "Women's Wellness Through Ayurveda",
    description: "Personalized Ayurvedic healthcare designed for modern lifestyles.",
    video: "/videos/hero/women-wellness.mp4",
    eyebrow: "Ancient Wisdom. Modern Wellness.",
  },
  {
    key: "panchakarma",
    title: "Panchakarma Detox & Rejuvenation",
    description: "Restore balance through traditional Ayurvedic cleansing therapies.",
    video: "/videos/hero/panchakarma.mp4",
    eyebrow: "Purify. Rejuvenate. Restore.",
  },
  {
    key: "mother-baby",
    title: "Mother & Baby Wellness",
    description: "Gentle Ayurvedic care for mothers and growing families.",
    video: "/videos/hero/mother-baby.mp4",
    eyebrow: "Nourish with care.",
  },
  {
    key: "child-health",
    title: "Building Strong Childhood Immunity",
    description: "Strengthening health and resilience naturally.",
    video: "/videos/hero/child-immunity.mp4",
    eyebrow: "Protect the future.",
  },
  {
    key: "rasayana",
    title: "Rasayana Longevity & Rejuvenation",
    description: "Rebuild vitality, resilience, and long-term wellness.",
    video: "/videos/hero/rasayana.mp4",
    eyebrow: "Restore lasting strength.",
  },
] as const;

const slideThemes = {
  women: {
    bg: "#f3edf8",
    accent: "#7B2CBF",
    accentSoft: "rgba(123, 44, 191, 0.16)",
  },
  panchakarma: {
    bg: "#eef8f5",
    accent: "#35A8A4",
    accentSoft: "rgba(53, 168, 164, 0.16)",
  },
  "mother-baby": {
    bg: "#fff4f7",
    accent: "#C96AA8",
    accentSoft: "rgba(201, 106, 168, 0.16)",
  },
  "child-health": {
    bg: "#eef8f0",
    accent: "#8BBF67",
    accentSoft: "rgba(139, 191, 103, 0.16)",
  },
  rasayana: {
    bg: "#fbf8ef",
    accent: "#C9A54A",
    accentSoft: "rgba(201, 165, 74, 0.16)",
  },
} as const;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = slides[activeIndex];
  const activeTheme = slideThemes[activeSlide.key as keyof typeof slideThemes];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--hero-accent", activeTheme.accent);
    root.style.setProperty("--hero-accent-soft", activeTheme.accentSoft);
    return () => {
      root.style.removeProperty("--hero-accent");
      root.style.removeProperty("--hero-accent-soft");
    };
  }, [activeTheme.accent, activeTheme.accentSoft]);

  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.key}
          className="absolute inset-0"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ backgroundColor: activeTheme.bg }}
        />
      </AnimatePresence>

      <motion.div
        className="absolute inset-x-0 top-0 z-20 h-3"
        aria-hidden="true"
        style={{ backgroundColor: activeTheme.accent }}
      />

      <div className="relative z-10 h-[calc(92vh-5rem)] min-h-[calc(92vh-5rem)]">
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
          {slides.map((slide) => {
            const theme = slideThemes[slide.key as keyof typeof slideThemes];

            return (
              <SwiperSlide key={slide.key} className="!h-full">
                <section className="relative h-full min-h-[calc(92vh-5rem)] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={slide.video} type="video/mp4" />
                  </video>

                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.85) 100%)",
                    }}
                  />

                  <div className="absolute inset-0 z-10">
                    <div className="mx-auto flex h-full max-w-[1600px] items-center px-6 xl:px-12">
                      <div className="ml-auto w-full max-w-[600px] py-14 text-left xl:py-20">
                        <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">
                          {slide.eyebrow}
                        </p>

                        <h1 className="mt-6 max-w-[12ch] text-5xl leading-[0.95] tracking-[-0.05em] text-brand.ink md:text-6xl xl:text-[4.7rem]">
                          {slide.title}
                        </h1>

                        <p className="mt-7 max-w-[540px] text-lg leading-[1.6] text-brand.ink/78 md:text-xl">
                          {slide.description}
                        </p>

                        <div className="mt-10">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-4 rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-[1.01]"
                            style={{
                              background: `linear-gradient(135deg, ${theme.accent}, #4f2a7c)`,
                              boxShadow: `0 22px 60px ${theme.accentSoft}`,
                            }}
                          >
                            Book Consultation
                            <FaArrowRight className="text-base" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
