import { ReactNode } from 'react';

interface InterestCardProps {
  icon: ReactNode;
  label: string;
}

export default function InterestCard({ icon, label }: InterestCardProps) {
  return (
    <div className="bg-paper-deep border border-line rounded p-5 text-center">
      <div className="flex justify-center mb-2 text-sage-deep">{icon}</div>
      <div className="font-serif text-lg">{label}</div>
    </div>
  );
}