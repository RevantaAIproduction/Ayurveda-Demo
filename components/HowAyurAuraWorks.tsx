"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useMemo, useState } from "react";

type Step = {
  label: string;
  icon: "spark" | "calendar" | "stethoscope" | "map" | "leaf" | "heart";
};

const steps: Step[] = [
  { label: "Choose Specialization", icon: "spark" },
  { label: "Book Consultation", icon: "calendar" },
  { label: "Ayurvedic Assessment", icon: "stethoscope" },
  { label: "Personalized Treatment Plan", icon: "map" },
  { label: "Therapies / Herbs / Panchakarma", icon: "leaf" },
  { label: "Follow-Up & Recovery", icon: "heart" },
];

function Icon({ name }: { name: Step["icon"] }) {
  // Minimal icon set to keep interaction lightweight.
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2l1.2 6.2L20 12l-6.8 3.8L12 22l-1.2-6.2L4 12l6.8-3.8L12 2z" {...common} />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M7 3v2M17 3v2" {...common} />
        <path d="M4.5 8.5h15" {...common} />
        <path d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" {...common} />
        <path d="M8 12h4" {...common} />
      </svg>
    );
  }

  if (name === "stethoscope") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M6 3v5a4 4 0 0 0 8 0V3" {...common} />
        <path d="M14 8a5 5 0 0 0 10 0" {...common} />
        <path d="M12 14v3a4 4 0 0 0 4 4h0" {...common} />
        <path d="M20 14a2 2 0 1 1 0 .01" {...common} />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M10 6l-6 2v13l6-2 4 2 6-2V6l-6 2-4-2Z" {...common} />
        <path d="M10 6v13" {...common} />
        <path d="M14 8v13" {...common} />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M20 4s-8 1-12 5-4 11-4 11 7 0 11-4 5-12 5-12Z" {...common} />
        <path d="M7 17c2-2 6-6 10-10" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 21s-7-4.6-9.3-9A5.6 5.6 0 0 1 12 6a5.6 5.6 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9Z"
        {...common}
      />
      <path d="M12 10v6" {...common} />
      <path d="M9 13h6" {...common} />
    </svg>
  );
}

