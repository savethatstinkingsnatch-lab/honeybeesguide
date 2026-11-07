import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CHAPTERS, type ChapterId } from "@/book/data";
import { useBook } from "@/book/store";
import { cn } from "@/components/bits";
import { Colony, Cover, Glossary, Harvest, Health, Hive, Inspect, Notes, Year } from "@/components/chapters";
import { Forage } from "@/components/forage";

function ChapterBody({
  chapter,
  onChapter,
}: {
  chapter: ChapterId;
  onChapter: (id: ChapterId) => void;
}) {
  switch (chapter) {
    case "cover":
      return <Cover onChapter={onChapter} />;
    case "colony":
      return <Colony />;
    case "hive":
      return <Hive />;
    case "year":
      return <Year onChapter={onChapter} />;
    case "inspect":
      return <Inspect />;
    case "health":
      return <Health />;
    case "forage":
      return <Forage />;
    case "harvest":
      return <Harvest />;
    case "glossary":
      return <Glossary />;
    case "notes":
      return <Notes />;
  }
}

function Contents({
  chapter,
  onPick,
}: {
  chapter: ChapterId;
  onPick: (id: ChapterId) => void;
}) {
  return (
    <nav aria-label="Contents" className="flex flex-col gap-1">
      {CHAPTERS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onPick(item.id)}
          className={cn(
            "flex min-h-11 items-baseline gap-3 px-3 text-left",
            chapter === item.id ? "bg-honey text-ink" : "text-page",
          )}
        >
          <span className="w-6 font-display text-sm">{item.numeral}</span>
          <span className="font-display text-lg">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export function BookApp({
  chapter,
  onChapter,
}: {
  chapter: ChapterId;
  onChapter: (id: ChapterId) => void;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    void useBook.persist.rehydrate();
  }, []);

  const index = CHAPTERS.findIndex((item) => item.id === chapter);
  const current = CHAPTERS[index] ?? CHAPTERS[0];
  const prev = index > 0 ? CHAPTERS[index - 1] : null;
  const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;

  function pick(id: ChapterId) {
    setOpen(false);
    onChapter(id);
  }

  return (
    <div className="min-h-screen bg-bark lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen flex-col bg-bark px-4 py-8 text-page lg:flex">
        <p className="px-3 font-display text-3xl font-semibold">Volume 4: Honeybees</p>
        <p className="mt-1 px-3 text-sm text-honey-soft">Blue and the Awesome Dudes</p>
        <div className="mt-8 overflow-y-auto">
          <Contents chapter={chapter} onPick={pick} />
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex items-center gap-2 bg-bark px-3 py-2 text-page lg:hidden">
          <button
            type="button"
            aria-label="Open contents"
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center"
          >
            <Menu aria-hidden="true" />
          </button>
          <div>
            <p className="font-display text-xl leading-none">Volume 4: Honeybees</p>
            <p className="text-sm text-honey-soft">
              {current.numeral} · {current.label}
            </p>
          </div>
        </header>

        {open && (
          <div className="fixed inset-0 z-30 lg:hidden">
            <button
              type="button"
              aria-label="Close contents"
              className="absolute inset-0 bg-bark/80"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 flex w-72 flex-col bg-bark px-4 py-6 text-page">
              <div className="flex items-center justify-between">
                <p className="font-display text-2xl">Contents</p>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="grid size-11 place-items-center"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4 overflow-y-auto">
                <Contents chapter={chapter} onPick={pick} />
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto max-w-3xl px-4 py-6 sm:px-8 sm:py-10">
          <article className="rounded-lg bg-page px-5 py-8 text-ink shadow-md sm:px-10 sm:py-12">
            <ChapterBody chapter={chapter} onChapter={pick} />
            <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
              {prev ? (
                <button type="button" onClick={() => pick(prev.id)} className="min-h-11 px-2 text-left">
                  <span className="block text-sm text-muted">Previous</span>
                  <span className="font-display text-xl">{prev.label}</span>
                </button>
              ) : (
                <span />
              )}
              {next && (
                <button type="button" onClick={() => pick(next.id)} className="min-h-11 px-2 text-right">
                  <span className="block text-sm text-muted">Next</span>
                  <span className="font-display text-xl">{next.label}</span>
                </button>
              )}
            </div>
          </article>
          <p className="mt-5 px-1 text-sm leading-relaxed text-honey-soft">
            Volume 4: Honeybees (The Education Revolution), by Blue and the Awesome Dudes. Educational field notes for a temperate apiary — not veterinary advice. Follow local law, treatment labels, and your inspector. Never spray fruit trees or berries while they are in bloom.
          </p>
        </main>
      </div>
    </div>
  );
}
