import type { PixelGrid } from '@/lib/pixelArt';
import { orangePaprika } from './pixelArt/orangePaprika';
import { stufftory } from './pixelArt/stufftory';
import { rollback } from './pixelArt/rollback';
import { interpreted } from './pixelArt/interpreted';

export type ProductLink = {
  label: string;
  href: string;
};

export type Product = {
  number: string;
  name: string;
  slogan: string;
  description: string;
  pixelArt: PixelGrid;
  link?: ProductLink;
};

export const products: Product[] = [
  {
    number: '01',
    name: 'Orange Paprika',
    slogan: 'A studio of small obsessions',
    description:
      '일상의 작은 마찰을 만지작거리는 1인 스튜디오. 한 번에 하나씩, 진심으로 만듭니다.',
    pixelArt: orangePaprika,
  },
  {
    number: '02',
    name: 'Stufftory',
    slogan: '기억을 다시 살아나게 만드는 앱',
    description:
      '물건은 단순한 소유가 아니라 시간과 감정을 담는 매개체. Stufftory는 일상의 물건을 조용히 정리하고, 그 안에 묻혀있던 이야기를 다시 꺼내봅니다.',
    pixelArt: stufftory,
    link: {
      label: 'App Store',
      href: 'https://apps.apple.com/kr/app/stufftory/id6746079861',
    },
  },
  {
    number: '03',
    name: 'Rollback',
    slogan: '찍는 순간보다,\n기다리는 시간',
    description:
      '링크 하나로 친구를 초대해 같은 롤을 함께 채웁니다. 서로 다른 시선이 한 롤에 담기고, 6~24시간이 지나야 비로소 결과를 볼 수 있는 카메라.',
    pixelArt: rollback,
    link: {
      label: 'App Store',
      href: 'https://apps.apple.com/kr/app/rollback-%ED%95%A8%EA%BB%98-%EC%B0%8D%EB%8A%94-%EC%82%AC%EC%A7%84/id6757157705',
    },
  },
  {
    number: '04',
    name: 'Interpreted',
    slogan: '원문은 사라지고,\n해석만 남는다',
    description:
      '당신의 글은 24시간 후 사라지고, AI가 압축한 해석만 카드로 남습니다. 시간이 흐르면 비슷한 카드들은 하나의 정체성으로 합쳐집니다.',
    pixelArt: interpreted,
    link: { label: 'Visit', href: 'https://interpreted-six.vercel.app/' },
  },
];
