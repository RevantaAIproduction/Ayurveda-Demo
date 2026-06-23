"use client";

import { useMemo } from "react";

export default function Contact() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">
            Contact
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">
            Book a consultation with Dr. Sunitha Joshi
          </h2>
          <p className="mt-4 text-brand.ink/70 text-lg">
            A doctor-led consultation for women’s wellness, hormonal health, and pre-conception support.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
          <div className="rounded-[36px] glass border border-black/5 p-8 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">
                  Supraja Clinic
                </div>
                <div className="mt-3 text-2xl font-semibold text-brand.ink">Dr. Sunitha Joshi</div>
                <div className="mt-2 text-sm text-brand.ink/65">
                  Women’s Ayurveda • Root-cause care
                </div>
              </div>

              <div className="h-12 w-12 rounded-2xl bg-brand.primary/10 border border-black/5 grid place-items-center" aria-hidden="true">
                ✦
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              <ContactRow label="Phone" value="+91 00000 00000" />
              <ContactRow label="WhatsApp" value="+91 00000 00000" />
              <ContactRow label="Email" value="hello@suprajaclinic.com" />
              <ContactRow label="Location" value="India (Clinic Address Placeholder)" />
              <ContactRow label="Working Hours" value="Mon–Sat • 10:00 AM – 6:00 PM" />
            </div>

            <div className="mt-8 h-px bg-gradient-to-r from-brand.primary/30 via-black/10 to-transparent" />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors opacity-100"
                style={{ color: "#FFFFFF", opacity: 1 }}
              >
                Request Appointment
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors opacity-100"
                style={{ color: "#FFFFFF", opacity: 1 }}
              >
                Book Consultation
              </a>

            </div>

            <p className="mt-5 text-xs text-brand.ink/55">
              Note: Replace placeholders with clinic contact details after confirmation.
            </p>
          </div>

          <div className="rounded-[36px] border border-black/5 bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
            <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">
              Quick Consultation CTA
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-brand.ink">Start with a doctor-led plan</h3>
            <p className="mt-3 text-brand.ink/70 leading-relaxed">
              Share your goals and cycle-related concerns. We’ll guide the next best step—assessment, therapies, and preventive Ayurveda.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "Women’s wellness & hormonal balance",
                "Menstrual health support",
                "Pre-conception guidance",
                "Panchakarma & Abhyanga Therapy (as needed)",
              ].map((x) => (
                <div key={x} className="flex items-start gap-3 rounded-[22px] border border-black/5 bg-white/70 p-4">
                  <div className="h-9 w-9 rounded-full bg-brand.primary/10 border border-black/5 grid place-items-center" aria-hidden="true">
                    ✓
                  </div>
                  <div className="text-sm font-semibold text-brand.ink/85">{x}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] border border-black/5 bg-gradient-to-br from-brand.primary/10 to-fuchsia-500/5 p-6">
              <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Response timeframe</div>
              <div className="mt-2 text-sm font-semibold text-brand.ink">Within 1–2 business days</div>
              <div className="mt-2 text-xs text-brand.ink/55">(Placeholder for clinic operations)</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-brand.ink/60">
          © {year} Supraja Clinic. All rights reserved.
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-black/5 bg-white/70 p-4">
      <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-brand.ink/85">{value}</div>
    </div>
  );
}


