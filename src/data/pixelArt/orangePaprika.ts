import { fromAscii } from '@/lib/pixelArt';

const PALETTE = {
  '.': null,
  K: '#0a0a0a',
  R: '#f97316',
  D: '#c2410c',
  H: '#ffd8b5',
  G: '#1f6b2a',
  g: '#2e8b32',
};

const rows = [
  '................................',
  '................................',
  '................................',
  '...............gg...............',
  '...............GG...............',
  '...............GG...............',
  '..............gGGg..............',
  '............GGGGGGGG............',
  '..........GGGGGGGGGGGG..........',
  '.........GGGGGGGGGGGGGG.........',
  '.........KGGGGGGGGGGGGK.........',
  '......KKKRRRRRRRRRRRRRRKKK......',
  '....KKRRRRRRRRRRRRRRRRRRRRKK....',
  '...KRRRRRRRRRRRRRRRRRRRRRRRRK...',
  '...KRRHHRRRRRRRRRRRRRRRRRRRRK...',
  '...KRHHHHRRRRRRRRRRRRRRRRRRRK...',
  '...KRRHHRRRRRRRRRRRRRRRRRRRRK...',
  '....KRRRRRRRRRRRRRRRRRRRRRRK....',
  '....KRRRRRRRRRRRRRRRRRRRRDDK....',
  '.....KRRRRRRRRRRRRRRRRRRDDK.....',
  '......KRRRRRRRRRRRRRRRRDDK......',
  '......KRRRRRRKKRRRRKKRRRRK......',
  '.......KRRRRKKRRRRKKRRRRK.......',
  '.........KRRRKKRRKKRRRK.........',
  '..........KRRKKRRKKRRK..........',
  '...........KKKKKKKKKK...........',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

export const orangePaprika = fromAscii(rows, PALETTE);
