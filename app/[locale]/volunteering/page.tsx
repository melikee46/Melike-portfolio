import VolunteerItem from '@/components/VolunteerItem';
import { volunteering } from '@/data/volunteering';
import { HeartIcon } from '@/components/icons';

export default function VolunteeringPage({ params: { locale } }: { params: { locale: string } }) {
  const lang = locale as 'tr' | 'en';

  return (
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-8">{lang === 'tr' ? 'gönüllülük' : 'volunteering'}</h1>
      <div className="flex flex-col gap-6">
        {volunteering.map((item) => (
          <VolunteerItem key={item.key} icon={<HeartIcon />} title={item.title} description={item[lang]} />
        ))}
      </div>
    </section>
  );
}