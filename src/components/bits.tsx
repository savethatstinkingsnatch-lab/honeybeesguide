import type { ReactNode } from "react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Plate({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg bg-comb object-cover" />
      <figcaption className="mt-3 text-sm italic leading-snug text-muted">{caption}</figcaption>
    </figure>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-sm font-semibold tracking-wide text-honey-deep uppercase">
      {children}
    </p>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-4 border-honey bg-honey-soft px-5 py-4">
      <p className="font-display text-lg font-semibold text-ink">{title}</p>
      <div className="mt-2 text-ink">{children}</div>
    </aside>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-display text-3xl font-semibold text-ink">{children}</h2>;
}
