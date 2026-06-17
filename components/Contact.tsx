"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const initial = useMemo<FormState>(
    () => ({ name: "", phone: "", email: "", message: "" }),
    []
  );
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = form.name.trim() && form.phone.trim() && form.email.trim() && form.message.trim();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Contact</p>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">Book your consultation</h2>
          <p className="mt-4 text-brand.ink/70 text-lg">A premium, calm start to your Ayurveda journey.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] glass border border-black/5 p-6 md:p-8 shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            >
              {!submitted ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!canSubmit) return;
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <label className="text-sm font-semibold text-brand.ink">Name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="mt-2 w-full h-12 px-4 rounded-2xl border border-black/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand.primary/30"
                      placeholder="Your name"
                      aria-label="Name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-brand.ink">Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="mt-2 w-full h-12 px-4 rounded-2xl border border-black/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand.primary/30"
                      placeholder="Phone number"
                      aria-label="Phone"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-brand.ink">Email</label>
                    <input
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="mt-2 w-full h-12 px-4 rounded-2xl border border-black/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand.primary/30"
                      placeholder="Email address"
                      aria-label="Email"
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-brand.ink">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="mt-2 w-full min-h-[120px] px-4 py-3 rounded-2xl border border-black/10 bg-white/60 focus:outline-none focus:ring-2 focus:ring-brand.primary/30"
                      placeholder="Tell us your goals (e.g., hormones, detox, immunity)..."
                      aria-label="Message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full h-12 rounded-full text-sm font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow disabled:opacity-50 disabled:hover:shadow-none"
                  >
                    Send Request
                  </button>

                  <div className="text-xs text-brand.ink/55 leading-relaxed">
                    By submitting, you agree to be contacted for consultation scheduling.
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand.primary/10 border border-black/5 grid place-items-center text-brand.primary text-xl">✓</div>
                  <div className="text-2xl font-semibold text-brand.ink">Request sent</div>
                  <div className="text-brand.ink/70 leading-relaxed">
                    Our team will reach out shortly to confirm your consultation.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initial);
                    }}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-semibold border border-black/10 bg-white/60 hover:bg-white transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-black/5">
                <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Clinic details</div>
                <div className="mt-3 text-sm text-brand.ink/70">AyurAura Wellness Center</div>
                <div className="text-sm text-brand.ink/70">125 Wellness Avenue, Suite 210</div>
                <div className="text-sm text-brand.ink/70">San Francisco, California 94105, USA</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] glass border border-black/5 overflow-hidden shadow-[0_20px_70px_rgba(27,31,59,0.08)]"
            >
              <div className="relative h-[360px] md:h-[440px]">
                <iframe
                  title="AyurAura Location"
                  src="https://www.google.com/maps?q=San%20Francisco%20California%2094105&output=embed"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-semibold text-brand.ink">Phone</div>
                    <div className="mt-2 text-sm text-brand.ink/70">+1 (415) 555-0123</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand.ink">WhatsApp</div>
                    <div className="mt-2 text-sm text-brand.ink/70">+1 (415) 555-0456</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand.ink">Email</div>
                    <div className="mt-2 text-sm text-brand.ink/70">hello@ayuraura.com</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand.ink">Working Hours</div>
                    <div className="mt-2 text-sm text-brand.ink/70">Mon–Sat • 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

