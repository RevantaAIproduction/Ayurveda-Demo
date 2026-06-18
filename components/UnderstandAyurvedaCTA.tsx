"use client";

import { motion } from "framer-motion";

export default function UnderstandAyurvedaCTA() {
  return (
    <section id="understand-ayurveda-cta" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] glass border border-black/5 p-7 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Understand Ayurveda</p>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink leading-[1.06]">
                Discover Your Personalized Path to Wellness
              </h2>
              <p className="mt-4 text-brand.ink/70 text-lg leading-relaxed">
                Learn how Ayurvedic treatments can support women’s health, pregnancy care, child wellness, and long-term vitality.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-white/70 border border-black/5 px-4 py-2 text-sm font-semibold text-brand.ink/75">
                  Root-cause guidance
                </span>
                <span className="inline-flex items-center rounded-full bg-white/70 border border-black/5 px-4 py-2 text-sm font-semibold text-brand.ink/75">
                  Personalized planning
                </span>
                <span className="inline-flex items-center rounded-full bg-white/70 border border-black/5 px-4 py-2 text-sm font-semibold text-brand.ink/75">
                  Follow-up recovery
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow"
                >
                  Book Consultation
                </a>
                <a
                  href="#our-services"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-semibold text-brand.deep bg-white/70 border border-black/5 hover:bg-white transition-colors"
                >
                  Explore Treatments
                </a>

                <div className="mt-2 text-sm text-brand.ink/60">
                  Prefer a guided start? Talk to an expert.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

