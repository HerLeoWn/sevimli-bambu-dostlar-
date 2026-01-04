// src/components/home/FeaturesSection.tsx
import { Heart, Leaf, Sparkles } from "lucide-react"; // lucide-react ikonları

export default function FeaturesSection() {
  const features = [
    {
      title: "Sevgi Dolu Ortam",
      desc: "Her çocuk özel ve değerlidir. Sıcak bir aile atmosferi sunuyoruz.",
      icon: Heart,
      color: "pastelPink",
    },
    {
      title: "Doğa Temalı Eğitim",
      desc: "Panda ve bambu ile öğrenmek eğlencelidir. Doğayı severek büyüsünler.",
      icon: Leaf,
      color: "mediumGreen",
    },
    {
      title: "Uzman ve Sevgi Dolu Kadro",
      desc: "Deneyimli, çocuk gelişimi uzmanı ve her şeyden önce çocukları çok seven bir öğretmenle yanınızdayız.",
      icon: Sparkles,
      color: "pastelYellow",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-lightGray/50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-headings text-darkGray dark:text-white mb-16">
          Neden <span className="text-mediumGreen">Biz?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card group hover:scale-105 transition-all duration-300"
              >
                {/* İkon - Renkli ve animasyonlu */}
                <div className="mb-8 flex justify-center">
                  <div className={`p-6 rounded-full bg-${feature.color}/20 group-hover:bg-${feature.color}/30 transition-colors duration-300`}>
                    <Icon 
                      className={`w-16 h-16 text-${feature.color} group-hover:scale-110 transition-transform duration-300`} 
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-headings text-darkGray dark:text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-lg text-darkGray/70 dark:text-white/70 leading-relaxed px-4">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}