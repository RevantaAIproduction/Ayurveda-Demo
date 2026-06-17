"use client";

import { useMemo } from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Ayurveda", href: "#about" },
  { label: "Specializations", href: "#specializations" },
  { label: "Treatment Journey", href: "#journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

const services = ["Panchakarma", "Hormonal Wellness", "Child Immunity", "Rasayana", "Stress & Sleep"];

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[28px] glass border border-black/5 p-6 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.08)]">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#7B2CBF]/20 to-[#5A189A]/20 border border-black/5 grid place-items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#7B2CBF]" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-brand.ink">AyurAura</div>
                  <div className="text-sm text-brand.ink/65">Ancient Wisdom. Modern Wellness.</div>
                </div>
              </div>

              <p className="mt-4 text-brand.ink/70 leading-relaxed">
                Premium Ayurvedic healthcare crafted with cinematic calm—root cause understanding, certified guidance,
                and personalized recovery.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Quick Links</div>
              <div className="mt-4 grid grid-cols-1 gap-2">
                {quickLinks.map((l) => (
                  <a key={l.href} href={l.href} className="text-sm text-brand.ink/70 hover:text-brand.primary transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Services</div>
              <div className="mt-4 grid grid-cols-1 gap-2">
                {services.map((s) => (
                  <a key={s} href="#specializations" className="text-sm text-brand.ink/70 hover:text-brand.primary transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Newsletter</div>
              <div className="mt-4 space-y-3">
                <p className="text-sm text-brand.ink/65">Monthly premium Ayurvedic insights.</p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex gap-2"
                >
                  <input
                    className="flex-1 h-11 rounded-2xl border border-black/10 bg-white/60 px-4 focus:outline-none focus:ring-2 focus:ring-brand.primary/30"
                    placeholder="Email"
                    aria-label="Newsletter email"
                    type="email"
                  />
                  <button
                    type="submit"
                    className="h-11 w-11 rounded-2xl bg-brand.primary text-white font-semibold hover:shadow-[0_0_55px_rgba(109,74,255,0.35)] transition-shadow"
                    aria-label="Subscribe"
                  >
                    →
                  </button>
                </form>
                <div className="flex items-center gap-2 pt-2">
                  {[
                    { t: "Instagram", s: "IG" },
                    { t: "Facebook", s: "FB" },
                    { t: "YouTube", s: "YT" },
                  ].map((x) => (
                    <a
                      key={x.t}
                      href="#"
                      aria-label={x.t}
                      className="h-10 w-10 rounded-2xl glass border border-black/5 grid place-items-center text-brand.deep text-sm hover:bg-white/60 transition-colors"
                    >
                      {x.s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-brand.ink/60">© {year} AyurAura. All rights reserved.</div>
            <div className="text-sm text-brand.ink/60">Privacy • Terms • Accessibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

