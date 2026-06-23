"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Specializations from "@/components/Specializations";
import OurServices from "@/components/OurServices";
import HowAyurAuraWorks from "@/components/HowAyurAuraWorks";
import Experts from "@/components/Experts";
import VideoSection from "@/components/VideoSection";
import PatientStories from "@/components/PatientStories";
import TheyStartedHealing from "@/components/TheyStartedHealing";
import UnderstandAyurvedaCTA from "@/components/UnderstandAyurvedaCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Site() {
  return (
    <main className="bg-[#faf8ff]">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <TrustBar />
      </div>
      <Specializations />
      <OurServices />
      <HowAyurAuraWorks />
      <Experts />
      <VideoSection />
      <PatientStories />
      <TheyStartedHealing />
      <FAQ />
      <UnderstandAyurvedaCTA />
      <Contact />
      <Footer />
    </main>
  );
}


