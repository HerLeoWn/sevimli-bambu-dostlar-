// src/data/pages.tsx   ← Uzantı .tsx OLDU!
import { ReactNode } from "react";

export type PageContent = {
  title: string;
  description: string;
  heroImage?: string;
  content: ReactNode;
};

export const pagesData: Record<string, PageContent> = {
  hakkimizda: {
    title: "Hakkımızda",
    description: "Sevimli Bambu Dostları Anaokulu'nun hikayesi, misyonu ve vizyonu.",
    heroImage: "/hakkimizda-hero.png",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-headings text-mediumGreen">Biz Kimiz?</h2>
        <p className="text-lg leading-relaxed">
          Sevimli Bambu Dostları Anaokulu olarak, panda temalı eğlenceli bir öğrenme ortamı sunuyoruz. 
          Çocuklar bambu ormanında oynarken doğal yollarla öğrenir, keşfeder ve gelişir.
        </p>
        <p className="text-lg leading-relaxed">
          Amacımız, her çocuğun kendini özel hissettiği, sevgi dolu ve güvenilir bir ortam yaratmak.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="card">
            <h3 className="text-2xl font-headings mb-4 text-mediumGreen">Misyonumuz</h3>
            <p>Her çocuğun bireysel potansiyelini keşfetmesine yardımcı olmak, 
               özgüvenli ve mutlu bireyler yetiştirmek.</p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-headings mb-4 text-mediumGreen">Vizyonumuz</h3>
            <p>Doğayı seven, yaratıcı düşünen ve paylaşımcı nesiller yetiştirmek.</p>
          </div>
        </div>
      </div>
    ),
  },

  programlar: {
    title: "Programlarımız",
    description: "Yaş gruplarına özel eğitim programlarımız ve günlük akış.",
    heroImage: "/programlar-hero.png",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-headings text-mediumGreen">Eğitim Programlarımız</h2>
        <p className="text-lg leading-relaxed">
          3-6 yaş arası çocuklar için özel olarak tasarlanmış, oyun temelli programlar sunuyoruz.
        </p>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Panda Grubu (3-4 yaş)</li>
          <li>Bambu Grubu (4-5 yaş)</li>
          <li>Dostlar Grubu (5-6 yaş)</li>
        </ul>
        <p className="text-lg mt-8">
          Günlük akışımızda serbest oyun, sanat etkinlikleri, müzik, hareket ve doğa keşfi yer alır.
        </p>
      </div>
    ),
  },

  galeri: {
    title: "Galeri",
    description: "Okulumuzdan eğlenceli kareler ve etkinlik fotoğrafları.",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-headings text-mediumGreen">Fotoğraf Galerisi</h2>
        <p className="text-lg text-center">Yakında birbirinden güzel fotoğraflar burada olacak! 🐼</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Gerçek fotoğraflar eklenene kadar placeholder */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-lightGray dark:bg-darkGray/50 border-2 border-dashed border-mediumGreen rounded-xl h-64 flex items-center justify-center">
              <span className="text-mediumGreen text-xl">Fotoğraf {i}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  blog: {
    title: "Blog",
    description: "Çocuk gelişimi, etkinlik fikirleri ve ebeveyn rehberi.",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-headings text-mediumGreen">Blog Yazıları</h2>
        <p className="text-lg text-center">Ebeveynler için faydalı içerikler yakında burada!</p>
      </div>
    ),
  },

  iletisim: {
    title: "İletişim",
    description: "Bize ulaşın, tur rezervasyonu yapın veya soru sorun.",
    heroImage: "/iletisim-hero.png",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-headings text-mediumGreen">Bize Ulaşın</h2>
        <p className="text-lg text-center mb-12">
          Sorularınız mı var? Okulumuzu ziyaret etmek mi istiyorsunuz? 
          Size en kısa sürede dönüş yapalım!
        </p>
        {/* Formu sonra ekleyeceğiz */}
        <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-darkGray rounded-2xl shadow-xl text-center">
          <p className="text-xl">İletişim formu yakında aktif olacak! 📧</p>
        </div>
      </div>
    ),
  },
};