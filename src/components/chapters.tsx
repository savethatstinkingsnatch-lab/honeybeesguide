import { useEffect, useMemo, useState } from "react";
import { H2, Kicker, Note, Plate, cn } from "@/components/bits";
import {
  CHAPTERS,
  CHECKS,
  GLOSSARY,
  TROUBLES,
  WINTER_TARGET,
  YEAR,
  type ChapterId,
  type WinterClimate,
} from "@/book/data";
import { MONTHS, plantsInMonth } from "@/book/plants";
import { plates } from "@/book/plates";
import { useBook } from "@/book/store";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function Cover({ onChapter }: { onChapter: (id: ChapterId) => void }) {
  const month = new Date().getMonth() + 1;
  const blooming = plantsInMonth(month, "middle", "all").slice(0, 4);

  return (
    <div>
      <Kicker>The Education Revolution · Volume 4</Kicker>
      <h1 className="mt-3 font-display text-5xl font-semibold sm:text-6xl">Volume 4: Honeybees</h1>
      <p className="mt-4 font-display text-2xl text-honey-deep">For keeping honey bees</p>
      <p className="mt-2 font-display text-lg">Blue and the Awesome Dudes</p>
      <p className="drop mt-6">
        This is a working book, not a museum of folklore. It follows one colony through the boxes it lives in, the year it keeps, and the plants that have to flower from the first spring flight until fall. Your notes stay in this browser.
      </p>
      <Plate
        src={plates.cover}
        alt="A honey bee on white clover beside a slice of golden honeycomb."
        caption="Clover and comb. The lawn you stop mowing is already part of the forage."
      />
      <p>
        The calendar assumes a temperate northern year. Shift it if your spring is early, late, or upside down. Nothing here replaces a local mentor, the label on a treatment, or the inspector when brood looks wrong.
      </p>
      <H2>Contents</H2>
      <ol className="mt-2">
        {CHAPTERS.filter((chapter) => chapter.id !== "cover").map((chapter) => (
          <li key={chapter.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => onChapter(chapter.id)}
              className="flex min-h-11 w-full items-baseline gap-4 py-3 text-left"
            >
              <span className="w-10 font-display text-honey-deep">{chapter.numeral}</span>
              <span className="font-display text-2xl">{chapter.label}</span>
              <span className="ml-auto hidden text-sm text-muted sm:inline">{chapter.blurb}</span>
            </button>
          </li>
        ))}
      </ol>
      <Note title={`In flower this ${MONTHS[month - 1]}`}>
        <p>
          {blooming.map((plant) => plant.name).join(", ")}
          {blooming.length ? " — and more in the forage chapter, including the fruit trees and berry bushes that should stand within flight of the hives." : "Open Forage and set the month to your season."}
        </p>
        <button type="button" onClick={() => onChapter("forage")} className="mt-3 min-h-11 bg-ink px-4 text-page">
          Open the planting calendar
        </button>
      </Note>
    </div>
  );
}

