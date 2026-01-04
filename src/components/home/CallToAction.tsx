// src/components/home/CallToAction.tsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-mediumGreen to-darkGreen relative overflow-hidden">
      {/* Arka plan yumuşak blur dekor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pastelPink rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-lightGreen rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-headings text-white mb-6">
          Çocuğunuzu Bambu Dostları Ailesine Davet Ediyoruz!
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Küçük, sevgi dolu bir grupta eşimle birlikte çocuklarınızın her birine özel ilgi gösteriyoruz. <br />
          Oyunla öğrenme, doğayla iç içe etkinlikler ve bol bol gülümseme... <br />
          Yerimiz sınırlı, çünkü her çocuğa gerçekten vakit ayırmak istiyoruz 🐼❤️
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/iletisim"
            className="px-10 py-5 bg-white text-mediumGreen font-headings text-2xl rounded-full shadow-2xl hover:shadow-pastelPink hover:scale-105 transition-all duration-300"
          >
            Tanışmak İçin Bize Yazın
          </Link>
          
          <Link
            href="/hakkimizda"
            className="px-10 py-5 bg-transparent border-4 border-white text-white font-headings text-2xl rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Nasıl Bir Eğitim Veriyoruz?
          </Link>
        </div>

        <p className="mt-10 text-lg text-white/80">
          Sınırlı kontenjanımız var, yerinizi ayırtmak için beklemeyin 🌿
        </p>
      </div>
    </section>
  );
}