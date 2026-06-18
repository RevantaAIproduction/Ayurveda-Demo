"use client";

import { motion } from "framer-motion";

const HERO_VIDEO_SRC = "/videos/healing/mother-baby.mp4";
const FALLBACK_VIDEO_SRC = "/videos/healing/placeholder.mp4";

export default function TheyStartedHealing() {
  return (
    <section
      id="they-started-healing"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "600px" }}
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
          <source src={FALLBACK_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Overlay (soft white-lavender gradient) */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(243,237,248,0.45) 45%, rgba(255,255,255,0.68) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6" style={{ minHeight: "600px" }}>
          <div className="flex min-h-[600px] items-center justify-center py-18 md:py-24 lg:py-0">
            <div className="max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                <div className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">
                  They Started Healing
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-brand.ink leading-[1.06]">
                  Healing Journeys That Continue Beyond Treatment
                </h2>

                <p className="mx-auto max-w-[36ch] text-brand.ink/70 text-lg leading-relaxed">
                  A calm, continuous support system—so healing feels steady, not rushed.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {[
                    "✓ Recovery Support",
                    "✓ Personalized Follow-Ups",
                    "✓ Long-Term Wellness",
                  ].map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-brand.ink shadow-[0_20px_70px_rgba(27,31,59,0.06)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm md:text-base font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow"
                  >
                    Book Consultation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

