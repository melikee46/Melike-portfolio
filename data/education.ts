export interface EducationItem {
  key: string;
  years: string;
  school: string;
  field: { tr: string; en: string };
}

export const education: EducationItem[] = [
  {
    key: 'bulent-ecevit',
    years: '2023 —',
    school: 'Bülent Ecevit Üniversitesi',
    field: { tr: 'Bilgisayar Mühendisliği · Zonguldak', en: 'Computer Engineering · Zonguldak' },
  },
  {
    key: 'gulhane',
    years: '2021 — 2023',
    school: 'Sağlık Bilimleri Üniversitesi, Gülhane',
    field: { tr: 'Hemşirelik (transfer öncesi) · Ankara', en: 'Nursing (before transferring) · Ankara' },
  },
];