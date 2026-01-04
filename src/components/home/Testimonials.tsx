// src/components/home/Testimonials.tsx
export default function Testimonials() {
  const reviews = [
    {
      name: "Ayşe Yılmaz",
      child: "Efe (4 yaş)",
      text: "Oğlum okula gitmek için sabahları beni uyandırıyor! Panda teması ve öğretmenlerin ilgisi harika.",
      rating: 5,
    },
    {
      name: "Mehmet Demir",
      child: "Zeynep (5 yaş)",
      text: "Kızım burada hem eğleniyor hem öğreniyor. Doğaya duyarlı bir eğitim vermeleri çok değerli.",
      rating: 5,
    },
    {
      name: "Elif Kaya",
      child: "Ali (3 yaş)",
      text: "İlk kez okul korkusu yaşamadı. Sıcak, güven dolu bir ortam. Teşekkürler Bambu Dostları!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-lightGray/50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-headings text-center text-darkGray dark:text-white mb-12">
          Velilerimiz <span className="text-mediumGreen">Ne Diyor?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="card relative overflow-hidden"
            >
              {/* Panda balonu dekor */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pastelPink/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-mediumGreen/10 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-darkGray/80 dark:text-white/80">
                  "{review.text}"
                </p>
                <div className="border-t border-mediumGreen/20 pt-4">
                  <p className="font-headings text-mediumGreen">{review.name}</p>
                  <p className="text-sm text-darkGray/60 dark:text-white/60">
                    {review.child}'in velisi
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}