// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <GalleryTeaser />
      <Testimonials />
      <CallToAction />
    </main>
  );
}