export default function HowAyurAuraWorks() {
  const reducedMotion = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  // Node positions in the SVG coordinate system (0..720 x 0..300).
  const nodes = useMemo(
    () => [
      { x: 90, y: 155 },
      { x: 200, y: 120 },
      { x: 320, y: 185 },
      { x: 440, y: 135 },
      { x: 560, y: 190 },
      { x: 660, y: 150 },
    ],
    []
  );

  const { scrollYProgress } = useScroll();

  // Draw the path progressively on scroll.
  const pathProgress = reducedMotion ? 1 : scrollYProgress;

  return (
    <section id="how-ayuraura-works" className="py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">How AyurAura Works</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">A clear process—shown visually</h2>
        </div>

        <div className="mt-14">
          <div className="relative">
            {/* Canvas */}
            <div className="mx-auto max-w-[980px]">
              <svg viewBox="0 0 720 300" className="w-full h-[260px] md:h-[300px]" aria-hidden="true">
                {/* Background wire */}
                <path
                  d="M60 160 C 120 80, 210 90, 260 145 C 310 205, 400 205, 460 150 C 520 95, 610 100, 660 160"
                  fill="none"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />

                {/* Highlight wire (drawn on scroll) */}
                <motion.path
                  d="M60 160 C 120 80, 210 90, 260 145 C 310 205, 400 205, 460 150 C 520 95, 610 100, 660 160"
                  fill="none"
                  stroke="url(#aa)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ pathLength: reducedMotion ? 1 : pathProgress }}
                />

                {/* Active segment highlight */}
                {activeIdx >= 0 ? (
                  <path
                    d="M60 160 C 120 80, 210 90, 260 145 C 310 205, 400 205, 460 150 C 520 95, 610 100, 660 160"
                    fill="none"
                    stroke="rgba(109,74,255,0.35)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="6 18"
                    style={{
                      // crude segment animation: shift dash offset per node
                      strokeDashoffset: activeIdx * 22,
                      transition: reducedMotion ? undefined : "stroke-dashoffset 250ms ease",
                    }}
                  />
                ) : null}

                <defs>
                  <linearGradient id="aa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(109,74,255,0.75)" />
                    <stop offset="1" stopColor="rgba(0,0,0,0)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Nodes overlay */}
              <div className="absolute inset-0">
                {nodes.map((n, idx) => {
                  const isActive = idx === activeIdx;

                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      aria-label={steps[idx]?.label}
                      onMouseEnter={() => setActiveIdx(idx)}
                      onMouseLeave={() => setActiveIdx(-1)}
                      onFocus={() => setActiveIdx(idx)}
                      onBlur={() => setActiveIdx(-1)}
                      onClick={() => setActiveIdx((cur) => (cur === idx ? -1 : idx))}
                      disabled={false}
                      className="absolute"
                      style={{
                        left: `${(n.x / 720) * 100}%`,
                        top: `${(n.y / 300) * 100}%`,
                        transform: "translate(-50%, -50%)",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                      }}
                      whileHover={
                        reducedMotion
                          ? undefined
                          : {
                              scale: isActive ? 1.06 : 1.04,
                            }
                      }
                      transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    >
                      {/* Node */}
                      <motion.div
                        className="relative"
                        animate={
                          reducedMotion
                            ? undefined
                            : {
                                scale: isActive ? 1.1 : 1,
                              }
                        }
                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                      >
                        <div
                          className={
                            isActive
                              ? "h-16 w-16 rounded-full bg-white/80 border border-brand.primary/35 shadow-[0_22px_70px_rgba(109,74,255,0.18)] backdrop-blur-sm grid place-items-center"
                              : "h-14 w-14 rounded-full bg-white/60 border border-black/5 shadow-[0_18px_60px_rgba(109,74,255,0.10)] backdrop-blur-sm grid place-items-center"
                          }
                        >
                          <motion.div
                            className={isActive ? "text-brand.primary" : "text-brand.primary/80"}
                            animate={
                              reducedMotion
                                ? undefined
                                : {
                                    scale: isActive ? 1.1 : 1,
                                  }
                            }
                            transition={{ type: "spring", stiffness: 420, damping: 26 }}
                          >
                            <Icon name={steps[idx].icon} />
                          </motion.div>
                        </div>

                        {/* Glowing halo */}
                        <div
                          aria-hidden="true"
                          className={
                            isActive
                              ? "absolute inset-0 rounded-full blur-xl bg-brand.primary/18"
                              : "absolute inset-0 rounded-full blur-xl bg-brand.primary/10 opacity-70"
                          }
                        />
                      </motion.div>

                      {/* Label (hidden by default) */}
                      <motion.div
                        className="absolute -translate-x-1/2 -translate-y-full left-1/2 top-0"
                        initial={false}
                        animate={
                          isActive
                            ? { opacity: 1, y: -14, scale: 1 }
                            : { opacity: 0, y: -4, scale: 0.98 }
                        }
                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                        style={{ pointerEvents: "none" }}
                      >
                        <div className="rounded-full border border-black/5 bg-white/80 backdrop-blur-sm px-4 py-2 shadow-[0_18px_60px_rgba(27,31,59,0.08)]">
                          <div className="text-xs uppercase tracking-[0.24em] font-semibold text-brand.deep/65">Step {idx + 1}</div>
                          <div className="mt-1 text-sm font-semibold text-brand.ink/90 whitespace-nowrap">{steps[idx].label}</div>
                        </div>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Minimal instruction: no paragraphs */}
          <div className="mt-6 text-center text-sm text-brand.ink/60">
            Hover a node (or tap on mobile) to reveal the step.
          </div>
        </div>
      </div>
    </section>
  );
}

