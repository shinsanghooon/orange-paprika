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
  '................................',
  '................................',
  '................................',
  '...............KKK..............',
  '..............KKGGK.............',
  '..............KGGK..............',
  '.............KGGGK..............',
  '...........KKGGGGGKK............',
  '........KRRRRRGGGGRRRRRK........',
  '......KRRRRRRRRGGRRRRRRRRK......',
  '.....KRRRRRRRRRRRRRRRRRRRRK.....',
  '.....KRRRRRRRRRRRRRRRRRRRRK.....',
  '.....KRRHHRRRRRRRRRRRRRRRRK.....',
  '.....KRHHHHRRRRRRRRRRRRRRRK.....',
  '.....KRRHHRRRRRRRRRRRRRRRRK.....',
  '.....KRRRRRRRRRRRRRRRRRRRRK.....',
  '.....KRRRRRRRRRRRRRRRRRRDDK.....',
  '.....KRRRRRRRRRRRRRRRRRDDDK.....',
  '......KRRRRRKKRRRRKKRRRRRK......',
  '......KRRRRRKKRRRRKKRRRRDK......',
  '.......KRRRRKKRRRRKKRRRRK.......',
  '........KRRRKKRRRRKKRRRK........',
  '.........KRRKKRRRRKKRRK.........',
  '..........KRRKKRRKKRRK..........',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

export const orangePaprika = fromAscii(rows, PALETTE);
