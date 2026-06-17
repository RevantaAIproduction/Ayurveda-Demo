"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  reducedMotion: boolean | null;
};

export default function AyurvedicStoryVisual({ reducedMotion }: Props) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[36px] border border-black/5 bg-[linear-gradient(180deg,#fcf8ef_0%,#f5edd8_100%)] shadow-[0_28px_90px_rgba(57,35,10,0.14)]"
      initial={{ opacity: 0, y: 22, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative min-h-[540px]"
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/specializations/healing-tree.png"
          alt="Golden Ayurvedic tree illustration"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,248,239,0.24)_0%,rgba(252,248,239,0.06)_45%,rgba(245,237,216,0.18)_100%)]" />

        <motion.div
          className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(255,248,230,0)_0%,rgba(242,221,167,0.16)_100%)]"
          animate={reducedMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="absolute inset-x-8 bottom-8 rounded-[28px] border border-white/65 bg-white/58 px-5 py-4 backdrop-blur-md">
        <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Ayurvedic Story</div>
        <div className="mt-2 text-lg font-semibold text-brand.ink">Golden healing, rooted and alive.</div>
        <div className="mt-1 text-sm leading-relaxed text-brand.ink/65">
          A real AyurAura asset now anchors the section with a premium editorial feel.
        </div>
      </div>
    </motion.div>
  );
}
