"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AyurvedicStoryVisual from "@/components/AyurvedicStoryVisual";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const copyY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: reducedMotion ? 0 : copyY }}
            className="max-w-2xl"
          >
            <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">About Ayurveda</p>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-brand.ink leading-[1.08]">
              A calm, editorial introduction to whole-body healing.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand.ink/70">
              Ayurveda is not rushed. It unfolds through rhythm, assessment, and therapies that respect
              your constitution. This section sets the tone for a premium wellness journey that feels
              warm, precise, and deeply personal.
            </p>

            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-120px" }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  title: "Root-cause focus",
                  desc: "We tune the experience around what your body is asking for.",
                },
                {
                  title: "Premium comfort",
                  desc: "Soft pacing, thoughtful spaces, and a polished presentation.",
                },
                {
                  title: "Personalized direction",
                  desc: "Lifestyle, nourishment, and therapy align with your goals.",
                },
                {
                  title: "Long-term balance",
                  desc: "The plan is built for durability, not quick visual drama.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[24px] border border-black/5 bg-white/70 p-5 shadow-[0_20px_50px_rgba(27,31,59,0.06)] backdrop-blur-sm"
                >
                  <div className="text-lg font-semibold text-brand.ink">{item.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-brand.ink/65">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: reducedMotion ? 0 : visualY }}
            className="relative"
          >
            <div className="max-w-[420px]">
              <AyurvedicStoryVisual reducedMotion={reducedMotion} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
