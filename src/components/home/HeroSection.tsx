// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lightGray via-white to-lightGreen/30 dark:from-darkGray dark:via-black dark:to-darkGreen/30">
      {/* Arka plan blur dekorlar */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mediumGreen rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pastelPink rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lightGreen/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Mobil'de panda üstte, masaüstünde sağda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
              <Image
                src="/panda-hero1.jpg"
                alt="Sevimli Bambu Dostları Panda"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
              {/* Yanak efekti */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-28 bg-pastelPink/40 rounded-full blur-2xl -rotate-12" />
                <div className="w-40 h-28 bg-pastelPink/40 rounded-full blur-2xl rotate-12" />
                <div className="w-20 h-20 bg-white/30 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Metinler - Mobil'de altta, masaüstünde solda */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headings text-darkGray dark:text-white leading-tight drop-shadow-md">
              Sevimli <span className="text-mediumGreen">Bambu</span> Dostları
            </h1>

            <p className="mt-6 text-xl sm:text-2xl font-body text-darkGray/90 dark:text-white/90">
              Panda temalı, sevgi dolu anaokulu
            </p>

            <p className="mt-6 text-lg sm:text-xl font-body text-darkGray/80 dark:text-white/80">
              Küçük bir aile ortamında, her çocuğa özel ilgiyle oyunla öğrenme, doğayla iç içe etkinlikler ve bol gülümseme...
              Yerimiz sınırlı, çünkü gerçekten vakit ayırmak istiyoruz 🐼❤️
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link
                href="/iletisim"
                className="px-8 py-4 sm:px-10 sm:py-5 btn-primary text-lg sm:text-xl md:text-2xl shadow-2xl hover:shadow-pastelPink/50"
              >
                Tanışmak İçin Bize Yazın
              </Link>
              <Link
                href="/hakkimizda"
                className="px-8 py-4 sm:px-10 sm:py-5 btn-secondary text-lg sm:text-xl md:text-2xl"
              >
                Nasıl Bir Eğitim Veriyoruz?
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll oku - SADECE masaüstünde (lg ve üstü) göster */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-16 border-4 border-mediumGreen/50 rounded-full flex justify-center">
          <div className="w-2 h-6 bg-mediumGreen/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}