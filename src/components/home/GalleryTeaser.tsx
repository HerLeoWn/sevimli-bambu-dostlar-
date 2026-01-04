// src/components/home/GalleryTeaser.tsx
import Image from "next/image";
import Link from "next/link";

export default function GalleryTeaser() {
  // Placeholder resimler – ileride gerçek fotoğraflarla değiştirirsin
  const photos = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];

  return (
    <section className="py-16 bg-white dark:bg-darkGray">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-headings text-darkGray dark:text-white mb-4">
          Galeriden <span className="text-mediumGreen">Kareler</span>
        </h2>
        <p className="text-lg text-darkGray/70 dark:text-white/70 mb-12 max-w-2xl mx-auto">
          Çocuklarımızın mutluluğunu, oyunlarını ve öğrenme anlarını yakalıyoruz 🐼🎋
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Gerçek resimler eklenene kadar placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-lightGreen to-mediumGreen/50 flex items-center justify-center">
                <span className="text-white text-2xl font-headings">Foto {index + 1}</span>
              </div>
              {/* Gerçek resim ekleyince bunu aç: */}
              {/* <Image
                src={src}
                alt={`Galeri fotoğraf ${index + 1}`}
                fill
                className="object-cover"
              /> */}
            </div>
          ))}
        </div>

        <Link
          href="/galeri"
          className="mt-12 inline-block btn-primary"
        >
          Tüm Galeriyi Gör
        </Link>
      </div>
    </section>
  );
}