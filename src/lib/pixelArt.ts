export type Pixel = string | null;
export type PixelGrid = Pixel[][];

export const GRID_SIZE = 32;

export function fromAscii(
  rows: string[],
  palette: Record<string, string | null>,
  size = GRID_SIZE,
): PixelGrid {
  if (rows.length !== size) {
    throw new Error(`fromAscii: expected ${size} rows, got ${rows.length}`);
  }
  return rows.map((line, rowIdx) => {
    if (line.length !== size) {
      throw new Error(
        `fromAscii: row ${rowIdx} has ${line.length} cols, expected ${size}`,
      );
    }
    return line.split('').map((ch) => {
      if (!(ch in palette)) {
        throw new Error(`fromAscii: no palette entry for "${ch}"`);
      }
      return palette[ch];
    });
  });
}

export function centered(content: string, size = GRID_SIZE): string {
  if (content.length > size) {
    throw new Error(`centered: content length ${content.length} > ${size}`);
  }
  const left = Math.floor((size - content.length) / 2);
  return '.'.repeat(left) + content + '.'.repeat(size - content.length - left);
}

export function row(
  content: string,
  leftPad = 0,
  size = GRID_SIZE,
): string {
  const right = size - content.length - leftPad;
  if (right < 0) {
    throw new Error(`row: content + leftPad ${content.length + leftPad} > ${size}`);
  }
  return '.'.repeat(leftPad) + content + '.'.repeat(right);
}

export function emptyRow(size = GRID_SIZE): string {
  return '.'.repeat(size);
}

export function emptyGrid(size = GRID_SIZE): PixelGrid {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => null as Pixel),
  );
}
