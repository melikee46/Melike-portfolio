import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
});

export const config = {
  // favicon, _next (Next.js'in kendi dosyaları) ve api route'larını
  // locale yönlendirmesinin dışında tutuyoruz — favicon hatasının kaynağı buydu
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};