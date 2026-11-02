export const CHAPTERS = [
  { id: "cover", label: "Contents", numeral: "—", blurb: "How to read this book" },
  { id: "colony", label: "The colony", numeral: "I", blurb: "Queen, worker, and drone" },
  { id: "hive", label: "The hive", numeral: "II", blurb: "Boxes, frames, and bee space" },
  { id: "year", label: "The year", numeral: "III", blurb: "What the month asks of you" },
  { id: "inspect", label: "Inspection", numeral: "IV", blurb: "A list you can keep" },
  { id: "health", label: "Health", numeral: "V", blurb: "Mites, brood, and trouble" },
  { id: "forage", label: "Forage", numeral: "VI", blurb: "Bloom from spring to fall" },
  { id: "harvest", label: "Harvest", numeral: "VII", blurb: "What you may take" },
  { id: "glossary", label: "Glossary", numeral: "VIII", blurb: "Words of the craft" },
  { id: "notes", label: "Field notes", numeral: "IX", blurb: "Your own pages" },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];

export function isChapterId(value: string): value is ChapterId {
  return CHAPTERS.some((chapter) => chapter.id === value);
}

export const CHECKS = [
  { id: "smoke", label: "Smoked the entrance and waited a slow minute" },
  { id: "temper", label: "Temper is workable, not a roaring defense" },
  { id: "queen", label: "Queen seen, or fresh eggs standing one to a cell" },
  { id: "pattern", label: "Brood is a solid oval, not a scatter of empty cells" },
  { id: "larvae", label: "Larvae pearly and wet; cappings even, not sunken" },
  { id: "stores", label: "Honey and pollen enough for the next dearth" },
  { id: "space", label: "Room to lay and to store — not honey-bound, not packed" },
  { id: "cells", label: "Checked frame bottoms and faces for queen cells" },
  { id: "pests", label: "Looked for mites, beetles, moth webbing, and robbing" },
  { id: "gear", label: "Boxes square, lids close, no mouse or skunk damage" },
] as const;

export type WinterClimate = "mild" | "temperate" | "cold";

export const WINTER_TARGET: Record<WinterClimate, { lb: number; note: string }> = {
  mild: { lb: 40, note: "Short winters, reliable early bloom." },
  temperate: { lb: 70, note: "A real winter and a spring that can stall." },
  cold: { lb: 90, note: "Long cluster, late pollen, little margin." },
};

