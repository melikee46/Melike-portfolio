import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import LocaleSwitcher from '../../components/LocaleSwitcher';
import '../globals.css';

const locales = ['tr', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Melike Arslan',
  description: 'Software developer — art history, Japanese aesthetics, and code.',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = locale === 'tr'
    ? { home: 'anasayfa', about: 'hakkımda', work: 'deneyim', interests: 'ilgi alanları', volunteering: 'gönüllülük', blog: 'günlük', contact: 'iletişim' }
    : { home: 'home', about: 'about', work: 'work', interests: 'interests', volunteering: 'volunteering', blog: 'blog', contact: 'contact' };

  return (
    <html lang={locale}>
      <body className="bg-paper text-ink font-sans">
        <NextIntlClientProvider messages={messages}>
          <header className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-line sticky top-0 bg-paper z-10">
            <span className="font-serif text-lg">melike arslan</span>
            <nav className="flex items-center gap-5 text-sm text-ink-soft">
              <a href={`/${locale}`}>{t.home}</a>
              <a href={`/${locale}/about`}>{t.about}</a>
              <a href={`/${locale}/work`}>{t.work}</a>
              <a href={`/${locale}/interests`}>{t.interests}</a>
              <a href={`/${locale}/volunteering`}>{t.volunteering}</a>
              <a href={`/${locale}/blog`}>{t.blog}</a>
              <a href={`/${locale}/contact`}>{t.contact}</a>
              <LocaleSwitcher currentLocale={locale} />
            </nav>
          </header>
          <main className="max-w-3xl mx-auto">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}