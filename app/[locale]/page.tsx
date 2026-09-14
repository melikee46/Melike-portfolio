const content = {
  tr: {
    eyebrow: 'yazılım geliştirici · istanbul',
    hand: 'aynı ben, yeni bölüm',
    tagline: 'Yazılım geliştirici · kodla, sanat tarihiyle ve az biraz da merakla ilerliyorum. Nursing’ten bilgisayar mühendisliğine geçtim; o karardan hiç pişman olmadım.',
    scroll: 'kaydırarak keşfet ↓',
  },
  en: {
    eyebrow: 'software developer · istanbul',
    hand: 'same me, new chapter',
    tagline: 'Software developer · moving forward with code, a love for art history, and a fair amount of curiosity. I switched from nursing to computer engineering, and never looked back.',
    scroll: 'scroll to explore ↓',
  },
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = content[locale as 'tr' | 'en'];

  return (
    <section className="pt-20 pb-16 px-6 md:px-8">
      <div className="font-mono text-xs text-sage mb-4">{t.eyebrow}</div>
      <div className="font-hand text-2xl text-sage-deep -rotate-1 mb-4">{t.hand}</div>
      <h1 className="font-serif text-5xl md:text-6xl font-medium">Melike Arslan</h1>
      <p className="mt-5 text-ink-soft max-w-[48ch]">{t.tagline}</p>
      <div className="mt-10 font-hand text-lg text-sage">{t.scroll}</div>
    </section>
  );
}