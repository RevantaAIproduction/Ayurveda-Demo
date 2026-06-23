"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPremium() {
  return (
    <main className="bg-[#faf8ff]">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(109,74,255,0.14) 0%, rgba(255,255,255,0) 55%), radial-gradient(ellipse at 80% 40%, rgba(201,106,168,0.10) 0%, rgba(255,255,255,0) 55%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white/70 px-4 py-2 backdrop-blur-sm shadow-[0_20px_60px_rgba(27,31,59,0.06)]">
                <span className="h-2.5 w-2.5 rounded-full bg-brand.primary" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-brand.deep/75">
                  Dr.-Led Women’s Wellness
                </span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl font-semibold text-brand.ink leading-[1.05]">
                Meet Dr. Sunitha Joshi
              </h1>

              <p className="mt-5 text-lg text-brand.ink/75 leading-relaxed max-w-2xl">
                Women’s wellness needs clarity, compassion, and a plan built around you. Dr. Sunitha guides personalized Ayurvedic care with a
                deep root-cause approach.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-[22px] glass border border-black/5 p-5 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">
                    Focus
                  </div>
                  <div className="mt-3 text-sm font-semibold text-brand.ink">Hormonal Wellness</div>
                </div>
                <div className="rounded-[22px] glass border border-black/5 p-5 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">
                    Care
                  </div>
                  <div className="mt-3 text-sm font-semibold text-brand.ink">Consultation-led Guidance</div>
                </div>
                <div className="rounded-[22px] glass border border-black/5 p-5 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">
                    Approach
                  </div>
                  <div className="mt-3 text-sm font-semibold text-brand.ink">Root-Cause Ayurveda</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors opacity-100"
                  style={{ color: "#FFFFFF", opacity: 1 }}
                >
                  Book Consultation
                  <FaArrowRight className="ml-2" />
                </a>
                <a
                  href="#areas-of-expertise"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors opacity-100"
                  style={{ color: "#FFFFFF", opacity: 1 }}
                >
                  Explore Expertise
                </a>

              </div>

            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand.primary/15 to-fuchsia-500/10 rounded-[40px] blur-md" aria-hidden="true" />
              <div className="relative rounded-[40px] overflow-hidden border border-black/5 shadow-[0_30px_90px_rgba(27,31,59,0.10)] bg-white/70 backdrop-blur-sm">
                <div className="relative h-[420px]">
                  <Image
                    src="/doctor-about.png"
                    alt="Dr. Sunitha Joshi"
                    fill
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/85 border border-black/10 px-4 py-2 backdrop-blur-sm">
                      <span className="h-2 w-2 rounded-full bg-brand.primary" aria-hidden="true" />
                      <span className="text-sm font-semibold text-brand.ink">Supraja Clinic • Women’s Ayurveda</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10">
          <SectionCard
            kicker="Her Story"
            title="A women-led journey through root-cause Ayurveda"
          >
            <p className="text-brand.ink/75 leading-relaxed text-lg">
              Dr. Sunitha’s practice centers on listening first, assessing thoughtfully, and building long-term care plans that respect your cycle,
              comfort, and wellbeing.
            </p>
          </SectionCard>

          <SectionCard
            kicker="Healing Beyond Symptoms"
            title="Clarity, comfort, and consistent progress"
          >
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { t: "Assessment-first", d: "We start with a structured consultation to understand what’s really behind the concern." },
                { t: "Personalized protocols", d: "Therapies and guidance align with your constitution and goals." },
                { t: "Women’s wellness focus", d: "Hormonal balance, menstrual health, and pre-conception support." },
                { t: "Long-term guidance", d: "Lifestyle & preventive Ayurveda for sustained wellbeing." },
              ].map((x) => (
                <div key={x.t} className="rounded-[26px] glass border border-black/5 p-6 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-sm font-semibold text-brand.ink">{x.t}</div>
                  <div className="mt-2 text-sm text-brand.ink/65 leading-relaxed">{x.d}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          <section id="areas-of-expertise" className="scroll-mt-28">
            <div className="text-center">
              <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Areas of Expertise</p>
              <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-brand.ink">
                Women’s Wellness, Guided with Care
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {[
                { t: "Women’s Wellness", d: "Whole-body care that supports comfort, strength, and balance." },
                { t: "Hormonal Health", d: "Root-cause guidance for hormonal wellness and emotional steadiness." },
                { t: "Menstrual Health", d: "Cycle-aware support with therapies and lifestyle alignment." },
                { t: "Pre-Conception Support", d: "Preparation guidance for long-term wellbeing and confidence." },
                { t: "Lifestyle Ayurveda", d: "Diet, routine, and preventive practices that sustain results." },
                { t: "Personalized Consultations", d: "A plan built around you—your pace, your priorities, your constitution." },
              ].map((x) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] glass border border-black/5 p-7 md:p-8 shadow-[0_20px_70px_rgba(27,31,59,0.06)]"
                >
                  <div className="text-sm uppercase tracking-[0.28em] font-semibold text-brand.deep/70">Focus</div>
                  <div className="mt-3 text-2xl font-semibold text-brand.ink">{x.t}</div>
                  <div className="mt-4 text-sm text-brand.ink/65 leading-relaxed">{x.d}</div>
                </motion.div>
              ))}
            </div>
          </section>

          <SectionCard
            kicker="About Supraja Clinic"
            title="Premium women’s Ayurvedic care—doctor-guided and consultation-led"
          >
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {[
                { t: "Mission", d: "Deep-rooted Ayurvedic care that supports women’s wellness—today and beyond." },
                { t: "Philosophy", d: "Healing is a process: listen, assess, personalize, and guide with consistency." },
                { t: "Experience", d: "Your plan stays structured—therapies, lifestyle, and follow-ups that make sense." },
              ].map((x) => (
                <div key={x.t} className="rounded-[26px] border border-black/5 bg-white/70 p-6 backdrop-blur-sm shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-xs uppercase tracking-[0.28em] font-semibold text-brand.deep/70">{x.t}</div>
                  <div className="mt-3 text-sm font-semibold text-brand.ink">{x.d}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            kicker="Why Patients Trust Us"
            title="Compassionate care, built on clarity and consistency"
          >
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Women’s wellness focus", d: "Support designed around hormonal, menstrual, and pre-conception needs." },
                { t: "Doctor-centric consultations", d: "A plan you understand—so you can follow it with confidence." },
                { t: "Structured follow-ups", d: "Progress checks and adjustments for long-term results." },
                { t: "Premium experience", d: "Comfortable guidance with modern polish and thoughtful pacing." },
              ].map((x) => (
                <div key={x.t} className="rounded-[26px] glass border border-black/5 p-6 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
                  <div className="text-sm font-semibold text-brand.ink">{x.t}</div>
                  <div className="mt-2 text-sm text-brand.ink/65 leading-relaxed">{x.d}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="rounded-[36px] glass border border-black/5 p-8 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.06)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">Begin Your Wellness Journey</p>
                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-brand.ink">
                  Book a consultation with Dr. Sunitha
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm font-semibold text-white bg-brand.primary shadow-[0_0_55px_rgba(109,74,255,0.28)] hover:shadow-[0_0_70px_rgba(109,74,255,0.38)] transition-shadow"
                >
                  Book Consultation
                  <FaArrowRight className="ml-2" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm font-semibold text-brand.ink/80 bg-white/60 border border-black/5 hover:bg-white/80 transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionCard({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-28">
      <div className="rounded-[36px] glass border border-black/5 p-8 md:p-10 shadow-[0_20px_70px_rgba(27,31,59,0.06)] bg-white/60 backdrop-blur-sm">
        <p className="uppercase tracking-[0.34em] text-xs font-semibold text-brand.deep/80">{kicker}</p>
        <h2 className="mt-5 text-3xl md:text-4xl font-semibold text-brand.ink leading-[1.08]">{title}</h2>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

