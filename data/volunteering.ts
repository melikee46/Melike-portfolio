export interface VolunteerItem {
  key: string;
  title: string;
  tr: string;
  en: string;
}

export const volunteering: VolunteerItem[] = [
  {
    key: 'sisterup',
    title: 'SisterUp',
    tr: 'Genç kızlara mentorluk yaptım, kendi güçlerini fark etmelerine küçük bir eşlik ettim.',
    en: 'Mentored young girls, keeping them a little company as they discovered their own strength.',
  },
  {
    key: 'bpw',
    title: 'BPW · Business and Professional Women',
    tr: 'Kadın-erkek eşitliği ve eğitimde kapsayıcılık için gönüllü oldum.',
    en: 'Volunteered in support of gender equality and inclusive education.',
  },
  {
    key: 'hypatia',
    title: 'Hypatia',
    tr: 'Depremden etkilenen bir lise öğrencisine mentorluk yaptım.',
    en: 'Mentored a high school student affected by the earthquake.',
  },
  {
    key: 'tema',
    title: 'TEMA',
    tr: 'Çevre bilinci çalışmalarında organizasyon ekibindeydim.',
    en: 'Part of the organizing team for environmental awareness efforts.',
  },
  {
    key: 'aws',
    title: 'AWS',
    tr: 'Topluluk moderasyon ekibinin bir parçasıydım.',
    en: 'A member of the community moderation team.',
  },
];