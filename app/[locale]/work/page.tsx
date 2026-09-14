import Timeline from '@/components/Timeline';
import { experience } from '@/data/experience';
import { education } from '@/data/education';

export default function WorkPage({ params: { locale } }: { params: { locale: string } }) {
  const lang = locale as 'tr' | 'en';

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
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-8">{lang === 'tr' ? 'deneyim' : 'experience'}</h1>
      <Timeline items={workItems} />

      <div className="font-hand text-xl text-sage-deep my-10">
        {lang === 'tr' ? 'farklı yollar, aynı ben' : 'different paths, same me'}
      </div>
      <Timeline items={eduItems} />
    </section>
  );
}