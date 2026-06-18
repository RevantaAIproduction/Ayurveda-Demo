"use client";

import { motion } from "framer-motion";

const timelineStages = [
  "Consultation",
  "Diagnosis",
  "Lifestyle Review",
  "Treatment Planning",
  "Therapy",
  "Recovery",
  "Maintenance",
] as const;

export default function Journey() {
  const steps = [
    "Consultation",
    "Dosha Analysis",
    "Assessment",
    "Personalized Plan",
    "Treatment Journey",
    "Wellness Tracking",
  ] as const;

  const nodes = [
    { x: 70, y: 90, a: "Consultation" },
    { x: 180, y: 130, a: "Dosha Analysis" },
    { x: 290, y: 200, a: "Assessment" },
    { x: 420, y: 240, a: "Personalized Plan" },
    { x: 520, y: 170, a: "Treatment Journey" },
    { x: 650, y: 140, a: "Wellness Tracking" },
  ];

  return (
    <section id="journey" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">How Ayuraura Works</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">A premium healthcare pathway</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">From your first consultation to ongoing wellness tracking.</p>
        </div>

        <div className="mt-10 rounded-[28px] glass border border-black/5 overflow-hidden relative p-5 md:p-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand.primary/10 via-transparent to-brand.gold/10" aria-hidden="true" />

          <div className="relative">
            <div className="mx-auto max-w-[900px]">
              <div className="relative">
                <svg viewBox="0 0 720 300" className="w-full h-[260px] md:h-[300px]" aria-hidden="true">
                  <path
                    d="M 55 125 C 130 45, 240 55, 300 120 C 360 190, 450 220, 520 200 C 590 178, 640 210, 690 160"
                    fill="none"
                    stroke="rgba(123,44,191,0.18)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />

                  <motion.path
                    d="M 55 125 C 130 45, 240 55, 300 120 C 360 190, 450 220, 520 200 C 590 178, 640 210, 690 160"
                    fill="none"
                    stroke="rgba(212,160,23,0.65)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 1.25, ease: "easeInOut" }}
                  />

                  {nodes.map((n, idx) => (
                    <motion.g
                      key={n.a}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.10, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <circle cx={n.x} cy={n.y} r={10} fill="rgba(123,44,191,0.18)" />
                      <circle cx={n.x} cy={n.y} r={5} fill="rgba(212,160,23,0.75)" />
                    </motion.g>
                  ))}
                </svg>

                {/* Labels */}
                <div className="absolute inset-0 pointer-events-none">
                  {nodes.map((n, idx) => (
                    <motion.div
                      key={n.a}
                      className="absolute"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-140px" }}
                      transition={{ duration: 0.55, delay: idx * 0.10, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        left: `${(n.x / 720) * 100}%`,
                        top: `${(n.y / 300) * 100}%`,
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <div className="rounded-full border border-black/5 bg-white/55 backdrop-blur-md px-4 py-2">
                        <div className="text-[11px] uppercase tracking-[0.34em] font-semibold text-brand.deep/70">Step {idx + 1}</div>
                        <div className="mt-1 text-sm font-semibold text-brand.ink">{n.a}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-brand.ink/60">
              Scroll to reveal the full path.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


