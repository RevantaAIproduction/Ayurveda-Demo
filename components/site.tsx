"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import clsx from "clsx";
import gsap from "gsap";
import Lenis from "lenis";

type Language = "en" | "te";

type Slide = {
  id: string;
  title: string;
  subtitle: string;
  english: string;
  telugu: string;
  accent: string;
  visual: "lotus" | "tree" | "mother" | "water";
};

type Pointer = {
  x: number;
  y: number;
};

const slides: Slide[] = [
  {
    id: "stri-roga",
    title: "STRI ROGA",
    subtitle: "Women's Health & Wellness",
    english:
      "Supporting women's health, hormonal balance, menstrual wellness, and overall well-being through personalized Ayurvedic care.",
    telugu:
      "మహిళల ఆరోగ్యం, హార్మోన్ల సమతుల్యత మరియు సమగ్ర శ్రేయస్సు కోసం వ్యక్తిగతీకరించిన ఆయుర్వేద సంరక్షణ.",
    accent: "#A78BFA",
    visual: "lotus",
  },
  {
    id: "kaumarabhritya",
    title: "KAUMARABHRITYA",
    subtitle: "Child Health & Development",
    english:
      "Supporting healthy growth, nutrition, immunity, and development throughout childhood.",
    telugu:
      "బాలల ఎదుగుదల, పోషణ, రోగనిరోధక శక్తి మరియు సమగ్ర అభివృద్ధికి ఆయుర్వేద మద్దతు.",
    accent: "#E9C46A",
    visual: "tree",
  },
  {
    id: "garbhini",
    title: "GARBHINI PARICHARYA",
    subtitle: "Pregnancy & Motherhood Care",
    english:
      "Supporting mothers through pregnancy, wellness, recovery, and nurturing care.",
    telugu:
      "గర్భధారణ నుండి ప్రసవానంతర సంరక్షణ వరకు తల్లులకు సంపూర్ణ ఆయుర్వేద మద్దతు.",
    accent: "#FDE68A",
    visual: "mother",
  },
  {
    id: "panchakarma",
    title: "PANCHAKARMA",
    subtitle: "Detox & Rejuvenation",
    english:
      "Traditional Ayurvedic cleansing and rejuvenation designed to restore balance and wellness.",
    telugu:
      "శరీర శుద్ధి మరియు పునరుజ్జీవనానికి రూపొందించిన సంప్రదాయ ఆయుర్వేద విధానం.",
    accent: "#7C5CFF",
    visual: "water",
  },
];

