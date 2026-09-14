interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="border-l border-line pl-6 flex flex-col gap-8">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <span className="absolute -left-[1.9rem] top-1 w-2 h-2 rounded-full bg-sage" />
          <div className="font-mono text-xs text-sage-deep mb-1">{item.year}</div>
          <div className="font-serif text-lg mb-0.5">{item.title}</div>
          {item.subtitle && <div className="text-sm text-ink-soft mb-1">{item.subtitle}</div>}
          {item.description && <div className="text-sm text-ink-soft max-w-[50ch]">{item.description}</div>}
        </div>
      ))}
    </div>
  );
}