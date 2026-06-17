"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";

const posts = [
  { title: "Benefits of Panchakarma", image: "/images/hero/02-panchakarma-detox.png", desc: "Detox, rejuvenation, and balance—what to expect." },
  { title: "Ayurvedic Hormone Balance", image: "/images/hero/05-stri-roga-hormonal-wellness.png", desc: "A modern approach to root-cause hormonal wellbeing." },
  { title: "Boosting Child Immunity Naturally", image: "/images/hero/04-child-immunity-care.png", desc: "Nurturing resilience with child-friendly Ayurvedic care." },
] as const;

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Blog</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Premium education</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">Small reads. High clarity. Modern medical storytelling, Ayurvedic style.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7 }}
              className="rounded-[28px] glass border border-black/5 overflow-hidden shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            >
              <div className="relative h-56">
                <Image src={p.image} alt={p.title} fill className="object-contain bg-white/40 p-6" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand.deep/35 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-lg font-semibold text-brand.ink">{p.title}</div>
                <div className="mt-2 text-sm text-brand.ink/65 leading-relaxed">{p.desc}</div>
                <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-brand.deep hover:text-brand.primary transition-colors">
                  Read more ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

