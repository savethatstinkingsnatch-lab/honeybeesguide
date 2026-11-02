import { useMemo, useState } from "react";
import { H2, Kicker, Note, Plate, cn } from "@/components/bits";
import { plates } from "@/book/plates";
import {
  FORAGE_MONTHS,
  KIND_LABEL,
  MONTHS,
  MONTH_SHORT,
  PLANTS,
  ZONES,
  ZONE_LABEL,
  bloomMonths,
  gapMonths,
  plantsInMonth,
  type Kind,
  type Zone,
} from "@/book/plants";
import { useBook } from "@/book/store";

const KINDS: Array<Kind | "all"> = ["all", "tree", "berry", "herb", "wildflower", "crop", "shrub"];

export function Forage() {
  const climate = useBook((state) => state.climate);
  const setClimate = useBook((state) => state.setClimate);
  const planted = useBook((state) => state.planted);
  const togglePlant = useBook((state) => state.togglePlant);
  const addStarterBelt = useBook((state) => state.addStarterBelt);
  const clearPlanted = useBook((state) => state.clearPlanted);
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [zone, setZone] = useState<Zone | "all">("all");
  const [kind, setKind] = useState<Kind | "all">("all");

  const visible = useMemo(
    () =>
      PLANTS.filter((plant) => (zone === "all" || plant.zone === zone) && (kind === "all" || plant.kind === kind)),
    [zone, kind],
  );

  const blooming = useMemo(
    () => plantsInMonth(month, climate, zone).filter((plant) => kind === "all" || plant.kind === kind),
    [month, climate, zone, kind],
  );

  const gaps = gapMonths(planted, climate);
  const orchardCount = planted.filter((id) => PLANTS.find((plant) => plant.id === id)?.zone === "orchard").length;

  return (
    <div>
      <Kicker>Chapter VI</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Forage</h1>
      <p className="drop mt-6">
        A colony does not live on a single blossom. From the first warm flight of spring until the last pollen of fall, something within reach has to be in flower. Fruit trees and berry bushes belong close to the hives. The meadow and the wild trees, out at flying range, finish the year.
      </p>

      <Plate
        src={plates.orchard}
        alt="Three wooden hives in a blossoming orchard, with berry bushes in front and a wild hedgerow beyond."
        caption="Hives in the orchard belt: fruit trees and berry rows nearby, wild trees beyond."
      />

      <H2>Three distances</H2>
      <p className="mt-4">
        Most foraging trips stay inside a kilometre. Bees can fly two or three, and sometimes farther, but honey costs more the farther they carry it. Plant the continuous bloom as close as the entrance will allow.
      </p>
      <div className="mt-6 bg-comb p-3 sm:p-4">
        <p className="px-2 font-display text-sm text-muted">Flying range · out to about 3 km</p>
        <div className="mt-3 bg-honey-soft p-3 sm:p-4">
          <p className="px-2 font-display text-sm text-honey-deep">Orchard belt · 15–100 m · fruit and berries</p>
          <div className="mt-3 border border-line bg-page p-3 sm:p-4">
            <p className="font-display text-sm text-muted">At the hives · the first 15 m</p>
            <p className="mt-1 font-display text-xl">Clover, herbs, water</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {ZONES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setZone((current) => (current === item.id ? "all" : item.id))}
            className={cn(
              "min-h-11 border px-4 py-3 text-left",
              zone === item.id ? "border-honey bg-honey-soft" : "border-line bg-page",
            )}
          >
            <span className="font-display text-xl">{item.title}</span>
            <span className="mt-1 block text-sm text-honey-deep">{item.range}</span>
            <span className="mt-2 block text-sm text-muted">{item.body}</span>
          </button>
        ))}
      </div>

      <Note title="Do not spray the bloom">
        <p>
          Insecticide on open apple, pear, cherry, or berry flowers kills the insects you planted the row for. If a treatment cannot wait, it happens after bees are home, and only as the label allows. Better: nothing at all while the flowers are open.
        </p>
      </Note>

      <H2>How to set the orchard</H2>
      <ol className="mt-4 list-decimal space-y-3 pl-5">
        <li>Put the fruit to the side or behind the hives, not in front of the landing board, and not where it shades the entrance at morning.</li>
        <li>Choose dwarf and semi-dwarf apples, crabapples, cherries, plums, and pears. Forest-sized trees belong out in the flying range, not on the stand.</li>
        <li>Run raspberries, blackberries, currants, gooseberries, and blueberries as a windbreak on the windward side.</li>
        <li>Give two apple varieties that bloom together, or a crabapple as the partner. A lone tree is a poor crop and a short meal.</li>
        <li>Set water closer than the neighbor’s pool: a shallow pan with stones so bees can drink without drowning.</li>
      </ol>
      <p className="mt-4">
        Fruit and berries carry spring into early summer. They do not carry August. Clover underfoot, herbs, a sowing of buckwheat, and a goldenrod and aster meadow have to close the year, or the colony meets a dearth with the supers still on.
      </p>

      <Plate
        src={plates.meadow}
        alt="A summer meadow of clover, lavender, sunflower, and goldenrod with honey bees foraging."
        caption="Beyond the orchard, the meadow has to keep flowering after the fruit petals fall."
      />

      <H2>The bloom calendar</H2>
      <p className="mt-4">
        Dates below fit a middle temperate year in the north. If your spring comes early or late, shift the book. If you live where spring begins in August, keep the order and start at your first warm month — succession matters more than the names on the calendar.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(
          [
            ["early", "Early spring"],
            ["middle", "Middle"],
            ["late", "Late spring"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setClimate(id)}
            className={cn(
              "min-h-11 px-4",
              climate === id ? "bg-ink text-page" : "bg-comb text-ink",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {MONTHS.map((name, index) => {
          const value = index + 1;
          const inSeason = FORAGE_MONTHS.includes(value);
          return (
            <button
              key={name}
              type="button"
              onClick={() => setMonth(value)}
              className={cn(
                "min-h-11 shrink-0 px-3 font-display",
                month === value ? "bg-honey text-ink" : "bg-page text-ink",
                !inSeason && month !== value && "text-muted",
              )}
            >
              {name.slice(0, 3)}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {KINDS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setKind(id)}
            className={cn(
              "min-h-11 border px-3 text-sm",
              kind === id ? "border-ink bg-ink text-page" : "border-line bg-page text-ink",
            )}
          >
            {id === "all" ? "All plants" : KIND_LABEL[id]}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="bloom-scroll">
          <div className="bloom-grid text-center font-display text-xs text-muted">
            <span className="text-left">In flower</span>
            {MONTH_SHORT.map((letter, index) => (
              <span key={`${letter}-${index}`} className={cn(month === index + 1 && "text-honey-deep")}>
                {letter}
              </span>
            ))}
          </div>
          <ul className="mt-2 space-y-1">
            {visible.map((plant) => {
              const months = bloomMonths(plant, climate);
              return (
                <li key={plant.id} className="bloom-grid">
                  <span className="truncate text-sm">{plant.name}</span>
                  {MONTH_SHORT.map((_, index) => {
                    const on = months.includes(index + 1);
                    return (
                      <span
                        key={plant.id + index}
                        className={cn(
                          "mx-auto block size-3.5 rounded-sm",
                          on ? "bg-honey" : "bg-line",
                          month === index + 1 && "ring-2 ring-ink",
                        )}
                      />
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <H2>
        In flower in {MONTHS[month - 1]}
        {zone !== "all" ? ` · ${ZONE_LABEL[zone]}` : ""}
      </H2>
      {blooming.length === 0 ? (
        <p className="mt-4 text-muted">
          Nothing in this filter is in bloom. That empty month is a dearth — add a plant that covers it, or look one zone farther out.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {blooming.map((plant) => {
            const on = planted.includes(plant.id);
            return (
              <li key={plant.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-display text-2xl">{plant.name}</p>
                  <p className="italic text-muted">{plant.latin}</p>
                  <p className="mt-1 text-sm text-honey-deep">
                    {KIND_LABEL[plant.kind]} · {ZONE_LABEL[plant.zone]} · nectar {plant.nectar}/3 · pollen {plant.pollen}/3
                  </p>
                  <p className="mt-2">{plant.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => togglePlant(plant.id)}
                  className={cn(
                    "min-h-11 shrink-0 px-4 font-display",
                    on ? "bg-honey text-ink" : "bg-bark text-page",
                  )}
                >
                  {on ? "In my planting" : "Add to planting"}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <H2>My planting</H2>
      <p className="mt-4">
        Tick what already grows within flight, and what you mean to put in. The book checks March through October for a month with nothing in flower.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={addStarterBelt} className="min-h-11 bg-ink px-4 text-page">
          Add the starter belt
        </button>
        <button type="button" onClick={clearPlanted} className="min-h-11 border border-line px-4">
          Clear the list
        </button>
      </div>
      {planted.length === 0 ? (
        <p className="mt-4 text-muted">
          The starter belt is clover and herbs at the stand, a short orchard of plum, apple, crabapple, cherry, honeyberry, blueberry, currant, raspberry, and blackberry, then willow, linden, buckwheat, goldenrod, and aster out at range.
        </p>
      ) : gaps.length === 0 ? (
        <p className="mt-4">
          Your list flowers from March through October without a gap. That is the whole trick. {orchardCount} of those plants sit in the orchard belt, beside the hives.
        </p>
      ) : (
        <p className="mt-4">
          Still empty: {gaps.map((item) => MONTHS[item - 1]).join(", ")}. Fruit trees will not fill a late summer hole. Look to clover, borage, buckwheat, goldenrod, and aster.
          {orchardCount > 0 ? ` You have ${orchardCount} in the orchard belt.` : ""}
        </p>
      )}
      {planted.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {PLANTS.filter((plant) => planted.includes(plant.id)).map((plant) => (
            <li key={plant.id}>
              <button
                type="button"
                onClick={() => togglePlant(plant.id)}
                className="min-h-11 bg-honey-soft px-3 text-sm"
              >
                {plant.name}
                <span className="text-muted"> · remove</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
