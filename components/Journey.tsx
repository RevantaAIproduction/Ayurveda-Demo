"use client";

import { motion } from "framer-motion";

const timelineStages = [
  "Consultation",
  "Diagnosis",
  "Lifestyle Review",
  "Treatment Planning",
  "Therapy",
  "Recovery",
  "Maintenance",
] as const;

export default function Journey() {
  return (
    <section id="journey" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Treatment Journey</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">A modern pathway through Ayurveda</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">Every stage supports your healing—visually, emotionally, and clinically.</p>
        </div>

        <div className="mt-14 rounded-[28px] glass border border-black/5 overflow-hidden relative p-6 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand.primary/10 via-transparent to-brand.gold/10" aria-hidden="true" />
          <div className="relative">
            <div className="hidden md:block">
              <div className="flex items-start gap-6">
                {timelineStages.map((s, idx) => (
                  <div key={s} className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-white/60 border border-black/5 grid place-items-center shadow-[0_20px_60px_rgba(123,44,191,0.14)]">
                        <span className="text-brand.deep font-semibold">{idx + 1}</span>
                      </div>
                      <div>
                        <div className="text-base md:text-lg font-semibold text-brand.ink">{s}</div>
                      </div>
                    </div>
                    {idx < timelineStages.length - 1 && (
                      <div className="mt-7 h-px bg-gradient-to-r from-brand.primary/40 via-black/10 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {timelineStages.map((s, idx) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                  className="rounded-[22px] glass border border-black/5 p-5"
                >
                  <div className="text-sm font-semibold text-brand.deep">Step {idx + 1}</div>
                  <div className="mt-2 text-lg font-semibold text-brand.ink">{s}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works (4-step horizontal timeline) */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">How It Works</p>
            <h3 className="mt-5 text-3xl font-semibold text-brand.ink">A simple 4-step premium experience</h3>
          </div>

          <div className="mt-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-brand.primary/30 via-black/5 to-brand.gold/25" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
              {[
                {
                  t: "Book Consultation",
                  p: "Choose your time and goals.",
                },
                {
                  t: "Assessment",
                  p: "Personalized analysis and insights.",
                },
                {
                  t: "Treatment Plan",
                  p: "Curated therapy with clear next steps.",
                },
                {
                  t: "Follow-Up Care",
                  p: "Support, monitoring, and refinement.",
                },
              ].map((x, idx) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[26px] glass border border-black/5 p-5 md:p-6 shadow-[0_20px_70px_rgba(27,31,59,0.06)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-brand.primary/15 to-brand.gold/10 border border-black/5 grid place-items-center">
                      <span className="text-brand.deep font-semibold">{idx + 1}</span>
                    </div>
                    <div className="text-base md:text-lg font-semibold text-brand.ink">{x.t}</div>
                  </div>
                  <div className="mt-3 text-sm text-brand.ink/65">{x.p}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

