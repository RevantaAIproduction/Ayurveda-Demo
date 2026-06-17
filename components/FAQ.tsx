"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What is Ayurveda?", a: "Ayurveda is a personalized system of healing that supports balance across the body through lifestyle, nourishment, and therapeutic guidance." },
  { q: "How long does treatment take?", a: "Treatment duration varies based on your root cause, progress, and comfort. Your plan is designed with clear milestones and follow-up adjustments." },
  { q: "Are consultations online?", a: "Yes. We offer online consultations to begin your assessment and create a premium care plan that fits your schedule." },
  { q: "Can Ayurveda work alongside modern medicine?", a: "Often, Ayurveda can complement modern medicine. We focus on safe, coordinated wellbeing through thoughtful planning and regular monitoring." },
  { q: "Is Panchakarma safe?", a: "Panchakarma is safe when designed for your condition, constitution, and current health status—guided by certified doctors and monitored throughout the program." },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">FAQ</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Real answers, premium clarity</h2>
        </div>

        <div className="mt-14">
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-[26px] glass border border-black/5 overflow-hidden"
                >
                  <button
                    type="button"
                    className="w-full text-left px-6 py-5 md:px-8"
                    onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-lg font-semibold text-brand.ink">{item.q}</div>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="h-10 w-10 rounded-2xl bg-brand.primary/10 border border-black/5 grid place-items-center text-brand.primary"
                        aria-hidden="true"
                      >
                        +
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 md:px-8">
                          <p className="text-brand.ink/70 leading-relaxed">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

