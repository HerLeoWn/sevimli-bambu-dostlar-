// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { pagesData } from "../../data/pages";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// Dinamik metadata (SEO için çok önemli!)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pagesData[params.slug];

  if (!page) {
    return {
      title: "Sayfa Bulunamadı",
    };
  }

  return {
    title: `${page.title} | Sevimli Bambu Dostları Anaokulu`,
    description: page.description,
  };
}

export default function DynamicPage({ params }: Props) {
  const page = pagesData[params.slug];

  if (!page) {
    notFound(); // 404 sayfası göster
  }

  return (
    <>
      {/* Hero Bölümü */}
      {page.heroImage && (
        <section className="relative h-96 overflow-hidden">
          <Image
            src={page.heroImage}
            alt={page.title}
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 h-full flex items-end pb-12">
            <h1 className="text-5xl md:text-6xl font-headings text-white">
              {page.title}
            </h1>
          </div>
        </section>
      )}

      {/* İçerik */}
      <section className="py-16 bg-lightGray/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          {!page.heroImage && (
            <h1 className="text-5xl font-headings text-center text-mediumGreen mb-12">
              {page.title}
            </h1>
          )}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {page.content}
          </div>
        </div>
      </section>
    </>
  );
}

// src/app/[slug]/page.tsx en alta ekle
export async function generateStaticParams() {
  return Object.keys(pagesData).map((slug) => ({
    slug,
  }));
}