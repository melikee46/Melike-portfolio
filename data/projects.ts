export interface ProjectItem {
  key: string;
  title: { tr: string; en: string };
  desc: { tr: string; en: string };
  tags: string;
}

export const projects: ProjectItem[] = [
  {
    key: 'ownway',
    title: { tr: 'OwnWay', en: 'OwnWay' },
    desc: { tr: 'TÜBİTAK 2209 — proje lideri, backend’i sıfırdan kurdum', en: 'TÜBİTAK 2209 — project lead, built the backend from scratch' },
    tags: 'node.js · react native',
  },
  {
    key: 'serumnotify',
    title: { tr: 'Serumnotify', en: 'Serumnotify' },
    desc: { tr: 'IoT + bulut, EFIS 2026’da sunuldu', en: 'IoT + cloud, presented at EFIS 2026' },
    tags: 'iot · cloud',
  },
  {
    key: 'cleanbot',
    title: { tr: 'AI CleanBot', en: 'AI CleanBot' },
    desc: { tr: 'Otonom güneş paneli temizleme robotu', en: 'Autonomous solar-panel-cleaning robot' },
    tags: 'opencv · blynk',
  },
  {
    key: 'tile',
    title: { tr: 'Türk Çini Tespiti', en: 'Turkish Tile Detection' },
    desc: { tr: 'Geleneksel motiflerde nesne tespiti ve kompozisyon analizi', en: 'Object detection and composition analysis on traditional motifs' },
    tags: 'python · yolo',
  },
  {
    key: 'philosophy',
    title: { tr: 'Felsefe Öneri Platformu', en: 'Philosophy Suggestion Platform' },
    desc: { tr: 'Kural ve içerik tabanlı öneri motoru', en: 'Rule-based and content-based recommendation engine' },
    tags: 'rest api',
  },
  {
    key: 'padova',
    title: { tr: 'Bilgi Tazeliği Araştırması', en: 'Age of Information Research' },
    desc: { tr: 'Padova’da IEEE’de yayımlanan ortak yazarlı makale', en: 'Co-authored IEEE paper from Padova research' },
    tags: 'matlab · python',
  },
];