export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] py-6 text-[11px] tracking-[0.2em] uppercase">
      <span className="font-medium">Orange Paprika</span>
      <a
        href="mailto:hello@orangepaprika.studio"
        className="transition-opacity hover:opacity-60"
      >
        Let&apos;s Talk
      </a>
    </header>
  );
}
