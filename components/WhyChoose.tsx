"use client";

import { motion, useReducedMotion } from "framer-motion";

import StoryVisual from "@/components/StoryVisual";

const pills = ["Healing", "Balance", "Harmony", "Immunity", "Motherhood", "Vitality"] as const;

const pillPositions = [
  "left-[8%] top-[18%]",
  "right-[10%] top-[16%]",
  "left-[4%] bottom-[22%]",
  "right-[7%] bottom-[20%]",
  "left-[20%] top-[8%]",
  "right-[18%] top-[8%]",
] as const;

export default function WhyChoose() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32" aria-label="Ayurvedic Story">
      <div className="mx-auto max-w-[1600px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Ayurvedic Wing</p>
          <h2 className="mt-5 text-4xl md:text-6xl font-semibold text-brand.ink leading-[1.05]">
            Healing feels more human when the visual story is quiet, warm, and emotional.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-brand.ink/70 md:text-xl">
            This section holds the mood of the page with one large visual centerpiece, floating keyword
            pills, and generous whitespace that keeps everything calm and premium.
          </p>
        </motion.div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute inset-x-0 top-0 hidden h-full md:block">
            {pills.map((pill, index) => (
              <motion.span
                key={pill}
                className={`absolute ${pillPositions[index]} rounded-full border border-white/70 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand.ink shadow-[0_16px_30px_rgba(27,31,59,0.08)] backdrop-blur-md`}
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: index % 2 === 0 ? [0, -2, 0] : [0, 2, 0],
                      }
                }
                transition={{
                  duration: 6.5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {pill}
              </motion.span>
            ))}
          </div>

          <div className="md:hidden flex flex-wrap justify-center gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-black/5 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand.ink"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8 md:mt-0">
            <StoryVisual
              image="/images/specializations/healing-tree.png"
              alt="Ayurvedic healing tree visual"
              reducedMotion={reducedMotion}
              badge="Ayurvedic Wing"
              className="max-w-[420px]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-14 max-w-3xl text-center text-sm uppercase tracking-[0.28em] text-brand.ink/55"
          >
            Gentle motion. Warm light. A premium emotional cadence.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
