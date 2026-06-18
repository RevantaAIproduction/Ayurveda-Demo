"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experts = [
  {
    name: "Dr. Ananya Sharma",
    role: "Women’s Health Specialist",
    image: "/images/doctors/dr-ananya-sharma.png",
    experience: "12+ years",
    specialties: ["Stri Roga", "Hormonal Wellness"],
  },
  {
    name: "Dr. Rajesh Nair",
    role: "Panchakarma Specialist",
    image: "/images/doctors/dr-rajesh-nair.png",
    experience: "14+ years",
    specialties: ["Panchakarma", "Detox & Rejuvenation"],
  },
  {
    name: "Dr. Priya Menon",
    role: "Child Health Specialist",
    image: "/images/doctors/dr-priya-menon.png",
    experience: "11+ years",
    specialties: ["Kaumarabhritya", "Immunity"],
  },
] as const;

export default function Experts() {
  return (
    <section id="experts" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Experts</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Meet the care team</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">Specialists focused on comfort, balance, and measurable recovery milestones.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {experts.map((d, idx) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7 }}
              className="rounded-[28px] glass border border-black/5 overflow-hidden shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            >
              <div className="relative h-72">
                <Image src={d.image} alt={d.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand.deep/55 via-transparent to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center rounded-full bg-white/85 border border-black/10 px-4 py-1.5 text-xs font-semibold text-brand.deep">
                    Experience {d.experience}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xl font-semibold text-brand.ink">{d.name}</div>
                <div className="mt-1 text-sm text-brand.ink/65">{d.role}</div>

                <div className="mt-5 h-px bg-gradient-to-r from-brand.primary/40 via-black/10 to-transparent" />

                <div className="mt-5 space-y-2">
                  {d.specialties.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand.primary/60" aria-hidden="true" />
                      <div className="text-sm font-semibold text-brand.ink/75">{s}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow"
                >
                  Book Consultation
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

