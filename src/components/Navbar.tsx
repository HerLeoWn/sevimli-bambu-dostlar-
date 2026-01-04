// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeStore } from "../stores/themeStore";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Anasayfa", "Hakkımızda", "Programlar", "Galeri", "Blog", "İletişim"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-darkGray/80 backdrop-blur-md shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo & İsim */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="Sevimli Bambu Dostları Logo"
                fill
                className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Menü */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Anasayfa" ? "/" : `/${item.toLowerCase().replace("ı", "i")}`}
                  className="text-lg font-body text-darkGray/80 dark:text-white/80 hover:text-mediumGreen dark:hover:text-lightGreen transition-colors relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-mediumGreen rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Sağ Taraf: Theme Toggle + Mobil Hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-lightGray dark:bg-darkGray/50 hover:bg-mediumGreen/20 dark:hover:bg-lightGreen/20 transition-all duration-300 group"
              aria-label="Tema değiştir"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {theme === "light" ? (
                  <Moon className="w-6 h-6 text-darkGray group-hover:text-mediumGreen transition-colors" />
                ) : (
                  <Sun className="w-6 h-6 text-white group-hover:text-pastelYellow transition-colors" />
                )}
              </motion.div>
            </button>

            {/* Mobil Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-full hover:bg-mediumGreen/20 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-darkGray dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-darkGray dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobil Menü Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-darkGray shadow-2xl z-50 md:hidden flex flex-col"
            >
              {/* Sidebar Başlık */}
              <div className="p-6 border-b border-mediumGreen/20 flex items-center justify-between">
                <span className="text-2xl font-headings text-mediumGreen">Menü</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-mediumGreen/20"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobil Menü Linkleri */}
              <ul className="flex-1 p-6 space-y-4">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Anasayfa" ? "/" : `/${item.toLowerCase().replace("ı", "i")}`}
                      className="block py-3 text-xl font-body text-darkGray dark:text-white hover:text-mediumGreen dark:hover:text-lightGreen transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Sidebar Alt - Küçük Panda Dekoru (isteğe bağlı) */}
              <div className="p-6 text-center opacity-30">
                <span className="text-sm">🐼 Bambu Dostları ile mutluluk</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}