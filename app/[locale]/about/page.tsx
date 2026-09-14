const content = {
  tr: {
    title: 'hakkımda',
    p1: 'Aslında hemşirelik okuyordum  iki yılın sonunda anladım ki istediğim şey kod yazmak, bir şeyler kurmaktı. Bilgisayar mühendisliğine geçtim, ve bu güne kadarki en anlamlı kararımdı.',
    p2: 'Teknolojiyi, sanat tarihini, Japon estetiğini, ve küçük şeylerin hayatı doldurmasını seviyorum.',
    facts: ['İstanbul, Türkiye', 'Bilgisayar Mühendisliği mezunu', 'Türkçe (anadil)'],
  },
  en: {
    title: 'about me',
    p1: 'I actually started in nursing two years in, I realized what I really wanted was to write code and build things. I switched to computer engineering, and it’s still the most meaningful decision I’ve made.',
    p2: 'I love technology, art history, Japanese aesthetics, and the small things that make life feel full.',
    facts: ['Istanbul, Türkiye', 'Computer Engineering graduate', 'Turkish (native)'],
  },
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = content[locale as 'tr' | 'en'];

  return (
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-6">{t.title}</h1>
      <p className="text-ink-soft max-w-[54ch] mb-4">{t.p1}</p>
      <p className="text-ink-soft max-w-[54ch] mb-6">{t.p2}</p>
      <ul className="flex flex-col gap-2 text-sm text-ink-soft">
        {t.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