export function Colony() {
  return (
    <div>
      <Kicker>Chapter I</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">The colony</h1>
      <p className="drop mt-6">
        A hive is not a box of identical bees. It is three castes and a schedule. Learn to read eggs before you learn to find the queen. Eggs mean she was here within the last three days, even when you miss her.
      </p>
      <Plate
        src={plates.castes}
        alt="Three honey bees: a long queen, a worker dusted with pollen, and a large-eyed drone."
        caption="Queen, worker, drone. The queen is longer, the drone broader in the eye, the worker the one carrying the work."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="bg-honey-soft p-4">
          <h2 className="font-display text-2xl">Queen</h2>
          <p className="mt-2 text-sm">
            One laying queen in a healthy colony. At the peak she may lay well over a thousand eggs a day. She lives two to four years, and many colonies replace her sooner. Her scent holds the colony together.
          </p>
        </article>
        <article className="bg-comb p-4">
          <h2 className="font-display text-2xl">Worker</h2>
          <p className="mt-2 text-sm">
            A sterile female. In summer she lives about six weeks: cleaning, nursing, building comb, guarding, then foraging. Winter bees live for months because they are raised for endurance, not for a flow.
          </p>
        </article>
        <article className="bg-honey-soft p-4">
          <h2 className="font-display text-2xl">Drone</h2>
          <p className="mt-2 text-sm">
            A male. No sting, no pollen baskets, one job: mate in flight, and die doing it. The colony raises him in spring and throws him out when the flowers fail.
          </p>
        </article>
      </div>
      <H2>From egg to adult</H2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="font-display text-muted">
              <th className="py-2 pr-4 font-medium">Stage</th>
              <th className="py-2 pr-4 font-medium">Queen</th>
              <th className="py-2 pr-4 font-medium">Worker</th>
              <th className="py-2 font-medium">Drone</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Egg", "3 days", "3 days", "3 days"],
              ["Larva", "about 5", "about 6", "about 7"],
              ["Capped", "8 days", "12 days", "14 days"],
              ["Emerges", "day 16", "day 21", "day 24"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-line">
                {row.map((cell, cellIndex) => (
                  <td key={`${row[0]}-${cellIndex}`} className="py-2 pr-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted">Days are the usual field counts. Weather and nutrition move them a little.</p>
      <H2>Three kinds of queen cell</H2>
      <ul className="mt-4 space-y-4">
        <li>
          <span className="font-display text-xl">Swarm cells</span>
          <p>Often along the bottom bars, many of them, while the queen is still laying. The colony is preparing to divide. Give space, or split, or accept that they may leave.</p>
        </li>
        <li>
          <span className="font-display text-xl">Supersedure</span>
          <p>A few cells on the face of the comb. The bees are replacing a queen who is failing. Do not tear them down out of tidiness.</p>
        </li>
        <li>
          <span className="font-display text-xl">Emergency</span>
          <p>Built over ordinary worker larvae after the queen is lost. The colony can save itself if the larvae were young enough. If you only find scattered drone brood in worker cells, you may already have laying workers.</p>
        </li>
      </ul>
      <Note title="Finding her">
        <p>
          Look where the eggs are freshest, and for the circle of attendants facing her. A marked queen is a kindness to your future self. If you cannot find her and the eggs are there, close the hive. You have your answer.
        </p>
      </Note>
    </div>
  );
}

export function Hive() {
  return (
    <div>
      <Kicker>Chapter II</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">The hive</h1>
      <p className="drop mt-6">
        This book speaks Langstroth: stacked wooden boxes and movable frames, built around bee space. Other hives work. The bees do not care about the brand. They care that the gap is right and the brood stays warm.
      </p>
      <Plate
        src={plates.hive}
        alt="A wooden Langstroth hive in summer grass, the cover slightly ajar and bees in the air."
        caption="A telescoping cover, supers, and a deep brood box. The landing board is the front door."
      />
      <H2>From the ground up</H2>
      <ol className="mt-4 list-decimal space-y-3 pl-5">
        <li>A stand, so the hive is off the damp ground and the entrance is not at skunk height if you can help it.</li>
        <li>Bottom board. Screened boards help mites fall away; solid boards are simpler in a wet winter. Pick one and learn it.</li>
        <li>Brood box, usually a deep. Many colonies winter in one deep, or two. The queen lays here.</li>
        <li>An optional queen excluder. Useful when you want honey without brood. Take it off before winter so the cluster can travel.</li>
        <li>Honey supers, often mediums, lighter to lift than deeps full of honey.</li>
        <li>Inner cover, then a telescoping outer cover that sheds rain.</li>
      </ol>
      <Note title="Bee space">
        <p>
          Leave about the width of a finger between combs and between comb and wall — roughly 6 to 9 millimetres. Smaller, and they glue it with propolis. Larger, and they build wild comb where your hands need to go.
        </p>
      </Note>
      <H2>How to read a frame</H2>
      <Plate
        src={plates.brood}
        alt="A brood frame with dark capped brood in the center, pollen around it, and pale honey along the top."
        caption="A classic nest: brood in the warm center, pollen as a ring, honey arched over the top."
      />
      <p>
        A scattered pattern, sunken cappings, or only drone brood when you expected workers is a health question, not a quirk. See the health chapter before you decide the queen is merely eccentric.
      </p>
      <p className="mt-4">
        Eight-frame boxes are lighter. Ten-frame boxes are the old standard and a little more forgiving of a clumsy inspection. Paint the outside, never the inside. Face the entrance away from the path people walk.
      </p>
    </div>
  );
}

export function Year({ onChapter }: { onChapter: (id: ChapterId) => void }) {
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const guide = YEAR.find((item) => item.month === month) ?? YEAR[0];
  const blooming = plantsInMonth(month, "middle", "all");

  return (
    <div>
      <Kicker>Chapter III</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">The year</h1>
      <p className="drop mt-6">
        Beekeeping is seasonal work. The mistake is not ignorance. It is doing June’s job in April, or opening a cluster in January because the book felt unread. Choose the month you are actually standing in.
      </p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {YEAR.map((item) => (
          <button
            key={item.month}
            type="button"
            onClick={() => setMonth(item.month)}
            className={cn(
              "min-h-11 shrink-0 px-3 font-display",
              month === item.month ? "bg-honey text-ink" : "bg-comb text-ink",
            )}
          >
            {MONTHS[item.month - 1].slice(0, 3)}
          </button>
        ))}
      </div>
      <h2 className="mt-8 font-display text-3xl">{MONTHS[guide.month - 1]}</h2>
      <p className="mt-2 font-display text-xl text-honey-deep">{guide.intent}</p>
      <ul className="mt-4 space-y-3">
        {guide.tasks.map((task) => (
          <li key={task} className="border-l-4 border-line pl-4">
            {task}
          </li>
        ))}
      </ul>
      <H2>What can be in flower</H2>
      {blooming.length === 0 ? (
        <p className="mt-4">
          Little or nothing in a middle temperate year. The colony lives on stores. If the hive is light, feed candy or fondant — not cold syrup dumped on a cluster.
        </p>
      ) : (
        <p className="mt-4">
          {blooming.map((plant) => plant.name).join(", ")}. Fruit trees and berry bushes matter most in spring. The fall plants matter because they become winter honey.
        </p>
      )}
      <button type="button" onClick={() => onChapter("forage")} className="mt-4 min-h-11 bg-ink px-4 text-page">
        Open the full planting calendar
      </button>
      <Plate
        src={plates.swarm}
        alt="A honey bee swarm hanging in a teardrop from an apple branch in blossom."
        caption="A swarm in the fruit bloom. Impressive, and a colony you no longer have at home."
      />
    </div>
  );
}

export function Inspect() {
  const inspections = useBook((state) => state.inspections);
  const saveInspection = useBook((state) => state.saveInspection);
  const [date, setDate] = useState(today);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [note, setNote] = useState("");

  useEffect(() => {
    const found = useBook.getState().inspections.find((item) => item.date === date);
    setChecks(found?.checks ?? {});
    setNote(found?.note ?? "");
  }, [date]);

  const done = CHECKS.filter((item) => checks[item.id]).length;

  function persist(nextChecks: Record<string, boolean>, nextNote: string) {
    setChecks(nextChecks);
    setNote(nextNote);
    saveInspection(date, nextChecks, nextNote);
  }

  const history = useMemo(
    () => [...inspections].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [inspections],
  );

  return (
    <div>
      <Kicker>Chapter IV</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Inspection</h1>
      <p className="drop mt-6">
        Open a hive for a reason, on a mild day, with a veil. Smoke the entrance, wait, and work in frames rather than in a scramble. Ten quiet minutes beat an hour of rearranging.
      </p>
      <Plate
        src={plates.tools}
        alt="A copper smoker, hive tool, bee brush, and folded veil on a wooden bench."
        caption="Smoker, hive tool, brush, veil. Light the smoker before you are wearing gloves."
      />
      <label className="mt-2 block font-display text-lg" htmlFor="inspect-date">
        Date of this visit
      </label>
      <input
        id="inspect-date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="mt-2 min-h-11 border border-line bg-page px-3"
      />
      <p className="mt-4 font-display text-honey-deep tabular-nums">
        {done} of {CHECKS.length} noted
      </p>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {CHECKS.map((item) => (
          <li key={item.id}>
            <label className="flex min-h-11 cursor-pointer items-start gap-3 py-3">
              <input
                type="checkbox"
                className="mt-1 size-5 accent-honey"
                checked={Boolean(checks[item.id])}
                onChange={() => persist({ ...checks, [item.id]: !checks[item.id] }, note)}
              />
              <span>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <label className="mt-6 block font-display text-lg" htmlFor="inspect-note">
        What you saw
      </label>
      <textarea
        id="inspect-note"
        value={note}
        onChange={(event) => persist(checks, event.target.value)}
        rows={5}
        placeholder="Eggs on three frames. No queen cells. Hive feeling heavier than last week."
        className="mt-2 w-full border border-line bg-honey-soft px-3 py-3"
      />
      {history.length > 0 && (
        <>
          <H2>Earlier visits</H2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {history.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setDate(item.date)}
                  className={cn(
                    "min-h-11 px-3 tabular-nums",
                    item.date === date ? "bg-honey" : "bg-comb",
                  )}
                >
                  {item.date}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function Health() {
  const [bees, setBees] = useState(300);
  const [mites, setMites] = useState(3);
  const safeBees = Number.isFinite(bees) && bees > 0 ? bees : 1;
  const safeMites = Number.isFinite(mites) && mites > 0 ? mites : 0;
  const percent = (safeMites / safeBees) * 100;
  const band =
    percent < 1 ? "Low for the moment. Sample again before you trust it."
    : percent < 2 ? "A watchful number. Sample again soon, especially heading into late summer."
    : percent < 3 ? "Many beekeepers treat before winter bees are raised, rather than waiting for deformed wings."
    : "High. This is a this-month problem. Collapsing colonies also rob their neighbors and share the mites.";

  return (
    <div>
      <Kicker>Chapter V</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Health</h1>
      <p className="drop mt-6">
        Most lost colonies are not a mystery. Varroa mites and the viruses they carry do the quiet damage, and the beekeeper notices in October that the box is light and empty. Sample before the bees look sick.
      </p>
      <Plate
        src={plates.varroa}
        alt="A honey bee on wax with a small reddish varroa mite on the abdomen."
        caption="Varroa is a pinhead of reddish brown on the bee, easier to count in a jar than on the comb."
      />
      <H2>A mite wash</H2>
      <p className="mt-4">
        Shake nurse bees from a brood frame — not the queen — into a cup. About 300 bees is half a cup. An alcohol wash kills that sample and gives a fair count. A sugar roll spares them and undercounts.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-display">Bees in the sample</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={bees}
            onChange={(event) => setBees(Number(event.target.value))}
            className="mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
          />
        </label>
        <label className="block">
          <span className="font-display">Mites counted</span>
          <input
            type="number"
            min={0}
            max={500}
            value={mites}
            onChange={(event) => setMites(Number(event.target.value))}
            className="mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
          />
        </label>
      </div>
      <p className="mt-4 font-display text-4xl tabular-nums text-honey-deep">{percent.toFixed(1)}%</p>
      <p className="mt-2">{band}</p>
      <p className="mt-3 text-sm text-muted">
        A common field reading, not a law and not veterinary advice. Thresholds shift with season, and the legal treatments shift with your country. Follow the label and your local guidance.
      </p>
      <H2>What else goes wrong</H2>
      <ul className="mt-4 space-y-4">
        {TROUBLES.map((item) => (
          <li key={item.name} className={cn("border border-line p-4", item.urgent && "border-honey-deep bg-honey-soft")}>
            <h3 className="font-display text-2xl">{item.name}</h3>
            <p className="mt-2">{item.signs}</p>
            <p className="mt-2 text-honey-deep">{item.action}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Harvest() {
  const harvest = useBook((state) => state.harvest);
  const setHarvest = useBook((state) => state.setHarvest);
  const stores = harvest.deepFrames * 7 + harvest.mediumFrames * 4;
  const target = WINTER_TARGET[harvest.winter].lb * Math.max(1, harvest.colonies);
  const surplus = stores - target;

  function setNumber(key: "colonies" | "deepFrames" | "mediumFrames", value: number, max: number) {
    if (!Number.isFinite(value)) return;
    const min = key === "colonies" ? 1 : 0;
    setHarvest({ [key]: Math.min(max, Math.max(min, Math.round(value))) });
  }

  return (
    <div>
      <Kicker>Chapter VII</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Harvest</h1>
      <p className="drop mt-6">
        Take capped honey that the colony can spare. Uncapped nectar is water pretending to be honey, and it ferments in the jar. Brood frames stay in the hive. The first question is not how much you want. It is what they must keep.
      </p>
      <ul className="mt-4 space-y-3">
        <li>Harvest when most cells in the super are capped, or when a refractometer reads under about 18.6 percent water.</li>
        <li>Pull one frame at a time. Brush bees off gently. Do not shake brood frames over the grass.</li>
        <li>A queen excluder keeps brood out of the honey supers. Remove it before winter.</li>
        <li>Strain, settle, and jar. Return wet comb the same evening so you are not hosting a robbing frenzy at dusk tomorrow.</li>
      </ul>
      <H2>What to leave</H2>
      <p className="mt-4">
        Count frames of capped honey, not frames of brood. A full deep frame is reckoned here at 7 pounds, a medium at 4. Your comb will vary. Heft the hive before you believe the sum.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-display">Colonies</span>
          <input
            type="number"
            min={1}
            max={40}
            value={harvest.colonies}
            onChange={(event) => setNumber("colonies", Number(event.target.value), 40)}
            className="mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
          />
        </label>
        <label className="block">
          <span className="font-display">Winter you expect</span>
          <select
            value={harvest.winter}
            onChange={(event) => setHarvest({ winter: event.target.value as WinterClimate })}
            className="mt-2 min-h-11 w-full border border-line bg-page px-3"
          >
            {(Object.keys(WINTER_TARGET) as WinterClimate[]).map((key) => (
              <option key={key} value={key}>
                {key} · {WINTER_TARGET[key].lb} lb each
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-display">Deep frames of honey</span>
          <input
            type="number"
            min={0}
            max={80}
            value={harvest.deepFrames}
            onChange={(event) => setNumber("deepFrames", Number(event.target.value), 80)}
            className="mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
          />
        </label>
        <label className="block">
          <span className="font-display">Medium frames of honey</span>
          <input
            type="number"
            min={0}
            max={80}
            value={harvest.mediumFrames}
            onChange={(event) => setNumber("mediumFrames", Number(event.target.value), 80)}
            className="mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
          />
        </label>
      </div>
      <p className="mt-2 text-sm text-muted">{WINTER_TARGET[harvest.winter].note}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <p className="bg-comb p-4">
          <span className="block text-sm text-muted">Estimated stores</span>
          <span className="font-display text-3xl tabular-nums">{stores} lb</span>
        </p>
        <p className="bg-comb p-4">
          <span className="block text-sm text-muted">Winter target</span>
          <span className="font-display text-3xl tabular-nums">{target} lb</span>
        </p>
        <p className="bg-honey-soft p-4">
          <span className="block text-sm text-muted">{surplus >= 0 ? "You may take" : "Still short"}</span>
          <span className="font-display text-3xl tabular-nums">{Math.abs(surplus)} lb</span>
        </p>
      </div>
      <p className="mt-4">
        {surplus >= 0
          ? "That surplus is the honey you can lift off, if it is capped. Leave the target on the hive even if the jars look bare."
          : "Leave every frame. Feed heavy syrup only while days are warm enough for the bees to cure it, or candy once the weather has turned. Do not harvest your way into a February corpse."}
      </p>
    </div>
  );
}

export function Glossary() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const terms = GLOSSARY.filter(
    (item) => !q || item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q),
  );

  return (
    <div>
      <Kicker>Chapter VIII</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Glossary</h1>
      <p className="mt-4">The few words that unlock the others. Search is blunt on purpose.</p>
      <label className="mt-6 block font-display" htmlFor="glossary-q">
        Search the words
      </label>
      <input
        id="glossary-q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try swarm, dearth, bee space"
        className="mt-2 min-h-11 w-full border border-line px-3"
      />
      <dl className="mt-6 space-y-5">
        {terms.map((item) => (
          <div key={item.term}>
            <dt className="font-display text-2xl">{item.term}</dt>
            <dd className="mt-1">{item.def}</dd>
          </div>
        ))}
      </dl>
      {terms.length === 0 && <p className="mt-4 text-muted">Nothing under that word.</p>}
    </div>
  );
}

export function Notes() {
  const notes = useBook((state) => state.notes);
  const addNote = useBook((state) => state.addNote);
  const removeNote = useBook((state) => state.removeNote);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <Kicker>Chapter IX</Kicker>
      <h1 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Field notes</h1>
      <p className="drop mt-6">
        Write what the hive did, not what you hoped. A date, the weather, whether you saw eggs, whether the orchard was in bloom. These pages stay on this device.
      </p>
      <label className="mt-6 block font-display" htmlFor="note-title">
        Title
      </label>
      <input
        id="note-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Apple bloom, north hive"
        className="mt-2 min-h-11 w-full border border-line px-3"
      />
      <label className="mt-4 block font-display" htmlFor="note-body">
        Note
      </label>
      <textarea
        id="note-body"
        value={body}
        onChange={(event) => setBody(event.target.value)}
        rows={5}
        placeholder="Plums are finished, apples just opening. Both hives heavy with nectar. No queen cells."
        className="mt-2 w-full border border-line bg-honey-soft px-3 py-3"
      />
      <button
        type="button"
        disabled={!body.trim()}
        onClick={() => {
          addNote(title, body);
          setTitle("");
          setBody("");
        }}
        className="mt-3 min-h-11 bg-ink px-4 text-page disabled:opacity-40"
      >
        Save this page
      </button>
      <H2>Saved pages</H2>
      {notes.length === 0 ? (
        <p className="mt-4 text-muted">No pages yet. The first note is usually shorter than you think it should be.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {notes.map((note) => (
            <li key={note.id} className="border border-line p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl">{note.title}</h3>
                <time className="text-sm text-muted tabular-nums">{note.date}</time>
              </div>
              <p className="mt-2 whitespace-pre-wrap">{note.body}</p>
              <button
                type="button"
                onClick={() => removeNote(note.id)}
                className="mt-3 min-h-11 text-honey-deep"
              >
                Remove page
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
