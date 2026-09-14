import InterestCard from '@/components/InterestCard';
import { interests } from '@/data/interests';
import { BadmintonIcon, BasketballIcon, ColumnIcon, BookIcon, BrainIcon } from '@/components/icons';

const iconMap = {
  badminton: BadmintonIcon,
  basketball: BasketballIcon,
  history: ColumnIcon,
  literature: BookIcon,
  philosophy: BrainIcon,
};

export default function InterestsPage({ params: { locale } }: { params: { locale: string } }) {
  const lang = locale as 'tr' | 'en';

  return (
    <section className="py-16 px-6 md:px-8">
      <h1 className="font-serif text-3xl mb-8">{lang === 'tr' ? 'ilgi alanları' : 'interests'}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((item) => {
          const Icon = iconMap[item.icon];
          return <InterestCard key={item.key} icon={<Icon className="w-7 h-7" />} label={item[lang]} />;
        })}
      </div>
    </section>
  );
}
