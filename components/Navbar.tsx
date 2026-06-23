"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#our-services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

type Language = "English" | "Telugu" | "Hindi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("English");

  const languages = useMemo<Language[]>(() => ["English", "Telugu", "Hindi"], []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3"
          aria-label="Supraja Clinic Home"
        >
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#7B2CBF]/20 to-[#5A189A]/20 border border-black/5 grid place-items-center shadow-[0_10px_30px_rgba(123,44,191,0.18)]">
            <div className="h-2.5 w-2.5 rounded-full bg-[#7B2CBF] shadow-[0_0_30px_rgba(123,44,191,0.45)]" />
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-tight text-brand.deep">
              Supraja Clinic
            </div>
            <div className="text-xs text-brand.deep/70 -mt-0.5">Deep Rooted Ayurvedic Care for Women</div>
          </div>
        </motion.a>

        <nav className="hidden xl:flex items-center gap-9" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "transition-colors flex items-center gap-2 " +
                (item.href === "#home"
                  ? "text-brand.ink font-semibold"
                  : "text-brand.ink/70 hover:text-brand.ink")
              }
            >
              {item.href === "#home" ? (
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--hero-accent, #7B2CBF)" }}
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-[18px] md:text-[20px] leading-none">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative" onMouseLeave={() => setLangOpen(false)}>
            <button
              type="button"
              className={
                "h-10 px-3 rounded-full border transition-all flex items-center gap-2 " +
                (scrolled ? "bg-white/70 border-black/10" : "bg-white/10 border-white/20")
              }
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <span className="text-sm font-medium text-brand.ink/80">{language}</span>
              <span className="text-brand.primary/80">▾</span>
            </button>

            {langOpen && (
              <motion.div
                role="listbox"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-44 rounded-2xl glass border border-black/5 overflow-hidden"
              >
                <div className="py-2">
                  {languages.map((l) => (
                    <button
                      key={l}
                      type="button"
                      role="option"
                      aria-selected={language === l}
                      className={
                        "w-full text-left px-4 py-2 text-sm transition-colors " +
                        (language === l
                          ? "bg-[#7B2CBF]/10 text-brand.deep font-semibold"
                          : "text-brand.ink/75 hover:bg-black/5")
                      }
                      onClick={() => {
                        setLanguage(l);
                        setLangOpen(false);
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors"
            style={{
              color: "#FFFFFF",
              opacity: 1,
              backgroundColor: "var(--hero-accent, #7B2CBF)",
              boxShadow:
                "0 0 0 1px var(--hero-accent-soft, rgba(123,44,191,0.18)), 0 0 40px var(--hero-accent-soft, rgba(123,44,191,0.18))",
            }}
          >
            Book Consultation
          </a>

        </div>
        </div>

      <div className="h-px w-full bg-black/5">
        <motion.div
          className="h-px w-24 max-w-full"
          style={{ backgroundColor: "var(--hero-accent, #7B2CBF)" }}
          animate={{ x: ["0%", "0%"] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </header>
  );
}

