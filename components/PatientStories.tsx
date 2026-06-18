"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type NoteStyle = "paper" | "lavender" | "sage" | "cream" | "glass";

type VoiceNote = {
  id: string;
  text: string;
  width: number; // px
  height: number; // px
  rotation: number; // deg
  baseX: number; // px
  baseY: number; // px
  style: NoteStyle;
  symbol: string;
  z: number;
  flip: boolean;
};

const NOTE_TEXTS: string[] = [
  "I finally felt heard.",
  "Everything was explained clearly.",
  "The journey felt safe.",
  "I felt supported throughout.",
  "My questions were always answered.",
  "The treatment felt personal.",
  "I felt comfortable asking questions.",
  "I finally understood my body.",
  "There was never any pressure.",
  "I felt listened to.",
  "My child is doing better.",
  "Every step felt clear.",
  "Recovery felt manageable.",
  "The guidance was reassuring.",
  "Kind care made a difference.",
  "They moved at my pace.",
  "I trusted the plan.",
  "Progress felt real and steady.",
];

const SYMBOLS = ["✦", "❋", "✿", "☘", "◉"];

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickStyle(u: number): NoteStyle {
  if (u < 0.22) return "paper";
  if (u < 0.42) return "lavender";
  if (u < 0.62) return "sage";
  if (u < 0.78) return "cream";
  return "glass";
}

function styleClasses(style: NoteStyle) {
  // Keep it premium: subtle, muted AyurAura palette.
  switch (style) {
    case "paper":
      return {
        note: "bg-white/75",
        border: "border-black/5",
        text: "text-brand.ink/90",
        accent: "bg-brand.primary/15",
      };
    case "lavender":
      return {
        note: "bg-[rgba(243,237,248,0.85)]",
        border: "border-[rgba(109,74,255,0.18)]",
        text: "text-[rgba(27,31,59,0.92)]",
        accent: "bg-[rgba(109,74,255,0.18)]",
      };
    case "sage":
      return {
        note: "bg-[rgba(239,248,241,0.9)]",
        border: "border-[rgba(139,191,103,0.22)]",
        text: "text-[rgba(27,31,59,0.92)]",
        accent: "bg-[rgba(139,191,103,0.22)]",
      };
    case "cream":
      return {
        note: "bg-[rgba(251,248,239,0.9)]",
        border: "border-[rgba(201,165,74,0.22)]",
        text: "text-[rgba(27,31,59,0.92)]",
        accent: "bg-[rgba(201,165,74,0.22)]",
      };
    case "glass":
      return {
        note: "bg-white/30 backdrop-blur-md",
        border: "border-[rgba(27,31,59,0.12)]",
        text: "text-[rgba(27,31,59,0.95)]",
        accent: "bg-[rgba(109,74,255,0.14)]",
      };
  }
}

function noteInnerClasses(style: NoteStyle) {
  // Slight gloss/paper grain.
  switch (style) {
    case "paper":
      return "bg-gradient-to-b from-white/70 via-white/35 to-transparent";
    case "lavender":
      return "bg-gradient-to-b from-[rgba(243,237,248,0.95)] via-[rgba(243,237,248,0.55)] to-transparent";
    case "sage":
      return "bg-gradient-to-b from-[rgba(239,248,241,0.95)] via-[rgba(239,248,241,0.55)] to-transparent";
    case "cream":
      return "bg-gradient-to-b from-[rgba(251,248,239,0.95)] via-[rgba(251,248,239,0.55)] to-transparent";
    case "glass":
      return "bg-gradient-to-b from-white/40 via-white/20 to-transparent";
  }
}

