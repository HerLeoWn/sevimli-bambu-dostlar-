// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lightGray/50 dark:bg-darkGray/50 mt-auto">
      {/* Üst bambu dalga dekoru */}
      <div className="w-full bg-mediumGreen/10 dark:bg-lightGreen/10 py-8 relative overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 Q720,0 1440,100 L1440,100 Z" fill="#C8E6C9" opacity="0.3" />
        </svg>
        {/* Opsiyonel küçük panda dekoru (public/small-panda.png koyarsan) */}
        {/* <Image src="/small-panda.png" alt="" width={100} height={100} className="absolute bottom-0 left-10 opacity-50" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sol - Logo & Samimi Yazı */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="Sevimli Bambu Dostları Logo"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="text-3xl font-headings text-darkGray dark:text-white">
                  Sevimli Bambu Dostları
                </h3>
                <p className="text-lg font-body text-mediumGreen">Anaokulu</p>
              </div>
            </div>
            <p className="text-darkGray/70 dark:text-white/70 max-w-md">
  Küçük bir aile ortamında, her çocuğa özel ilgiyle eğitim veriyoruz. 
  Sınırlı kontenjanımız var, tanışmak için bize ulaşın 🐼❤️
</p>
          </div>

          {/* Sağ - İletişim & Sosyal Medya */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-2xl font-headings text-darkGray dark:text-white mb-6">
              Bize Ulaşın
            </h4>
            <ul className="space-y-4 mb-8 text-center md:text-right">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-mediumGreen flex-shrink-0" />
                <span className="text-darkGray/80 dark:text-white/80">
                  Örnek Mahalle, Bambu Sokak No:42<br />İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-mediumGreen flex-shrink-0" />
                <span className="text-darkGray/80 dark:text-white/80">+90 555 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-mediumGreen flex-shrink-0" />
                <span className="text-darkGray/80 dark:text-white/80">info@sevimlibambudostlari.com</span>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-mediumGreen/20 hover:bg-mediumGreen text-mediumGreen hover:text-white transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-mediumGreen/20 hover:bg-mediumGreen text-mediumGreen hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 rounded-full bg-mediumGreen/20 hover:bg-mediumGreen text-mediumGreen hover:text-white transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-mediumGreen/20 py-6 text-center">
        <p className="text-sm text-darkGray/60 dark:text-white/60">
          © {new Date().getFullYear()} Sevimli Bambu Dostları Anaokulu. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}