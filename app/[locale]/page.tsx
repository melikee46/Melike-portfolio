import Timeline from '@/components/Timeline';
import InterestCard from '@/components/InterestCard';
import VolunteerItem from '@/components/VolunteerItem';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { interests } from '@/data/interests';
import { volunteering } from '@/data/volunteering';
import { BadmintonIcon, BasketballIcon, ColumnIcon, BookIcon, BrainIcon, HeartIcon } from '@/components/icons';

const iconMap = {
  badminton: BadmintonIcon,
  basketball: BasketballIcon,
  history: ColumnIcon,
  literature: BookIcon,
  philosophy: BrainIcon,
};

const content = {
  tr: {
    eyebrow: 'yazılım geliştirici · istanbul',
    hand: 'aynı ben, yeni bölüm',
    tagline: 'Yazılım geliştirici · kodla, sanat tarihiyle ve az biraz da merakla ilerliyorum. Nursing’ten bilgisayar mühendisliğine geçtim; o karardan hiç pişman olmadım.',
    scroll: 'kaydırarak keşfet ↓',
    aboutTitle: 'hakkımda',
    aboutP1: 'Aslında hemşirelik okuyordum  iki yılın sonunda anladım ki istediğim şey kod yazmak, bir şeyler kurmaktı. Bilgisayar mühendisliğine geçtim, ve bu güne kadarki en anlamlı kararımdı.',
    aboutP2: 'Teknolojiyi, sanat tarihini, Japon estetiğini, ve küçük şeylerin hayatı doldurmasını seviyorum.',
    facts: ['İstanbul, Türkiye', 'Bilgisayar Mühendisliği mezunu', 'Türkçe (anadil)'],
    experienceTitle: 'deneyim',
    interestsTitle: 'ilgi alanları',
    volunteeringTitle: 'gönüllülük',
    contactTitle: 'iletişim',
    contactText: 'Fırsatlar, iş birlikleri, ya da sadece samimi bir merhaba için ulaşmaktan çekinme.',
  },
  en: {
    eyebrow: 'software developer · istanbul',
    hand: 'same me, new chapter',
    tagline: 'Software developer · moving forward with code, a love for art history, and a fair amount of curiosity. I switched from nursing to computer engineering, and never looked back.',
    scroll: 'scroll to explore ↓',
    aboutTitle: 'about me',
    aboutP1: 'I actually started in nursing two years in, I realized what I really wanted was to write code and build things. I switched to computer engineering, and it’s still the most meaningful decision I’ve made.',
    aboutP2: 'I love technology, art history, Japanese aesthetics, and the small things that make life feel full.',
    facts: ['Istanbul, Türkiye', 'Computer Engineering graduate', 'Turkish (native)'],
    experienceTitle: 'experience',
    interestsTitle: 'interests',
    volunteeringTitle: 'volunteering',
    contactTitle: 'contact',
    contactText: 'Feel free to reach out for opportunities, collaborations, or just a friendly hello.',
  },
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const lang = locale as 'tr' | 'en';
  const t = content[lang];

  const workItems = experience.map((item) => ({
    year: item.year,
    title: item.role[lang],
    subtitle: `${item.org} · ${item.location[lang]}`,
    description: item.description[lang],
  }));

  const eduItems = education.map((item) => ({
    year: item.years,
    title: item.school,
    subtitle: item.field[lang],
  }));

  return (
    <div className="space-y-16 pb-20">
      <section id="home" className="pt-20 pb-16 px-6 md:px-8">
        <div className="font-mono text-xs text-sage mb-4">{t.eyebrow}</div>
        <div className="font-hand text-2xl text-sage-deep -rotate-1 mb-4">{t.hand}</div>
        <h1 className="font-serif text-5xl md:text-6xl font-medium">Melike Arslan</h1>
        <p className="mt-5 text-ink-soft max-w-[48ch]">{t.tagline}</p>
        <div className="mt-10 font-hand text-lg text-sage">{t.scroll}</div>
      </section>

      <section id="about" className="px-6 md:px-8 py-8 scroll-mt-24">
        <h2 className="font-serif text-3xl mb-6">{t.aboutTitle}</h2>
        <p className="text-ink-soft max-w-[54ch] mb-4">{t.aboutP1}</p>
        <p className="text-ink-soft max-w-[54ch] mb-6">{t.aboutP2}</p>
        <ul className="flex flex-col gap-2 text-sm text-ink-soft">
          {t.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>

      <section id="experience" className="px-6 md:px-8 py-8 scroll-mt-24">
        <h2 className="font-serif text-3xl mb-8">{t.experienceTitle}</h2>
        <Timeline items={workItems} />

        <div className="font-hand text-xl text-sage-deep my-10">
          {lang === 'tr' ? 'farklı yollar, aynı ben' : 'different paths, same me'}
        </div>
        <Timeline items={eduItems} />
      </section>

      <section id="interests" className="px-6 md:px-8 py-8 scroll-mt-24">
        <h2 className="font-serif text-3xl mb-8">{t.interestsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((item) => {
            const Icon = iconMap[item.icon];
            return <InterestCard key={item.key} icon={<Icon className="w-7 h-7" />} label={item[lang]} />;
          })}
        </div>
      </section>

      <section id="volunteering" className="px-6 md:px-8 py-8 scroll-mt-24">
        <h2 className="font-serif text-3xl mb-8">{t.volunteeringTitle}</h2>
        <div className="flex flex-col gap-6">
          {volunteering.map((item) => (
            <VolunteerItem key={item.key} icon={<HeartIcon />} title={item.title} description={item[lang]} />
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 md:px-8 py-8 scroll-mt-24">
        <h2 className="font-serif text-3xl mb-6">{t.contactTitle}</h2>
        <p className="text-ink-soft max-w-[44ch] mb-6">{t.contactText}</p>
        <div className="flex flex-col gap-2">
          <a href="mailto:melikearslan.dev@gmail.com" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">melikearslan.dev@gmail.com</a>
          <a href="https://www.linkedin.com/in/melikearslan1/" target="_blank" rel="noreferrer" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">LinkedIn / melike-arslan</a>
          <a href="https://github.com/melikee46" target="_blank" rel="noreferrer" className="font-mono border-b border-line w-fit hover:text-sage-deep hover:border-sage-deep">GitHub / melikee46</a>
        </div>
      </section>
    </div>
  );
}