function makeNotes(count: number) {
  const now = Date.now();
  // Stable per session (not per render) while still not looking too uniform.
  const seed = hashString("AyurAura-voices") ^ (now % 100000);
  const rnd = mulberry32(seed);

  const styles: NoteStyle[] = ["paper", "lavender", "sage", "glass", "cream"];

  const notes: VoiceNote[] = [];

  for (let i = 0; i < count; i++) {
    const text = NOTE_TEXTS[i % NOTE_TEXTS.length];
    const uW = rnd();
    const uH = rnd();
    const uR = rnd();
    const uX = rnd();
    const uY = rnd();
    const uS = rnd();
    const uZ = rnd();
    const uFlip = rnd();

    // Different widths/heights.
    const width = Math.round(210 + uW * 180); // 210..390
    const height = Math.round(86 + uH * 74); // 86..160

    // Natural placements: left-biased wall.
    const baseX = Math.round(-40 + uX * 1200); // px (within wall)
    const baseY = Math.round(-10 + uY * 320); // px

    // Slight rotation drift.
    const rotation = Math.round((-10 + uR * 20) * 10) / 10; // -10..10

    const style = styles[Math.floor(uS * styles.length)] ?? pickStyle(uS);

    notes.push({
      id: `${i}-${hashString(text).toString(16)}`,
      text,
      width,
      height,
      rotation,
      baseX,
      baseY,
      style: style ?? "paper",
      symbol: SYMBOLS[Math.floor(rnd() * SYMBOLS.length)] ?? "✦",
      z: Math.round(10 + uZ * 70),
      flip: uFlip > 0.52,
    });
  }

  return notes;
}

function useRevealOnce() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(t);
  }, []);
  return ready;
}

