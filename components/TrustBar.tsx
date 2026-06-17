"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Patients Treated" },
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Experts" },
  { value: "4.9★", label: "Patient Satisfaction" },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 mt-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl rounded-[28px] glass border border-black/5 shadow-[0_30px_80px_rgba(123,44,191,0.18)]"
      >
        <div className="px-6 py-8 md:px-10 md:py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="relative">
                <div className="text-3xl md:text-4xl font-semibold text-brand.ink">{s.value}</div>
                <div className="mt-1 text-sm md:text-base text-brand.ink/65">{s.label}</div>
                <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand.primary/30 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-black/5">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-brand.primary/10 border border-black/5 grid place-items-center">
                <span className="text-brand.primary text-xl">✦</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-brand.ink">100% Personalized Care</div>
                <div className="text-sm text-brand.ink/60">Guidance designed for your healing story</div>
              </div>
            </div>
            <div className="text-sm text-brand.ink/55">Trusted. Gentle. Effective.</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