export const YEAR: { month: number; intent: string; tasks: string[] }[] = [
  {
    month: 1,
    intent: "Leave the cluster alone.",
    tasks: [
      "Heft the back of the hive. A light colony gets fondant or a candy board, not an open inspection in a freeze.",
      "Sweep dead bees off the entrance only if they are blocking air.",
      "Order frames, foundation, and jars before spring.",
    ],
  },
  {
    month: 2,
    intent: "Watch for the first pollen, and still stay out.",
    tasks: [
      "Crocus and the earliest willow catkins are a signal, not an invitation to pull frames.",
      "On a mild day, a quick peek under the cover is enough to see cluster size and emergency feed.",
      "Repair equipment in the shed. The bees are not bored; you might be.",
    ],
  },
  {
    month: 3,
    intent: "Build-up begins. Feed only if stores are truly thin.",
    tasks: [
      "Maple and willow pollen turn the bees' corbiculae bright. The queen is laying again.",
      "A light hive can take 1:1 syrup once days are reliably mild. Never flood a cold cluster.",
      "Clean or swap a solid bottom board if it is packed with debris. Work fast.",
    ],
  },
  {
    month: 4,
    intent: "Make room before the bees decide to leave.",
    tasks: [
      "Fruit bloom — plum, cherry, pear, apple — is the surge. Inspect every seven to ten days.",
      "Reverse brood boxes only if the cluster is stuck in the top and the bottom is empty.",
      "Add drawn comb if you have it. Foundation alone, in a cold snap, is a poor gift.",
    ],
  },
  {
    month: 5,
    intent: "Swarm season. This is the working month.",
    tasks: [
      "Look for queen cells along the bottom bars. Charged swarm cells mean the colony is preparing to divide.",
      "Give space ahead of congestion: a super of drawn comb, or a split if the colony is truly strong.",
      "A clipped or marked queen is easier to find now than in August.",
    ],
  },
  {
    month: 6,
    intent: "The main flow. Super early, not late.",
    tasks: [
      "Clover, bramble, and linden can fill a box while you are at work. Add the next super at seven frames full, not ten.",
      "Keep the brood nest from being packed with nectar. That is honey-bound, and it starts swarming all over again.",
      "Do not harvest the first blush of honey if your winter target is not already safe.",
    ],
  },
  {
    month: 7,
    intent: "In many places the flowers pause. Robbing starts.",
    tasks: [
      "A July dearth is normal where clover has been cut and goldenrod has not begun.",
      "Narrow entrances. Do not spill syrup or leave wet comb in the open.",
      "Sample for varroa. The mites that ride this month's bees become the winter collapse.",
    ],
  },
  {
    month: 8,
    intent: "Protect the winter bees before they are born.",
    tasks: [
      "Winter bees are raised now and next month. A heavy mite load shortens their lives.",
      "Treat or manage mites according to what your sample showed and what is legal where you live.",
      "Sow buckwheat or lean on goldenrod if the yard has gone quiet. See Forage.",
    ],
  },
  {
    month: 9,
    intent: "Take only surplus. Arrange the brood nest for winter.",
    tasks: [
      "Goldenrod and aster are the last great flow in much of the temperate north.",
      "Remove honey you are truly allowed to keep. Leave the target weight. See Harvest.",
      "Confine the brood nest to the boxes you want them to winter in. Exit reducers go on.",
    ],
  },
  {
    month: 10,
    intent: "Close the hive properly, then stop fiddling.",
    tasks: [
      "Mouse guards on. Queen excluder off — a cluster must be free to move to honey.",
      "A last heft. Feed heavy syrup only while days are warm enough for the bees to cure it.",
      "Combine a hopelessly weak colony with a strong one rather than wishing.",
    ],
  },
  {
    month: 11,
    intent: "They are a cluster now.",
    tasks: [
      "Insulation and a windbreak help in exposed yards. Moisture, not cold, is what kills.",
      "A dry inner cover with a small upper vent beats a sealed wet box.",
      "Read your notes from May. Order queens or make plans while the season is still honest in your memory.",
    ],
  },
  {
    month: 12,
    intent: "A year ends quietly.",
    tasks: [
      "Check that lids have not blown and entrances are clear after snow.",
      "Do not tap the hive to 'see if they are alive.' You will hear them on a still day if you must.",
      "Render wax, clean jars, and leave the bees to their honey.",
    ],
  },
];

