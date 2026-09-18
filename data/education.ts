export interface EducationItem {
  key: string;
  years: string;
  school: string;
  field: { tr: string; en: string };
}

export const education: EducationItem[] = [
  {
    key: 'bulent-ecevit',
    years: '2022 — 2026',
    school: 'Bülent Ecevit Üniversitesi',
    field: { tr: 'Bilgisayar Mühendisliği · Zonguldak', en: 'Computer Engineering · Zonguldak' },
  },
  {
    key: 'ankara-nursing',
    years: '2020 — 2022',
    school: 'Ankara Hemşirelik',
    field: { tr: 'Hemşirelik · Ankara', en: 'Nursing · Ankara' },
  },
];