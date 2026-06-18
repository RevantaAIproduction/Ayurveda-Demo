"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  reducedMotion: boolean | null;
};

export default function AyurvedicStoryVisual({ reducedMotion }: Props) {
  const labels = [
    { text: "HEALING", pos: "top-[6%] left-1/2 -translate-x-1/2" },
    { text: "BALANCE", pos: "left-[10%] top-[24%]" },
    { text: "IMMUNITY", pos: "right-[10%] top-[24%]" },
    { text: "VITALITY", pos: "left-[8%] bottom-[10%]" },
    { text: "LONGEVITY", pos: "right-[8%] bottom-[10%]" },
  ] as const;


  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-[500px] px-6">
        <motion.div
          className="relative mx-auto overflow-visible"
          initial={{ opacity: 0, y: 16, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Wing frame */}
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px]">
            <motion.div
              className="absolute inset-0 -z-10 rounded-[42px] bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.18)_0%,transparent_55%),radial-gradient(circle_at_bottom,rgba(123,44,191,0.14)_0%,transparent_60%)]"
              animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.75] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Center visual: compact glow only (no giant artwork) */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2"
              animate={reducedMotion ? undefined : { y: [0, -4, 0], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative mx-auto h-full w-full max-h-[240px]">
                <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_50%_40%,rgba(212,160,23,0.28)_0%,transparent_55%),radial-gradient(circle_at_55%_65%,rgba(123,44,191,0.22)_0%,transparent_60%)] blur-[0px]" />
                <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_30%_30%,rgba(201,106,168,0.18)_0%,transparent_60%)]" />
                <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_70%)]" />
              </div>
            </motion.div>

            {/* Center text (compact) */}
            <div className="absolute left-1/2 top-1/2 w-full max-w-[340px] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <div className="text-[12px] uppercase tracking-[0.34em] font-semibold text-brand.deep/70">AYURVEDIC WING</div>
              <div className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-brand.ink">
                Ancient Wisdom.
                <br />
                Modern Healing.
              </div>
            </div>


            {/* Floating labels */}
            {labels.map((l, i) => (
              <motion.div
                key={l.text}
                className={`absolute ${l.pos} pointer-events-none`}
                animate={reducedMotion ? undefined : { y: [0, -6, 0], opacity: [0.65, 1, 0.7] }}
                transition={{ duration: 8 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-full border border-black/5 bg-white/40 px-4 py-2 backdrop-blur-md">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-brand.deep/70">{l.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

