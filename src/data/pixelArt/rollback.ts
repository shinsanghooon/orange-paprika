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
  '............KKKKKK..............',
  '............KWWWWK..............',
  '......KKKKKKKKKKKKKKKKKKKK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
  '......KBBBBKKKKKKKKKKBBBBK......',
  '......KBBBKDDDDDDDDDDKBBBK......',
  '......KBBKDGGGGGGGGGGDKBBK......',
  '......KBBKDGGWWGGGGGGDKBBK......',
  '......KBBKDGGWWGGGGGGDKBBK......',
  '......KBBKDGGGGGGGGGGDKBBK......',
  '......KBBKDGGGGGGGGGGDKBBK......',
  '......KBBKDGGGGGGGGGGDKBBK......',
  '......KBBBKDDDDDDDDDDKBBBK......',
  '......KBBBBKKKKKKKKKKBBBBK......',
  '......KBBBBBBBBBBBBBBBBBBK......',
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
];

export const rollback = fromAscii(rows, PALETTE);