const heroParticles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 7.6) % 100}%`,
  top: `${12 + (index * 13.7) % 72}%`,
  delay: index * 0.12,
  size: 6 + (index % 4) * 3,
}));

const heroScenePalette: Record<Slide["visual"], { glow: string; accent: string; ring: string; mood: string }> = {
  lotus: {
    glow: "from-[#f8f0ff] via-[#efe6ff] to-[#d7c6ff]",
    accent: "rgba(167,139,250,0.9)",
    ring: "rgba(233,196,106,0.45)",
    mood: "Blooming lotus and quiet radiance",
  },
  tree: {
    glow: "from-[#f1fff4] via-[#e5fbe9] to-[#bfeccc]",
    accent: "rgba(125,211,152,0.95)",
    ring: "rgba(233,196,106,0.42)",
    mood: "Growing tree and protected light",
  },
  mother: {
    glow: "from-[#fff8e9] via-[#ffefcf] to-[#f9d9a8]",
    accent: "rgba(245,158,11,0.92)",
    ring: "rgba(253,230,138,0.5)",
    mood: "Mother and child formed by light",
  },
  water: {
    glow: "from-[#eff8ff] via-[#def0ff] to-[#bdd9ff]",
    accent: "rgba(96,165,250,0.9)",
    ring: "rgba(233,196,106,0.4)",
    mood: "Flowing water and purification energy",
  },
};

const specializations = [
  {
    title: "Stri Roga",
    subtitle: "Women's Wellness",
    bullets: ["Hormonal balance", "Menstrual support", "Gentle personalization"],
  },
  {
    title: "Kaumarabhritya",
    subtitle: "Child Development",
    bullets: ["Growth support", "Nutrition guidance", "Immunity care"],
  },
  {
    title: "Garbhini Paricharya",
    subtitle: "Pregnancy Care",
    bullets: ["Mother-focused", "Recovery support", "Nurturing routines"],
  },
  {
    title: "Panchakarma",
    subtitle: "Detox & Rejuvenation",
    bullets: ["Cleansing pathways", "Balance restoration", "Deep reset"],
  },
];

const faqs = [
  {
    question: {
      en: "Do I need to know Ayurveda before booking?",
      te: "బుకింగ్ చేసుకునే ముందు ఆయుర్వేదం తెలుసుకుని ఉండాలా?",
    },
    answer: {
      en: "No. AyurAura is designed for beginners and explains each step in simple language.",
      te: "అవసరం లేదు. AyurAura ప్రారంభ స్థాయి వినియోగదారుల కోసం రూపొందించబడింది మరియు ప్రతి దశను సులభంగా వివరిస్తుంది.",
    },
  },
  {
    question: {
      en: "Is this a clinic or a hospital website?",
      te: "ఇది క్లినిక్ లేదా హాస్పిటల్ వెబ్‌సైట్‌నా?",
    },
    answer: {
      en: "No. It is a wellness platform focused on education, trust, and guided Ayurvedic care.",
      te: "కాదు. ఇది విద్య, నమ్మకం, మరియు మార్గనిర్దేశిత ఆయుర్వేద సంరక్షణపై దృష్టి పెట్టిన వెల్‌నెస్ ప్లాట్‌ఫార్మ్.",
    },
  },
  {
    question: {
      en: "Can I switch the language?",
      te: "నేను భాషను మార్చుకోగలనా?",
    },
    answer: {
      en: "Yes. Use the English / Telugu toggle in the navigation to change the experience.",
      te: "అవును. అనుభవాన్ని మార్చడానికి నావిగేషన్‌లోని English / Telugu టోగుల్‌ను ఉపయోగించండి.",
    },
  },
];

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      gestureOrientation: "vertical",
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}

function useScrollBlur() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

function useHeroPointer() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      pointerX.set(x);
      pointerY.set(y);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [pointerX, pointerY]);

  const easedX = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.4 });
  const easedY = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.4 });

  return {
    pointerX: easedX,
    pointerY: easedY,
  };
}

function useRevealAnimations() {
  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          gsap.fromTo(
            entry.target,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
          );

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}

function HeroParticleLayer({
  pointerX,
  pointerY,
}: {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const driftX = useTransform(pointerX, [-0.5, 0.5], [-28, 28]);
  const driftY = useTransform(pointerY, [-0.5, 0.5], [-18, 18]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {heroParticles.map((particle, index) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.75)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            x: driftX,
            y: driftY,
          }}
          animate={{
            opacity: [0.45, 1, 0.45],
            scale: [1, 1.45, 1],
          }}
          transition={{
            duration: 5.5 + (index % 4),
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function HeroVisual({
  visual,
  pointerX,
  pointerY,
}: {
  visual: Slide["visual"];
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const sceneShiftX = useTransform(pointerX, [-0.5, 0.5], [-18, 18]);
  const sceneShiftY = useTransform(pointerY, [-0.5, 0.5], [-14, 14]);
  const sceneScale = useTransform(pointerY, [-0.5, 0.5], [1.03, 1]);
  const palette = heroScenePalette[visual];

  const petals = Array.from({ length: 10 }, (_, index) => {
    const angle = (index / 10) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 120,
      y: Math.sin(angle * 1.25) * 64,
      rotate: angle * 52,
    };
  });

  const leaves = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 138,
      y: Math.sin(angle * 1.5) * 72,
      rotate: angle * 42,
    };
  });

  const particles = Array.from({ length: 18 }, (_, index) => {
    const angle = (index / 18) * Math.PI * 2;
    return {
      x: Math.cos(angle) * 170,
      y: Math.sin(angle * 1.4) * 112,
      size: 3 + (index % 3),
      delay: index * 0.1,
    };
  });

  return (
    <motion.div
      className="relative h-[34rem] w-full overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/35 shadow-[0_30px_120px_rgba(109,74,255,0.18)] md:h-[44rem] xl:h-[48rem]"
      style={{ x: sceneShiftX, y: sceneShiftY, scale: sceneScale }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${palette.glow} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.98),rgba(255,255,255,0.35)_36%,rgba(109,74,255,0.16)_66%,rgba(17,24,39,0.04)_100%)]" />
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45), transparent 18%), radial-gradient(circle at 80% 30%, rgba(233,196,106,0.18), transparent 22%), radial-gradient(circle at 50% 80%, rgba(109,74,255,0.18), transparent 24%)",
          backgroundSize: "140% 140%",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{ opacity: [0.18, 0.34, 0.18], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.35), transparent 36%), radial-gradient(circle at center, rgba(17,24,39,0.08), transparent 64%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_30%,rgba(255,255,255,0.08)_72%,rgba(17,24,39,0.06))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.16)_50%,transparent_100%)] opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_12%,transparent_88%,rgba(255,255,255,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_7px)] opacity-[0.16] mix-blend-soft-light" />
      <HeroParticleLayer pointerX={pointerX} pointerY={pointerY} />
      <div className="pointer-events-none absolute inset-0">
        {visual === "lotus" ? (
          <div className="absolute inset-0">
            {petals.map((petal, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 h-28 w-12 -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-gradient-to-b from-white/90 via-[#e9d5ff]/90 to-[#c4b5fd]/70 shadow-[0_18px_45px_rgba(167,139,250,0.18)] backdrop-blur-xl"
                style={{ x: petal.x, y: petal.y, rotate: petal.rotate }}
                animate={{ y: [petal.y, petal.y - 12, petal.y], scaleY: [1, 1.08, 1] }}
                transition={{ duration: 5.4 + (index % 3), repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ))}
          </div>
        ) : null}
        {visual === "tree" ? (
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-1/2 h-56 w-16 -translate-x-1/2 -translate-y-[52%] rounded-full bg-gradient-to-b from-amber-900 via-[#7c4f2f] to-[#5b3a1f] shadow-[0_20px_50px_rgba(91,58,31,0.3)]"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            {leaves.map((leaf, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[46%_54%_44%_56%/52%_48%_52%_48%] bg-gradient-to-br from-[#d9ffe5] via-[#8de3a9] to-[#4bb575] shadow-[0_16px_40px_rgba(75,181,117,0.18)]"
                style={{ x: leaf.x, y: leaf.y, rotate: leaf.rotate }}
                animate={{ y: [leaf.y, leaf.y - 14, leaf.y], rotate: [leaf.rotate, leaf.rotate + 6, leaf.rotate] }}
                transition={{ duration: 5.6 + (index % 4), repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ))}
          </div>
        ) : null}
        {visual === "mother" ? (
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-[46%] h-72 w-72 -translate-x-[70%] -translate-y-1/2 rounded-full bg-gradient-to-br from-white/80 via-[#eadcff]/80 to-[#c4b5fd]/50 blur-[1px] shadow-[0_0_50px_rgba(167,139,250,0.2)]"
              animate={{ x: [-12, 8, -12], y: [-6, 8, -6] }}
              transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-[48%] h-52 w-52 -translate-x-[4%] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#fff7e0] via-[#fde68a] to-[#f59e0b] shadow-[0_0_70px_rgba(253,230,138,0.28)]"
              animate={{ x: [4, -6, 4], y: [4, -8, 4], scale: [1, 1.06, 1] }}
              transition={{ duration: 6.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            {Array.from({ length: 24 }).map((_, index) => {
              const angle = (index / 24) * Math.PI * 2;
              return (
                <motion.span
                  key={index}
                  className="absolute left-1/2 top-1/2 block rounded-full bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.95)]"
                  style={{
                    width: index % 5 === 0 ? 6 : 4,
                    height: index % 5 === 0 ? 6 : 4,
                    x: Math.cos(angle) * 145,
                    y: Math.sin(angle) * 92,
                  }}
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [1, 1.6, 1],
                    x: [Math.cos(angle) * 145, Math.cos(angle) * 152, Math.cos(angle) * 145],
                    y: [Math.sin(angle) * 92, Math.sin(angle) * 98, Math.sin(angle) * 92],
                  }}
                  transition={{ duration: 5.8 + (index % 5), repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
              );
            })}
          </div>
        ) : null}
        {visual === "water" ? (
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-[58%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45),rgba(96,165,250,0.2)_48%,transparent_72%)] blur-2xl"
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 top-[52%] h-[18rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_52%_48%/46%_46%_54%_54%] bg-gradient-to-b from-white/80 via-[#dbeafe]/65 to-[#60a5fa]/60 shadow-[0_24px_60px_rgba(96,165,250,0.2)] backdrop-blur-xl"
              animate={{ y: [-6, 10, -6], rotate: [-2, 3, -2] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            {Array.from({ length: 11 }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 h-3 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.85)]"
                style={{
                  width: 120 - index * 8,
                  x: -60 + index * 2,
                  y: 90 - index * 14,
                  opacity: 0.2 + index * 0.04,
                }}
                animate={{ scaleX: [1, 1.12, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4.5 + index * 0.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(17,24,39,0.1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/45 to-transparent opacity-60" />
      <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-brand-primary/80 backdrop-blur-xl">
        {palette.mood}
      </div>
      <div className="pointer-events-none absolute right-6 bottom-6 h-12 w-12 rounded-full border border-white/65 bg-white/45 backdrop-blur-xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 opacity-40" />
    </motion.div>
  );
}

function HeroGlassPanel({
  title,
  value,
  tone = "from-white/85 to-white/55",
}: {
  title: string;
  value: string;
  tone?: string;
}) {
  return (
    <div className={`glass rounded-[1.5rem] border border-white/65 bg-gradient-to-br ${tone} p-4 shadow-[0_18px_50px_rgba(17,24,39,0.09)] backdrop-blur-2xl`}>
      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-brand-primary/80">{title}</p>
      <p className="mt-2 text-base font-medium leading-6 text-brand-ink">{value}</p>
    </div>
  );
}

function SectionShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative px-6 py-20 md:px-10 lg:px-16" data-reveal>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-brand-primary">{eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-brand-ink md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function JourneyStep({ index, title }: { index: number; title: string }) {
  return (
    <motion.div
      className="relative flex min-h-40 flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(17,24,39,0.06)] backdrop-blur-xl"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />
      <span className="text-sm font-medium text-brand-primary">0{index}</span>
      <div>
        <h3 className="mt-4 text-xl font-semibold text-brand-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          A calm, guided step that helps us understand what your body needs.
        </p>
      </div>
    </motion.div>
  );
}

export function AyurAuraApp() {
  const [language, setLanguage] = useState<Language>("en");
  const [slideIndex, setSlideIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const scrolled = useScrollBlur();
  const { pointerX, pointerY } = useHeroPointer();
  const copyShiftX = useTransform(pointerX, [-0.5, 0.5], [-12, 12]);
  const copyShiftY = useTransform(pointerY, [-0.5, 0.5], [-8, 8]);
  const panelShiftX = useTransform(pointerX, [-0.5, 0.5], [14, -14]);
  const panelShiftY = useTransform(pointerY, [-0.5, 0.5], [10, -10]);

  useLenis();
  useRevealAnimations();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[slideIndex];
  const activeFaq = faqs[openFaq];
  const isTelugu = language === "te";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-secondary/20 blur-[120px] animate-drift" />
      <div className="pointer-events-none absolute right-[-4rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-accent/15 blur-[110px] animate-floaty" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-brand-primary/10 blur-[100px] animate-drift" />

      <header
        className={clsx(
          "sticky top-0 z-50 border-b border-transparent px-4 py-4 transition-all md:px-6",
          scrolled ? "glass border-white/60 shadow-lg shadow-brand-primary/5" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-lg font-bold text-white shadow-glow">
              A
            </div>
            <div>
              <p className="font-display text-xl leading-none text-brand-ink">AyurAura</p>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">Ancient Wisdom. Modern Wellness.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            {[
              ["Home", "#home"],
              ["About Ayurveda", "#about"],
              ["Specializations", "#specializations"],
              ["Treatment Journey", "#journey"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-brand-primary">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage((current) => (current === "en" ? "te" : "en"))}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-primary/40 hover:text-brand-primary"
            >
              {language === "en" ? "English / Telugu" : "Telugu / English"}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(109,74,255,0.24)] sm:inline-flex"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative px-6 pb-16 pt-10 md:px-10 lg:px-16">
          <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-14 xl:grid-cols-[0.92fr_1.08fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -36, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-2xl"
                style={{ x: copyShiftX, y: copyShiftY }}
              >
                <div className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-brand-primary shadow-[0_10px_25px_rgba(109,74,255,0.08)] backdrop-blur-xl">
                  {slide.subtitle}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span className="hidden h-px w-14 bg-gradient-to-r from-brand-primary/60 to-transparent sm:block" />
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-slate-500">Premium Ayurvedic storytelling</p>
                </div>
                <h1 className="mt-5 max-w-4xl font-display text-[clamp(4.25rem,8vw,8.8rem)] leading-[0.88] tracking-[-0.05em] text-brand-ink">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-xl text-balance text-xl leading-8 text-slate-600 md:text-[1.35rem] md:leading-9">
                  {isTelugu ? slide.telugu : slide.english}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#specializations"
                    className="rounded-full bg-brand-ink px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(17,24,39,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-primary"
                  >
                    Explore Care Areas
                  </a>
                  <a
                    href="#about"
                    className="rounded-full border border-slate-200 bg-white/60 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition hover:border-brand-primary/30 hover:text-brand-primary"
                  >
                    Learn Ayurveda Simply
                  </a>
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <HeroGlassPanel title="Tone" value="Cinematic and calm" />
                  <HeroGlassPanel title="Focus" value="Premium wellness story" />
                  <HeroGlassPanel title="Mode" value="Bilingual first" />
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className="relative"
                initial={{ opacity: 0, scale: 0.98, y: 18, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.01, y: -18, filter: "blur(12px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroVisual visual={slide.visual} pointerX={pointerX} pointerY={pointerY} />
                <motion.div
                  className="absolute left-5 top-5 max-w-xs"
                  style={{ x: panelShiftX, y: panelShiftY }}
                >
                  <HeroGlassPanel
                    title="Immersive centerpiece"
                    value="Every slide behaves like a living 3D poster."
                    tone="from-white/92 to-white/60"
                  />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-6 max-w-xs md:left-10"
                  style={{ x: panelShiftX, y: panelShiftY }}
                >
                  <HeroGlassPanel
                    title="Current story"
                    value={slide.subtitle}
                    tone="from-white/80 to-white/45"
                  />
                </motion.div>
                <motion.div
                  className="absolute right-6 top-1/2 hidden w-60 -translate-y-1/2 lg:block"
                  style={{ x: panelShiftX, y: panelShiftY }}
                >
                  <HeroGlassPanel
                    title="Experience"
                    value="Floating particles, layered light, and slow cinematic motion."
                    tone="from-white/78 to-white/38"
                  />
                </motion.div>
                <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/70 bg-white/88 p-2 shadow-[0_18px_50px_rgba(17,24,39,0.1)] backdrop-blur-2xl">
                  {slides.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSlideIndex(index)}
                      className={clsx(
                        "h-2.5 rounded-full transition-all",
                        index === slideIndex ? "w-10 bg-brand-primary" : "w-2.5 bg-slate-300 hover:bg-slate-400",
                      )}
                      aria-label={`Show slide ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between gap-4 text-sm text-slate-500">
            <p>Scroll to explore the story.</p>
            <p>Auto-rotating every 6 seconds.</p>
          </div>
        </section>

        <SectionShell
          eyebrow="ABOUT AYURVEDA"
          title="A simple way to understand balance."
          description="Ayurveda is a holistic approach to wellness that focuses on balance between body, mind, lifestyle, and environment."
        >
          <div id="about" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div className="glass rounded-[2rem] p-8 shadow-[0_24px_60px_rgba(109,74,255,0.08)]">
              <p className="text-base leading-8 text-slate-700 md:text-lg">
                {isTelugu
                  ? "ఆయుర్వేదం శరీరం, మనస్సు, జీవనశైలి మరియు పరిసరాల మధ్య సమతుల్యతను కాపాడే సమగ్ర ఆరోగ్య విధానం."
                  : "Ayurveda helps us understand how daily rhythms, food, rest, emotions, and environment shape wellbeing."}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Body", "Nutrition, digestion, and energy"],
                  ["Mind", "Emotions, stress, and clarity"],
                  ["Lifestyle", "Routines, sleep, and habits"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(17,24,39,0.05)]">
                    <p className="font-semibold text-brand-ink">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(109,74,255,0.08),rgba(255,255,255,0.72))] p-8 shadow-[0_24px_60px_rgba(109,74,255,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(233,196,106,0.24),transparent_24%),radial-gradient(circle_at_75%_40%,rgba(167,139,250,0.22),transparent_28%)]" />
              <div className="relative grid h-full gap-4">
                {[
                  "Balance is not a rigid rule.",
                  "It changes with your season of life.",
                  "The care should feel gentle, not overwhelming.",
                ].map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="rounded-[1.4rem] border border-white/70 bg-white/70 p-5 backdrop-blur-md"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-brand-primary">Insight {index + 1}</p>
                    <p className="mt-2 text-lg text-brand-ink">{line}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="SPECIALIZATIONS"
          title="Four focused care stories."
          description="Each card is built as a premium touchpoint, combining a distinct visual feel with a clear explanation of how the specialty helps."
        >
          <div id="specializations" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specializations.map((item, index) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_20px_55px_rgba(17,24,39,0.06)] backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,74,255,0.12),transparent_45%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-2xl text-brand-primary shadow-[0_12px_30px_rgba(109,74,255,0.12)]">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-brand-primary">{item.subtitle}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Clear, calm guidance designed for first-time Ayurveda explorers.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-2 w-2 rounded-full bg-brand-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="TREATMENT JOURNEY"
          title="A guided path, not a rushed appointment."
          description="The journey is shown as a calm flow so visitors understand how a consultation becomes a personalized wellness plan."
        >
          <div id="journey" className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent xl:block" />
            {["Consultation", "Assessment", "Personalized Wellness Plan", "Guided Recovery"].map((step, index) => (
              <JourneyStep key={step} index={index + 1} title={step} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          title="Straight answers, gently presented."
          description="The accordion keeps the experience calm while offering bilingual support for the most common questions."
        >
          <div id="faq" className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_55px_rgba(17,24,39,0.06)]">
              {faqs.map((faq, index) => {
                const open = index === openFaq;
                return (
                  <button
                    key={faq.question.en}
                    type="button"
                    onClick={() => setOpenFaq(index)}
                    className={clsx(
                      "w-full rounded-2xl border px-5 py-4 text-left transition",
                      open ? "border-brand-primary/20 bg-brand-primary/5" : "border-transparent hover:bg-slate-50",
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium text-brand-ink">{isTelugu ? faq.question.te : faq.question.en}</span>
                      <span className="text-brand-primary">{open ? "−" : "+"}</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pt-3 text-sm leading-6 text-slate-600"
                        >
                          {isTelugu ? faq.answer.te : faq.answer.en}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(167,139,250,0.12),rgba(255,255,255,0.9))] p-8 shadow-[0_20px_55px_rgba(17,24,39,0.06)]">
              <h3 className="font-display text-4xl text-brand-ink">Bilingual clarity from the first tap.</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                The interface stays simple, with English and Telugu always available in a clean, premium rhythm.
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-white/70 bg-white/80 p-6 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-primary">Current answer</p>
                <p className="mt-3 text-lg leading-8 text-brand-ink">
                  {isTelugu ? activeFaq.answer.te : activeFaq.answer.en}
                </p>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="CONTACT"
          title="Start with a calm conversation."
          description="A premium consultation form, a direct WhatsApp path, and a map placeholder keep the contact experience simple and trustworthy."
        >
          <div id="contact" className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <form
              className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_20px_55px_rgba(17,24,39,0.06)]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {["Name", "Phone"].map((label) => (
                  <label key={label} className="grid gap-2 text-sm font-medium text-slate-700">
                    {label}
                    <input
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-brand-primary/40 focus:ring-4 focus:ring-brand-primary/10"
                      placeholder={label}
                    />
                  </label>
                ))}
              </div>
              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
                Concern
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-brand-primary/40 focus:ring-4 focus:ring-brand-primary/10"
                  placeholder="Women's wellness, child health, pregnancy care, detox..."
                />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-brand-primary/40 focus:ring-4 focus:ring-brand-primary/10"
                  placeholder="Tell us what you'd like help with."
                />
              </label>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
                  Send Enquiry
                </button>
                <a
                  href="https://wa.me/0000000000"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-primary/30 hover:text-brand-primary"
                >
                  WhatsApp
                </a>
              </div>
            </form>
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(109,74,255,0.1),rgba(255,255,255,0.9))] p-8 shadow-[0_20px_55px_rgba(17,24,39,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-primary">Google Map Placeholder</p>
                <div className="mt-4 flex min-h-72 items-center justify-center rounded-[1.6rem] border border-dashed border-brand-primary/20 bg-white/70 text-center text-slate-500">
                  <div>
                    <p className="font-semibold text-brand-ink">Map area reserved here</p>
                    <p className="mt-2 text-sm">Ideal for the clinic or wellness studio location.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_20px_55px_rgba(17,24,39,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-primary">Trust Note</p>
                <p className="mt-3 text-lg leading-8 text-brand-ink">
                  A calm consultation-first experience helps visitors feel oriented before they ever submit a form.
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>AyurAura</p>
          <p>Ancient Wisdom. Modern Wellness.</p>
        </div>
      </footer>
    </div>
  );
}
