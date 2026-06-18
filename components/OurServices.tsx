"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Stri Roga Care", desc: "Targeted Ayurvedic support for women’s root-cause wellness." },
  { title: "Garbhini Paricharya", desc: "Pregnancy care that balances comfort, nourishment, and confidence." },
  { title: "Kaumarabhritya", desc: "Gentle child health pathways built around immunity and growth." },
  { title: "Panchakarma Programs", desc: "Structured detox & rejuvenation for deeper balance and renewal." },
] as const;

export default function OurServices() {
  return (
    <section id="our-services" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Our Services</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Premium care, structured outcomes</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">
            Choose a treatment track built around your constitution, goals, and recovery rhythm.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] glass border border-black/5 p-7 md:p-8 shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Program</div>
                  <div className="mt-3 text-2xl font-semibold text-brand.ink">{s.title}</div>
                </div>
                <div
                  className="h-12 w-12 rounded-2xl bg-brand.primary/10 border border-black/5 grid place-items-center"
                  aria-hidden="true"
                >
                  <span className="text-brand.primary text-xl">✦</span>
                </div>
              </div>
              <p className="mt-4 text-brand.ink/70 leading-relaxed">{s.desc}</p>

              <div className="mt-6 h-px bg-gradient-to-r from-brand.primary/30 via-black/10 to-transparent" />
              <div className="mt-5 text-sm font-semibold text-brand.primary">
                Learn your path →
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

