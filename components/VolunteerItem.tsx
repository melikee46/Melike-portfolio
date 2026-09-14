import type { ReactNode } from 'react';

type VolunteerItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function VolunteerItem({ icon, title, description }: VolunteerItemProps) {
  return (
    <article className="flex items-start gap-4 rounded-xl border border-line bg-white/40 p-4 shadow-sm">
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-sage-soft text-sage-deep">
        {icon}
      </div>
      <div className="space-y-1">
        <h2 className="font-serif text-xl text-ink-deep">{title}</h2>
        <p className="text-sm leading-6 text-ink-soft">{description}</p>
      </div>
    </article>
  );
}