export const TROUBLES: {
  name: string;
  signs: string;
  action: string;
  urgent?: boolean;
}[] = [
  {
    name: "Varroa mite",
    signs: "Tiny reddish ovals on bees or in drone brood. Spotty brood, crawling bees, and deformed wings come later — that is the virus, not the first warning.",
    action: "Sample monthly in the warm season with an alcohol wash of about 300 bees. Many beekeepers act around 2–3 mites per 100 bees, and want the load lower before winter bees are raised.",
  },
  {
    name: "Deformed wing virus",
    signs: "Bees with shriveled, useless wings, often with a high mite count.",
    action: "You cannot treat the virus directly. Knock the mites down. A colony this far along may not recover this season.",
  },
  {
    name: "American foulbrood",
    signs: "Sunken, perforated cappings; brood that ropes out in a brown thread; a foul smell. Scales stick in the cell.",
    action: "Stop. Close the hive. Do not move frames, and do not feed honey from this colony to another. It is reportable in many regions. Call your inspector.",
    urgent: true,
  },
  {
    name: "European foulbrood",
    signs: "Twisted, melted larvae before they are capped, often in spring when nutrition is poor.",
    action: "A strong nectar flow and a young queen often clear a mild case. Confirm the diagnosis before you treat. It is not the same disease as American foulbrood.",
  },
  {
    name: "Chalkbrood",
    signs: "Hard white or black mummies of larvae on the landing board and in cells.",
    action: "Usually a stress disease of cool, damp weather. Improve ventilation and let the colony outgrow it. Do not spread the mummies around the yard.",
  },
  {
    name: "Wax moth",
    signs: "Silken galleries through comb, webbing, and cocoons in stored or weak boxes.",
    action: "Strong colonies police their own comb. The moth is a symptom of emptiness. Freeze spare comb, or keep it on bees.",
  },
  {
    name: "Small hive beetle",
    signs: "Dark beetles running from light, and slimy fermented comb when the colony is too weak to guard it.",
    action: "Keep colonies strong, do not leave wet supers standing in the honey house, and use the traps that are legal where you live.",
  },
  {
    name: "Robbing",
    signs: "Fighting at the entrance, bees darting for cracks, wax crumbs, and a frantic sound.",
    action: "Close the hive down to a small entrance, stop feeding in the open, and do not inspect every colony in the yard once robbing has started.",
  },
];

export const GLOSSARY: { term: string; def: string }[] = [
  { term: "Bee space", def: "The gap bees will not fill with wax or propolis, about 6 to 9 millimetres. Langstroth built the hive around it." },
  { term: "Bee bread", def: "Pollen packed into cells and fermented with honey. This is what nurse bees actually eat." },
  { term: "Brood", def: "Eggs, larvae, and pupae. The living nursery, usually a warm oval in the center of the nest." },
  { term: "Capped honey", def: "Ripe honey sealed under wax. Uncapped nectar is still water. Do not extract it." },
  { term: "Dearth", def: "A stretch with little nectar. July is a classic dearth where the spring flow has ended and goldenrod has not begun." },
  { term: "Drone", def: "A male bee. He does not forage or sting. His only work is mating, and the colony expels him in the fall." },
  { term: "Forager", def: "An older worker who flies for nectar, pollen, water, or resin. Most flights stay inside a mile or two." },
  { term: "Frame", def: "The wooden rectangle that holds a comb. You handle frames, not loose wax, if the hive is a modern one." },
  { term: "Honey-bound", def: "A brood nest so packed with nectar that the queen has nowhere to lay. It invites swarming." },
  { term: "Laying worker", def: "A worker that lays unfertilized eggs after a colony has been queenless too long. The brood is drone brood in worker cells, scattered and domed." },
  { term: "Nectar flow", def: "Days when plants yield enough nectar that the hive gains weight. Not every bloom is a flow." },
  { term: "Propolis", def: "Resin the bees collect and use as varnish, glue, and a crude disinfectant." },
  { term: "Queen cell", def: "A peanut-shaped cell for raising a queen. On the bottom of frames it often means swarming. In the middle, after queen loss, it is an emergency." },
  { term: "Queen cup", def: "An empty play cup. Common and harmless until it holds a larva and royal jelly." },
  { term: "Robbing", def: "Bees stealing honey from a weak hive or from your own carelessness. It spreads mites and disease." },
  { term: "Royal jelly", def: "The rich food of young larvae and, for longer, of a queen larva. Diet, not genetics alone, makes the queen." },
  { term: "Super", def: "A box added above the brood nest for honey. 'Super' simply means above." },
  { term: "Supersedure", def: "The colony replacing a failing queen without leaving. A few queen cells, and the old queen may remain for a time." },
  { term: "Swarm", def: "The old queen leaving with a share of the bees to start another home. Natural, and expensive if you wanted that honey." },
  { term: "Varroa", def: "Varroa destructor, the parasitic mite that lives on bees and in brood, and the main reason colonies die." },
  { term: "Winter cluster", def: "The ball of bees that keeps the queen and brood warm. They move slowly onto stored honey. They do not heat the whole box." },
];
