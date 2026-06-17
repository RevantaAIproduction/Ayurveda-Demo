"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import WhyChoose from "@/components/WhyChoose";
import Journey from "@/components/Journey";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Site() {
  return (
    <main className="bg-[#faf8ff]">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <TrustBar />
      </div>
      <About />
      <Specializations />
      <WhyChoose />
      <Journey />
      <Doctors />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

