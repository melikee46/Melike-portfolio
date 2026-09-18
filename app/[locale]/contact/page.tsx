const content = {
  tr: { title: 'iletişim', p: 'Fırsatlar, iş birlikleri, ya da sadece samimi bir merhaba için ulaşmaktan çekinme.' },
  en: { title: 'contact', p: 'Feel free to reach out for opportunities, collaborations, or just a friendly hello.' },
};

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = content[locale as 'tr' | 'en'];

  return (
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-6">{t.title}</h1>
      <p className="text-ink-soft max-w-[44ch] mb-6">{t.p}</p>
      <div className="flex flex-col gap-2">
        <a href="mailto:melikearslan.dev@gmail.com" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">melikearslan.dev@gmail.com</a>
        <a href="https://www.linkedin.com/in/melikearslan1/" target="_blank" rel="noreferrer" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">LinkedIn / melike-arslan</a>
        <a href="https://github.com/melikee46" target="_blank" rel="noreferrer" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">GitHub / melikee46</a>
      </div>
    </section>
  );
}
