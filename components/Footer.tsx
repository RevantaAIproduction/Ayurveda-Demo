"use client";

import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
<footer className="py-16" aria-label="Supraja Clinic Footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[28px] glass border border-black/5 p-6 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.08)]">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#7B2CBF]/20 to-[#5A189A]/20 border border-black/5 grid place-items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#7B2CBF]" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-brand.ink">Supraja Clinic</div>
                  <div className="text-sm text-brand.ink/65">Deep Rooted Ayurvedic Care for Women</div>
                </div>
              </div>

              <p className="mt-4 text-brand.ink/70 leading-relaxed">
                Specialized Ayurvedic care for women, pregnancy, children, and long-term wellness.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Treatments</div>
              <div className="mt-4 grid grid-cols-1 gap-2">
                {["Stri Roga", "Garbhini Paricharya", "Kaumarabhritya", "Panchakarma"].map((t) => (
                  <a
                    key={t}
                    href="#specializations"
                    className="text-sm text-brand.ink/70 hover:text-brand.primary transition-colors"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Quick Links</div>
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    {[
                      { label: "Home", href: "#home" },
                      { label: "Specializations", href: "#specializations" },
                      { label: "FAQ", href: "#faq" },
                      { label: "About Supraja Clinic", href: "/about" },
                    ].map((l) => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        className="text-sm text-brand.ink/70 hover:text-brand.primary transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                    <a
                      href="#specializations"
                      className="text-sm text-brand.ink/70 hover:text-brand.primary transition-colors"
                    >
                      Treatments
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Contact</div>
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-brand.ink/70">Phone: +91 00000 00000</div>
                    <div className="text-sm text-brand.ink/70">Email: hello@ayuraura.com</div>
                    <div className="text-sm text-brand.ink/70">Location: India</div>

                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-brand.ink/60">© {year} Supraja Clinic. All rights reserved.</div>
            <div className="text-sm text-brand.ink/60">Privacy • Terms • Accessibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

