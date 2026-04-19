import { fromAscii, centered, emptyRow } from '@/lib/pixelArt';

const PALETTE = {
  '.': null,
  K: '#0a0a0a',
  R: '#e63d2a',
  D: '#a82a1a',
  H: '#ffd3c7',
  G: '#1f6b2a',
  g: '#2e8b32',
};

const rows = [
  emptyRow(),
  emptyRow(),
  emptyRow(),
  centered('GG'),
  centered('GGGG'),
  centered('GGggGG'),
  centered('GgggGG'),
  centered('GGggG'),
  centered('KKKKKKKKKKK'),
  centered('KKRRRRRRRRRRKK'),
  centered('KRRRRRRRRRRRRRRK'),
  centered('KRRRRHRRRRRRRRRRK'),
  centered('KRRHHHRRRRRRRRRRRK'),
  centered('KRRHRRRRRRRRRRRRRRK'),
  centered('KRRRRRRRRRRRRRRRRRRK'),
  centered('KRRRRRRRRRRRRRRRRRDK'),
  centered('KRRRRRRRRRRRRRRRRDDK'),
  centered('KRRRRRRRRRRRRRRRDDDK'),
  centered('KRRRRRRRRRRRRRRRDDDK'),
  centered('KRRRRRRRRRRRRRRDDDK'),
  centered('KRRRRRRRRRRRRRRDDK'),
  centered('KRRRRRRRRRRRRRDDK'),
  centered('KKRRRRRRRRRRRDKK'),
  centered('KKRRRRRRRRRRKK'),
  centered('KKRRRRRRRRKK'),
  centered('KKKKKKKKKK'),
  emptyRow(),
  emptyRow(),
  emptyRow(),
  emptyRow(),
  emptyRow(),
  emptyRow(),
];

export const orangePaprika = fromAscii(rows, PALETTE);
