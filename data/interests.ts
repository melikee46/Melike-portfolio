export interface InterestItem {
  key: string;
  tr: string;
  en: string;
  icon: 'badminton' | 'basketball' | 'history' | 'literature' | 'philosophy';
}

export const interests: InterestItem[] = [
  { key: 'badminton', tr: 'badminton', en: 'badminton', icon: 'badminton' },
  { key: 'basketball', tr: 'basketbol', en: 'basketball', icon: 'basketball' },
  { key: 'history', tr: 'sanat tarihi', en: 'art history', icon: 'history' },
  { key: 'literature', tr: 'edebiyat', en: 'literature', icon: 'literature' },
  { key: 'philosophy', tr: 'felsefe & psikoloji', en: 'philosophy & psychology', icon: 'philosophy' },
];