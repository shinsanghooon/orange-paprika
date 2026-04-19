import { fromAscii } from '@/lib/pixelArt';

const PALETTE = {
  '.': null,
  K: '#0a0a0a',
  W: '#ffffff',
  B: '#1f2937',
  D: '#374151',
  G: '#0f1419',
  H: '#9ca3af',
  S: '#6b7280',
};

const rows = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '............KKKKKKKK............',
  '............KWWWWWWK............',
  '......KKKKKKKKKKKKKKKKKKKK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
  '......KBBBBBBDDDDDDBBBBBBK......',
  '......KBBBBBDGGGGGGDBBBBBK......',
  '......KBBBBDGGGGHHGGDBBBBK......',
  '......KBBBBDGGGGGGGGDBBBBK......',
  '......KBBBBDGGGGGGGGDBBBBK......',
  '......KBBBBDGGGGGGGGDBBBBK......',
  '......KBBBBBDGGGGGGDBBBBBK......',
  '......KBBBBBBDDDDDDBBBBBBK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
  '......KKKKKKKKKKKKKKKKKKKK......',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

export const rollback = fromAscii(rows, PALETTE);
