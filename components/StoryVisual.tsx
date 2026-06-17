"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StoryVisualProps = {
  image: string;
  alt: string;
  reducedMotion: boolean | null;
  badge?: string;
  className?: string;
};

export default function StoryVisual({ image, alt, reducedMotion, badge, className }: StoryVisualProps) {
  return (
    <div className={`relative mx-auto w-full ${className ?? ""}`}>
      <motion.div
        className="relative overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(180deg,#fffaf1_0%,#f6ecd3_100%)] shadow-[0_30px_100px_rgba(84,60,15,0.14)]"
        animate={reducedMotion ? undefined : { y: [0, -10, 0], rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-contain p-5 md:p-7"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,252,245,0.18)_0%,rgba(255,252,245,0.02)_45%,rgba(242,228,186,0.12)_100%)]" />
        <motion.div
          className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,248,230,0)_0%,rgba(232,212,160,0.16)_100%)]"
          animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {badge ? (
        <motion.div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/60 bg-white/82 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand.deep shadow-[0_18px_40px_rgba(57,35,10,0.12)] backdrop-blur-md"
          animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {badge}
        </motion.div>
      ) : null}
    </div>
  );
}
