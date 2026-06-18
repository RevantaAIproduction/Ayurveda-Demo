"use client";

import { motion } from "framer-motion";

import ChromaKeyVideo from "@/components/ChromaKeyVideo";

export default function VideoSection() {
  return (
    <section id="video" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Video</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Learn the rhythm of care</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">
            A short educational visual to support your first steps.
          </p>
        </div>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[28px] overflow-hidden glass border border-black/5 shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            style={{ minHeight: 420 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand.primary/15 via-transparent to-brand.gold/15" aria-hidden="true" />
            <ChromaKeyVideo src="/videos/hero/women-wellness.mp4" className="absolute inset-0" />
            <div className="relative z-10 p-6 md:p-10 flex items-end h-full">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">AyurAura Education</div>
                <div className="mt-3 text-2xl md:text-3xl font-semibold text-brand.ink">From assessment to recovery</div>
                <p className="mt-3 text-brand.ink/70 leading-relaxed">
                  Watch how consultation, personalized planning, and follow-ups come together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