export default function PatientStories() {
  const reducedMotion = useReducedMotion();
  const ready = useRevealOnce();

  const notes = useMemo(() => makeNotes(18), []);

  // Duplicate content per row to feel infinite without a visible reset.
  const rowA = notes.slice(0, 9);
  const rowB = notes.slice(9, 18);
  const rows = [rowA, rowB, rowA, rowB] as const;
  const directions = [1, -1, 1, -1] as const;
  const speeds = [34, 46, 58, 42] as const; // seconds loop duration

  return (
    <section id="patient-stories" className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">
              Patient Stories
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">
              When They Spoke…
            </h2>
          </div>

          {/* Infinite marquee wall */}
          <div className="mt-14 relative rounded-[36px] border border-black/5 bg-white">
            {/* subtle ambient background (minimal) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 15%, rgba(109,74,255,0.08) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 80% 60%, rgba(201,106,168,0.06) 0%, rgba(255,255,255,0) 60%)",
              }}
            />

            <div className="relative">
              <div className="px-5 md:px-8 py-12 md:py-14">
                <div className="relative">
                  {/* Four marquee rows */}
                  <div className="space-y-8 md:space-y-10">
                    {rows.map((row, rowIdx) => {
                      const dir = directions[rowIdx];
                      const duration = speeds[rowIdx];

                      return (
                        <div
                          key={`row-${rowIdx}`}
                          className="relative h-[140px] md:h-[160px]"
                          style={{ perspective: "1000px" }}
                        >
                          {/* mask to avoid sharp edges */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                              WebkitMaskImage:
                                "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                              maskImage:
                                "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                            }}
                          />

                          <motion.div
                            className="absolute left-0 top-0 h-full w-max flex"
                            style={{
                              transform: `translateX(${dir === 1 ? -140 : 140}px)`,
                            }}
                            animate={
                              reducedMotion
                                ? undefined
                                : {
                                    x: dir === 1 ? [0, -600] : [0, 600],
                                  }
                            }
                            transition={
                              reducedMotion
                                ? undefined
                                : {
                                    duration,
                                    ease: "linear",
                                    repeat: Infinity,
                                  }
                            }
                          >
                            {/* Two copies for seamless loop */}
                            {[0, 1].map((copy) => (
                              <div
                                key={copy}
                                className="relative"
                                style={{ width: 960, height: "100%" }}
                              >
                                {row.map((n) => {
                                  const s = styleClasses(n.style);
                                  const revealDelay = rowIdx * 0.14 + n.z * 0.0005;

                                  const floatY = 6 + n.z * 0.02;
                                  const driftRot = n.rotation * 0.22;

                                  return (
                                    <motion.div
                                      key={`${n.id}-${copy}`}
                                      initial={ready ? { opacity: 0, y: 14 } : undefined}
                                      whileInView={
                                        ready
                                          ? { opacity: 1, y: 0 }
                                          : undefined
                                      }
                                      viewport={ready ? { once: true, margin: "-120px" } : undefined}
                                      whileHover={
                                        reducedMotion
                                          ? undefined
                                          : {
                                              y: -6,
                                              rotate: n.rotation * 0.55,
                                            }
                                      }
                                      className="absolute"

                                      style={{
                                        left: n.baseX * 0.5 + copy * 430,
                                        top: n.baseY * 0.45,
                                        width: n.width,
                                        height: n.height,
                                        zIndex: n.z,
                                      }}
                                      animate={
                                        reducedMotion
                                          ? undefined
                                          : {
                                              y: [0, -floatY, 0],
                                              rotate: [n.rotation - driftRot, n.rotation + driftRot, n.rotation - driftRot],
                                            }
                                      }
                                      // NOTE: merged with the reveal transition above to avoid duplicate transition props.
                                      transition={
                                        reducedMotion
                                          ? undefined
                                          : {
                                              // keep the reveal delay behavior while avoiding duplicate props
                                              delay: revealDelay,
                                              duration: 12 + (n.z % 17),
                                              repeat: Infinity,
                                              ease: "easeInOut",
                                            }
                                      }

                                    >
                                      <div
                                        className={
                                          "relative h-full w-full rounded-[18px] shadow-[0_18px_70px_rgba(27,31,59,0.06)] border " +
                                          s.border
                                        }
                                        style={{
                                          transform: `rotate(${n.rotation}deg)`,
                                        }}
                                      >
                                        {/* Pin */}
                                        <div
                                          aria-hidden="true"
                                          className="absolute -top-3"
                                          style={{
                                            left: n.flip ? 14 : "auto",
                                            right: n.flip ? "auto" : 14,
                                          }}
                                        >
                                          <div className="h-7 w-7 rounded-full bg-white/80 border border-black/5 grid place-items-center">
                                            <div className="h-3 w-3 rounded-full " style={{ background: "rgba(109,74,255,0.35)" }} />
                                          </div>
                                        </div>

                                        {/* Note body */}
                                        <div
                                          className={
                                            "absolute inset-0 rounded-[18px] backdrop-blur-sm border border-transparent " +
                                            s.note
                                          }
                                        />

                                        {/* Gloss/paper */}
                                        <div
                                          aria-hidden="true"
                                          className={
                                            "absolute inset-0 rounded-[18px] " + noteInnerClasses(n.style)
                                          }
                                          style={{ opacity: n.style === "glass" ? 0.45 : 0.7 }}
                                        />

                                        <div className="relative h-full w-full px-5 py-5 flex flex-col">
                                          <div className="flex items-center justify-between">
                                            <div
                                              className="text-[11px] uppercase tracking-[0.24em] font-semibold"
                                              style={{ color: "rgba(27,31,59,0.55)" }}
                                            >
                                              Voice
                                            </div>
                                            <div
                                              className="text-[13px]"
                                              style={{ color: "rgba(109,74,255,0.55)" }}
                                            >
                                              {n.symbol}
                                            </div>
                                          </div>

                                          <div
                                            className="mt-3 font-semibold text-brand.ink/90 leading-relaxed"
                                            style={{
                                              fontSize: n.width > 320 ? 16 : n.width > 270 ? 15 : 14,
                                            }}
                                          >
                                            “{n.text}”
                                          </div>

                                          <div className="mt-auto h-px" style={{ background: "rgba(109,74,255,0.10)" }} />
                                          <div className="mt-3 text-[12px] font-semibold tracking-[0.02em]" style={{ color: "rgba(27,31,59,0.55)" }}>
                                            A private moment of healing
                                          </div>
                                        </div>

                                        {/* subtle accent glow */}
                                        <div
                                          aria-hidden="true"
                                          className={"absolute -bottom-6 -right-6 h-28 w-28 rounded-full blur-xl " + s.accent}
                                          style={{ opacity: n.style === "glass" ? 0.25 : 0.4 }}
                                        />
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scroll/ reveal intro copy is minimal: optional; keep text minimal */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    className="mt-10 text-center"
                  >
                    <p className="text-sm text-brand.ink/65">
                      Anonymous healing moments—held with care.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

