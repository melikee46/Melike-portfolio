'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const otherLocale = currentLocale === 'tr' ? 'en' : 'tr';
  const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      className="font-mono text-xs border border-line rounded-full px-3 py-1 hover:border-sage-deep hover:text-sage-deep transition-colors"
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}