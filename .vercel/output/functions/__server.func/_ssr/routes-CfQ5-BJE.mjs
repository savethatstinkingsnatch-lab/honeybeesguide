import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as GLOSSARY, c as YEAR, i as CHECKS, n as Route, o as TROUBLES, r as CHAPTERS, s as WINTER_TARGET } from "./router-C36NAKjg.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CfQ5-BJE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ZONES = [
	{
		id: "yard",
		title: "At the hives",
		range: "The first 15 metres",
		body: "Clover underfoot, herbs at the edges, and a water basin off to the side. Keep tall trees from shading the entrance in the morning."
	},
	{
		id: "orchard",
		title: "Orchard belt",
		range: "About 15–100 metres",
		body: "Fruit trees and berry bushes live here, beside the apiary but not in the flight path of the landing board. This is the crop you share with the bees."
	},
	{
		id: "range",
		title: "Flying range",
		range: "Out to about 3 kilometres",
		body: "Most honey is made beyond the fence. Willow, maple, linden, and a fall meadow of goldenrod and aster matter more than any flower bed."
	}
];
var KIND_LABEL = {
	tree: "Tree",
	berry: "Berry bush",
	herb: "Herb",
	wildflower: "Meadow",
	shrub: "Shrub",
	crop: "Sown crop"
};
var ZONE_LABEL = {
	yard: "At the hives",
	orchard: "Orchard belt",
	range: "Flying range"
};
var PLANTS = [
	{
		id: "crocus",
		name: "Crocus",
		latin: "Crocus",
		kind: "herb",
		zone: "yard",
		nectar: 1,
		pollen: 2,
		months: [2, 3],
		starter: true,
		note: "The first pollen on a warm late-winter afternoon. Plant drifts, not a lonely clump."
	},
	{
		id: "dandelion",
		name: "Dandelion",
		latin: "Taraxacum",
		kind: "wildflower",
		zone: "yard",
		nectar: 2,
		pollen: 3,
		months: [
			3,
			4,
			5
		],
		starter: false,
		note: "Serious spring food. The honey granulates quickly — fine for the bees, stubborn in a jar."
	},
	{
		id: "clover",
		name: "White clover",
		latin: "Trifolium repens",
		kind: "herb",
		zone: "yard",
		nectar: 3,
		pollen: 2,
		months: [
			5,
			6,
			7,
			8,
			9
		],
		starter: true,
		note: "Let the lawn flower. A clover sward under and around the hives feeds the whole summer."
	},
	{
		id: "borage",
		name: "Borage",
		latin: "Borago officinalis",
		kind: "herb",
		zone: "yard",
		nectar: 3,
		pollen: 2,
		months: [
			6,
			7,
			8,
			9
		],
		starter: true,
		note: "Refills itself if you let it seed. One of the few garden plants that actually moves the honey crop."
	},
	{
		id: "thyme",
		name: "Thyme",
		latin: "Thymus vulgaris",
		kind: "herb",
		zone: "yard",
		nectar: 2,
		pollen: 1,
		months: [6, 7],
		starter: true,
		note: "A low hedge along the stand. Bees work it hard on hot days, and it never towers over the entrance."
	},
	{
		id: "lavender",
		name: "Lavender",
		latin: "Lavandula",
		kind: "herb",
		zone: "yard",
		nectar: 2,
		pollen: 1,
		months: [
			6,
			7,
			8
		],
		starter: false,
		note: "Pretty and useful, not a honey crop by itself. Plant it where you walk, downwind of the landing board."
	},
	{
		id: "beebalm",
		name: "Bee balm",
		latin: "Monarda",
		kind: "herb",
		zone: "yard",
		nectar: 2,
		pollen: 1,
		months: [7, 8],
		starter: false,
		note: "A July flower, which is exactly when many yards go quiet. Give it moisture or it mildews and quits."
	},
	{
		id: "hyssop",
		name: "Anise hyssop",
		latin: "Agastache foeniculum",
		kind: "herb",
		zone: "yard",
		nectar: 3,
		pollen: 1,
		months: [
			7,
			8,
			9
		],
		starter: true,
		note: "Long bloom into early fall. Bees prefer it to most ornamental perennials."
	},
	{
		id: "sedum",
		name: "Autumn sedum",
		latin: "Hylotelephium",
		kind: "herb",
		zone: "yard",
		nectar: 2,
		pollen: 1,
		months: [9, 10],
		starter: true,
		note: "Late nectar for winter bees. A row against the fence still flowers after the garden looks finished."
	},
	{
		id: "honeyberry",
		name: "Honeyberry",
		latin: "Lonicera caerulea",
		kind: "berry",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [3, 4],
		starter: true,
		note: "One of the earliest woody blooms, often before the apples wake. Two varieties fruit better."
	},
	{
		id: "plum",
		name: "Plum",
		latin: "Prunus domestica",
		kind: "tree",
		zone: "orchard",
		nectar: 3,
		pollen: 2,
		months: [3, 4],
		starter: true,
		note: "Early and generous. Plant it to the side of the hives so the canopy does not shade the entrance."
	},
	{
		id: "peach",
		name: "Peach",
		latin: "Prunus persica",
		kind: "tree",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [3, 4],
		starter: false,
		note: "Blooms early and risks frost. Where peaches thrive, the bees treat the blossom as a serious flow."
	},
	{
		id: "cherry",
		name: "Cherry",
		latin: "Prunus avium",
		kind: "tree",
		zone: "orchard",
		nectar: 3,
		pollen: 2,
		months: [4],
		starter: true,
		note: "A short, intense bloom. Sweet cherries often need a partner tree; sour cherries set more reliably."
	},
	{
		id: "pear",
		name: "Pear",
		latin: "Pyrus",
		kind: "tree",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [4],
		starter: false,
		note: "Pear nectar is thin. Bees still work the pollen, and the fruit needs them. Do not spray open bloom."
	},
	{
		id: "apple",
		name: "Apple",
		latin: "Malus domestica",
		kind: "tree",
		zone: "orchard",
		nectar: 3,
		pollen: 3,
		months: [4, 5],
		starter: true,
		note: "Plant two varieties that bloom together. Dwarf or semi-dwarf trees stay out of the bees' flight line."
	},
	{
		id: "crabapple",
		name: "Crabapple",
		latin: "Malus",
		kind: "tree",
		zone: "orchard",
		nectar: 3,
		pollen: 3,
		months: [4, 5],
		starter: true,
		note: "A pollination partner for eating apples and a fine nectar source in its own right."
	},
	{
		id: "serviceberry",
		name: "Serviceberry",
		latin: "Amelanchier",
		kind: "tree",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [4],
		starter: false,
		note: "Blooms just before the apples. Birds take the fruit; bees take the flower."
	},
	{
		id: "blueberry",
		name: "Blueberry",
		latin: "Vaccinium",
		kind: "berry",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [4, 5],
		starter: true,
		note: "Needs acid soil. Honey bees visit; bumblebees pollinate the bells more thoroughly. Still plant the row."
	},
	{
		id: "currant",
		name: "Black currant",
		latin: "Ribes nigrum",
		kind: "berry",
		zone: "orchard",
		nectar: 3,
		pollen: 2,
		months: [4, 5],
		starter: true,
		note: "A quiet, high-value bush for the near belt. Flowers early and does not ask for spraying."
	},
	{
		id: "gooseberry",
		name: "Gooseberry",
		latin: "Ribes uva-crispa",
		kind: "berry",
		zone: "orchard",
		nectar: 2,
		pollen: 1,
		months: [4, 5],
		starter: false,
		note: "Blooms with the currants. Tuck it on the north side of the orchard so it does not shade the hives."
	},
	{
		id: "raspberry",
		name: "Raspberry",
		latin: "Rubus idaeus",
		kind: "berry",
		zone: "orchard",
		nectar: 3,
		pollen: 2,
		months: [
			5,
			6,
			7
		],
		starter: true,
		note: "Summer canes cover late spring. Add an everbearing row if July and August look empty — those canes flower again."
	},
	{
		id: "blackberry",
		name: "Blackberry",
		latin: "Rubus",
		kind: "berry",
		zone: "orchard",
		nectar: 3,
		pollen: 2,
		months: [
			5,
			6,
			7
		],
		starter: true,
		note: "A fenceline of bramble is both a windbreak and a flow. Wild patches inside flight range count too."
	},
	{
		id: "elder",
		name: "Elderberry",
		latin: "Sambucus",
		kind: "berry",
		zone: "orchard",
		nectar: 2,
		pollen: 2,
		months: [6],
		starter: false,
		note: "A large shrub for the outer edge of the orchard belt. Bloom bridges raspberry and the linden flow."
	},
	{
		id: "willow",
		name: "Pussy willow",
		latin: "Salix",
		kind: "tree",
		zone: "range",
		nectar: 3,
		pollen: 3,
		months: [3, 4],
		starter: true,
		note: "The colony's spring starter. A willow hedge within a mile is worth more than a flower bed."
	},
	{
		id: "maple",
		name: "Red maple",
		latin: "Acer rubrum",
		kind: "tree",
		zone: "range",
		nectar: 2,
		pollen: 3,
		months: [3, 4],
		starter: false,
		note: "Early pollen in the woods around the apiary. You rarely plant it; you notice it and protect it."
	},
	{
		id: "locust",
		name: "Black locust",
		latin: "Robinia pseudoacacia",
		kind: "tree",
		zone: "range",
		nectar: 3,
		pollen: 1,
		months: [5, 6],
		starter: false,
		note: "A short, famous flow. A week of bloom in the neighborhood can fill a super."
	},
	{
		id: "poplar",
		name: "Tulip poplar",
		latin: "Liriodendron tulipifera",
		kind: "tree",
		zone: "range",
		nectar: 3,
		pollen: 2,
		months: [5, 6],
		starter: false,
		note: "Where it grows, it is a main honey tree. Dark, strong honey. Leave the big ones standing."
	},
	{
		id: "linden",
		name: "Linden",
		latin: "Tilia",
		kind: "tree",
		zone: "range",
		nectar: 3,
		pollen: 2,
		months: [6, 7],
		starter: true,
		note: "The great early-summer flow, also called basswood. One tree in flight range feeds many colonies."
	},
	{
		id: "sumac",
		name: "Sumac",
		latin: "Rhus",
		kind: "shrub",
		zone: "range",
		nectar: 2,
		pollen: 1,
		months: [6, 7],
		starter: false,
		note: "Roadsides and field edges. Bees work the pale plumes when the clover pauses."
	},
	{
		id: "sweetclover",
		name: "Sweet clover",
		latin: "Melilotus",
		kind: "wildflower",
		zone: "range",
		nectar: 3,
		pollen: 2,
		months: [
			6,
			7,
			8
		],
		starter: false,
		note: "A classic honey plant of roadsides and unmown ground. Do not confuse it with the white clover at your feet."
	},
	{
		id: "sunflower",
		name: "Sunflower",
		latin: "Helianthus",
		kind: "crop",
		zone: "range",
		nectar: 2,
		pollen: 3,
		months: [
			7,
			8,
			9
		],
		starter: false,
		note: "Pollen more than nectar, and a good late-summer marker. A strip along the orchard still helps."
	},
	{
		id: "buckwheat",
		name: "Buckwheat",
		latin: "Fagopyrum esculentum",
		kind: "crop",
		zone: "range",
		nectar: 3,
		pollen: 1,
		months: [7, 8],
		starter: true,
		note: "Sow it to plug a summer dearth. Bloom lasts about three weeks, so stagger the sowings. The honey is dark and loud."
	},
	{
		id: "goldenrod",
		name: "Goldenrod",
		latin: "Solidago",
		kind: "wildflower",
		zone: "range",
		nectar: 3,
		pollen: 3,
		months: [
			8,
			9,
			10
		],
		starter: true,
		note: "The fall honey crop in much of the temperate world. Do not mow the meadow in August."
	},
	{
		id: "aster",
		name: "Aster",
		latin: "Symphyotrichum",
		kind: "wildflower",
		zone: "range",
		nectar: 3,
		pollen: 2,
		months: [
			8,
			9,
			10
		],
		starter: true,
		note: "Pairs with goldenrod and keeps going after it. New England aster is the one to plant if the meadow is thin."
	},
	{
		id: "joepye",
		name: "Joe-Pye weed",
		latin: "Eutrochium",
		kind: "wildflower",
		zone: "range",
		nectar: 2,
		pollen: 1,
		months: [8, 9],
		starter: false,
		note: "A tall ditch plant for damp ground at the edge of flight. Bees cover it in late summer."
	}
];
var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var MONTH_SHORT = [
	"J",
	"F",
	"M",
	"A",
	"M",
	"J",
	"J",
	"A",
	"S",
	"O",
	"N",
	"D"
];
var SHIFT = {
	early: -1,
	middle: 0,
	late: 1
};
function bloomMonths(plant, climate) {
	const shift = SHIFT[climate];
	const set = /* @__PURE__ */ new Set();
	for (const month of plant.months) {
		const next = month + shift;
		if (next >= 1 && next <= 12) set.add(next);
	}
	return [...set].sort((a, b) => a - b);
}
function plantsInMonth(month, climate, zone) {
	return PLANTS.filter((plant) => {
		if (zone !== "all" && plant.zone !== zone) return false;
		return bloomMonths(plant, climate).includes(month);
	});
}
/** March through October — the working forage year. */
var FORAGE_MONTHS = [
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
];
function gapMonths(ids, climate) {
	const chosen = PLANTS.filter((plant) => ids.includes(plant.id));
	return FORAGE_MONTHS.filter((month) => !chosen.some((plant) => bloomMonths(plant, climate).includes(month)));
}
function starterIds() {
	return PLANTS.filter((plant) => plant.starter).map((plant) => plant.id);
}
var emptyHarvest = {
	colonies: 1,
	deepFrames: 6,
	mediumFrames: 0,
	winter: "temperate"
};
var useBook = create()(persist((set) => ({
	inspections: [],
	notes: [],
	planted: [],
	climate: "middle",
	harvest: emptyHarvest,
	saveInspection: (date, checks, note) => set((state) => {
		if (!state.inspections.find((item) => item.date === date)) return { inspections: [{
			id: crypto.randomUUID(),
			date,
			checks,
			note
		}, ...state.inspections].slice(0, 60) };
		return { inspections: state.inspections.map((item) => item.date === date ? {
			...item,
			checks,
			note
		} : item) };
	}),
	addNote: (title, body) => set((state) => ({ notes: [{
		id: crypto.randomUUID(),
		date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		title: title.trim() || "Untitled",
		body: body.trim()
	}, ...state.notes].slice(0, 80) })),
	removeNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
	togglePlant: (id) => set((state) => ({ planted: state.planted.includes(id) ? state.planted.filter((item) => item !== id) : [...state.planted, id] })),
	addStarterBelt: () => set((state) => ({ planted: [.../* @__PURE__ */ new Set([...state.planted, ...starterIds()])] })),
	clearPlanted: () => set({ planted: [] }),
	setClimate: (climate) => set({ climate }),
	setHarvest: (patch) => set((state) => ({ harvest: {
		...state.harvest,
		...patch
	} }))
}), {
	name: "apiary-field-book",
	skipHydration: true
}));
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Plate({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full rounded-lg bg-comb object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm italic leading-snug text-muted",
			children: caption
		})]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-sm font-semibold tracking-wide text-honey-deep uppercase",
		children
	});
}
function Note({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-8 border-l-4 border-honey bg-honey-soft px-5 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-ink",
			children
		})]
	});
}
function H2({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-10 font-display text-3xl font-semibold text-ink",
		children
	});
}
var plates = {
	brood: "/assets/brood-B01_j7qb.jpg",
	castes: "/assets/castes-CsjUJDb4.jpg",
	cover: "/assets/cover-xUKCuC5G.jpg",
	hive: "/assets/hive-_0UpK6RG.jpg",
	meadow: "/assets/meadow-Cxc6x23F.jpg",
	orchard: "/assets/orchard-C5_z5zIo.jpg",
	swarm: "/assets/swarm-Y2ygRoW_.jpg",
	tools: "/assets/tools-CEPXDPPS.jpg",
	varroa: "/assets/varroa-eJkSUdru.jpg"
};
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function Cover({ onChapter }) {
	const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
	const blooming = plantsInMonth(month, "middle", "all").slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "A field book" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-5xl font-semibold sm:text-6xl",
			children: "The Apiary"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 font-display text-2xl text-honey-deep",
			children: "For keeping honey bees"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-lg",
			children: "Blue and the Awesome Dudes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "This is a working book, not a museum of folklore. It follows one colony through the boxes it lives in, the year it keeps, and the plants that have to flower from the first spring flight until fall. Your notes stay in this browser."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.cover,
			alt: "A honey bee on white clover beside a slice of golden honeycomb.",
			caption: "Clover and comb. The lawn you stop mowing is already part of the forage."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The calendar assumes a temperate northern year. Shift it if your spring is early, late, or upside down. Nothing here replaces a local mentor, the label on a treatment, or the inspector when brood looks wrong." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Contents" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-2",
			children: CHAPTERS.filter((chapter) => chapter.id !== "cover").map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChapter(chapter.id),
					className: "flex min-h-11 w-full items-baseline gap-4 py-3 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 font-display text-honey-deep",
							children: chapter.numeral
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: chapter.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto hidden text-sm text-muted sm:inline",
							children: chapter.blurb
						})
					]
				})
			}, chapter.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Note, {
			title: `In flower this ${MONTHS[month - 1]}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [blooming.map((plant) => plant.name).join(", "), blooming.length ? " — and more in the forage chapter, including the fruit trees and berry bushes that should stand within flight of the hives." : "Open Forage and set the month to your season."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChapter("forage"),
				className: "mt-3 min-h-11 bg-ink px-4 text-page",
				children: "Open the planting calendar"
			})]
		})
	] });
}
function Colony() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter I" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "The colony"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "A hive is not a box of identical bees. It is three castes and a schedule. Learn to read eggs before you learn to find the queen. Eggs mean she was here within the last three days, even when you miss her."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.castes,
			alt: "Three honey bees: a long queen, a worker dusted with pollen, and a large-eyed drone.",
			caption: "Queen, worker, drone. The queen is longer, the drone broader in the eye, the worker the one carrying the work."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-honey-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Queen"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "One laying queen in a healthy colony. At the peak she may lay well over a thousand eggs a day. She lives two to four years, and many colonies replace her sooner. Her scent holds the colony together."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-comb p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Worker"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "A sterile female. In summer she lives about six weeks: cleaning, nursing, building comb, guarding, then foraging. Winter bees live for months because they are raised for endurance, not for a flow."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-honey-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Drone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "A male. No sting, no pollen baskets, one job: mate in flight, and die doing it. The colony raises him in spring and throws him out when the flowers fail."
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "From egg to adult" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "font-display text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-4 font-medium",
							children: "Stage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-4 font-medium",
							children: "Queen"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-4 font-medium",
							children: "Worker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 font-medium",
							children: "Drone"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					[
						"Egg",
						"3 days",
						"3 days",
						"3 days"
					],
					[
						"Larva",
						"about 5",
						"about 6",
						"about 7"
					],
					[
						"Capped",
						"8 days",
						"12 days",
						"14 days"
					],
					[
						"Emerges",
						"day 16",
						"day 21",
						"day 24"
					]
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-t border-line",
					children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-2 pr-4",
						children: cell
					}, `${row[0]}-${cellIndex}`))
				}, row[0])) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "Days are the usual field counts. Weather and nutrition move them a little."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Three kinds of queen cell" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-4 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl",
					children: "Swarm cells"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Often along the bottom bars, many of them, while the queen is still laying. The colony is preparing to divide. Give space, or split, or accept that they may leave." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl",
					children: "Supersedure"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A few cells on the face of the comb. The bees are replacing a queen who is failing. Do not tear them down out of tidiness." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl",
					children: "Emergency"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Built over ordinary worker larvae after the queen is lost. The colony can save itself if the larvae were young enough. If you only find scattered drone brood in worker cells, you may already have laying workers." })] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Finding her",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Look where the eggs are freshest, and for the circle of attendants facing her. A marked queen is a kindness to your future self. If you cannot find her and the eggs are there, close the hive. You have your answer." })
		})
	] });
}
function Hive() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter II" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "The hive"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "This book speaks Langstroth: stacked wooden boxes and movable frames, built around bee space. Other hives work. The bees do not care about the brand. They care that the gap is right and the brood stays warm."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.hive,
			alt: "A wooden Langstroth hive in summer grass, the cover slightly ajar and bees in the air.",
			caption: "A telescoping cover, supers, and a deep brood box. The landing board is the front door."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "From the ground up" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-4 list-decimal space-y-3 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A stand, so the hive is off the damp ground and the entrance is not at skunk height if you can help it." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bottom board. Screened boards help mites fall away; solid boards are simpler in a wet winter. Pick one and learn it." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Brood box, usually a deep. Many colonies winter in one deep, or two. The queen lays here." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "An optional queen excluder. Useful when you want honey without brood. Take it off before winter so the cluster can travel." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Honey supers, often mediums, lighter to lift than deeps full of honey." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Inner cover, then a telescoping outer cover that sheds rain." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Bee space",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Leave about the width of a finger between combs and between comb and wall — roughly 6 to 9 millimetres. Smaller, and they glue it with propolis. Larger, and they build wild comb where your hands need to go." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "How to read a frame" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.brood,
			alt: "A brood frame with dark capped brood in the center, pollen around it, and pale honey along the top.",
			caption: "A classic nest: brood in the warm center, pollen as a ring, honey arched over the top."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A scattered pattern, sunken cappings, or only drone brood when you expected workers is a health question, not a quirk. See the health chapter before you decide the queen is merely eccentric." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Eight-frame boxes are lighter. Ten-frame boxes are the old standard and a little more forgiving of a clumsy inspection. Paint the outside, never the inside. Face the entrance away from the path people walk."
		})
	] });
}
function Year({ onChapter }) {
	const [month, setMonth] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).getMonth() + 1);
	const guide = YEAR.find((item) => item.month === month) ?? YEAR[0];
	const blooming = plantsInMonth(month, "middle", "all");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter III" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "The year"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "Beekeeping is seasonal work. The mistake is not ignorance. It is doing June’s job in April, or opening a cluster in January because the book felt unread. Choose the month you are actually standing in."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex gap-2 overflow-x-auto pb-1",
			children: YEAR.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMonth(item.month),
				className: cn("min-h-11 shrink-0 px-3 font-display", month === item.month ? "bg-honey text-ink" : "bg-comb text-ink"),
				children: MONTHS[item.month - 1].slice(0, 3)
			}, item.month))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 font-display text-3xl",
			children: MONTHS[guide.month - 1]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-xl text-honey-deep",
			children: guide.intent
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: guide.tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-l-4 border-line pl-4",
				children: task
			}, task))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What can be in flower" }),
		blooming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Little or nothing in a middle temperate year. The colony lives on stores. If the hive is light, feed candy or fondant — not cold syrup dumped on a cluster."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4",
			children: [blooming.map((plant) => plant.name).join(", "), ". Fruit trees and berry bushes matter most in spring. The fall plants matter because they become winter honey."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChapter("forage"),
			className: "mt-4 min-h-11 bg-ink px-4 text-page",
			children: "Open the full planting calendar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.swarm,
			alt: "A honey bee swarm hanging in a teardrop from an apple branch in blossom.",
			caption: "A swarm in the fruit bloom. Impressive, and a colony you no longer have at home."
		})
	] });
}
function Inspect() {
	const inspections = useBook((state) => state.inspections);
	const saveInspection = useBook((state) => state.saveInspection);
	const [date, setDate] = (0, import_react.useState)(today);
	const [checks, setChecks] = (0, import_react.useState)({});
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const found = useBook.getState().inspections.find((item) => item.date === date);
		setChecks(found?.checks ?? {});
		setNote(found?.note ?? "");
	}, [date]);
	const done = CHECKS.filter((item) => checks[item.id]).length;
	function persist(nextChecks, nextNote) {
		setChecks(nextChecks);
		setNote(nextNote);
		saveInspection(date, nextChecks, nextNote);
	}
	const history = (0, import_react.useMemo)(() => [...inspections].sort((a, b) => a.date < b.date ? 1 : -1), [inspections]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter IV" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Inspection"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "Open a hive for a reason, on a mild day, with a veil. Smoke the entrance, wait, and work in frames rather than in a scramble. Ten quiet minutes beat an hour of rearranging."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.tools,
			alt: "A copper smoker, hive tool, bee brush, and folded veil on a wooden bench.",
			caption: "Smoker, hive tool, brush, veil. Light the smoker before you are wearing gloves."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-2 block font-display text-lg",
			htmlFor: "inspect-date",
			children: "Date of this visit"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "inspect-date",
			type: "date",
			value: date,
			onChange: (event) => setDate(event.target.value),
			className: "mt-2 min-h-11 border border-line bg-page px-3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-display text-honey-deep tabular-nums",
			children: [
				done,
				" of ",
				CHECKS.length,
				" noted"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 divide-y divide-line border-y border-line",
			children: CHECKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 cursor-pointer items-start gap-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 size-5 accent-honey",
					checked: Boolean(checks[item.id]),
					onChange: () => persist({
						...checks,
						[item.id]: !checks[item.id]
					}, note)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
			}) }, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-6 block font-display text-lg",
			htmlFor: "inspect-note",
			children: "What you saw"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id: "inspect-note",
			value: note,
			onChange: (event) => persist(checks, event.target.value),
			rows: 5,
			placeholder: "Eggs on three frames. No queen cells. Hive feeling heavier than last week.",
			className: "mt-2 w-full border border-line bg-honey-soft px-3 py-3"
		}),
		history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Earlier visits" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-2",
			children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setDate(item.date),
				className: cn("min-h-11 px-3 tabular-nums", item.date === date ? "bg-honey" : "bg-comb"),
				children: item.date
			}) }, item.id))
		})] })
	] });
}
function Health() {
	const [bees, setBees] = (0, import_react.useState)(300);
	const [mites, setMites] = (0, import_react.useState)(3);
	const safeBees = Number.isFinite(bees) && bees > 0 ? bees : 1;
	const percent = (Number.isFinite(mites) && mites > 0 ? mites : 0) / safeBees * 100;
	const band = percent < 1 ? "Low for the moment. Sample again before you trust it." : percent < 2 ? "A watchful number. Sample again soon, especially heading into late summer." : percent < 3 ? "Many beekeepers treat before winter bees are raised, rather than waiting for deformed wings." : "High. This is a this-month problem. Collapsing colonies also rob their neighbors and share the mites.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter V" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Health"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "Most lost colonies are not a mystery. Varroa mites and the viruses they carry do the quiet damage, and the beekeeper notices in October that the box is light and empty. Sample before the bees look sick."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.varroa,
			alt: "A honey bee on wax with a small reddish varroa mite on the abdomen.",
			caption: "Varroa is a pinhead of reddish brown on the bee, easier to count in a jar than on the comb."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "A mite wash" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Shake nurse bees from a brood frame — not the queen — into a cup. About 300 bees is half a cup. An alcohol wash kills that sample and gives a fair count. A sugar roll spares them and undercounts."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display",
					children: "Bees in the sample"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 1,
					max: 1e3,
					value: bees,
					onChange: (event) => setBees(Number(event.target.value)),
					className: "mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display",
					children: "Mites counted"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 0,
					max: 500,
					value: mites,
					onChange: (event) => setMites(Number(event.target.value)),
					className: "mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-display text-4xl tabular-nums text-honey-deep",
			children: [percent.toFixed(1), "%"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: band
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "A common field reading, not a law and not veterinary advice. Thresholds shift with season, and the legal treatments shift with your country. Follow the label and your local guidance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What else goes wrong" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-4",
			children: TROUBLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: cn("border border-line p-4", item.urgent && "border-honey-deep bg-honey-soft"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: item.signs
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-honey-deep",
						children: item.action
					})
				]
			}, item.name))
		})
	] });
}
function Harvest() {
	const harvest = useBook((state) => state.harvest);
	const setHarvest = useBook((state) => state.setHarvest);
	const stores = harvest.deepFrames * 7 + harvest.mediumFrames * 4;
	const target = WINTER_TARGET[harvest.winter].lb * Math.max(1, harvest.colonies);
	const surplus = stores - target;
	function setNumber(key, value, max) {
		if (!Number.isFinite(value)) return;
		const min = key === "colonies" ? 1 : 0;
		setHarvest({ [key]: Math.min(max, Math.max(min, Math.round(value))) });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter VII" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Harvest"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "Take capped honey that the colony can spare. Uncapped nectar is water pretending to be honey, and it ferments in the jar. Brood frames stay in the hive. The first question is not how much you want. It is what they must keep."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Harvest when most cells in the super are capped, or when a refractometer reads under about 18.6 percent water." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Pull one frame at a time. Brush bees off gently. Do not shake brood frames over the grass." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A queen excluder keeps brood out of the honey supers. Remove it before winter." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Strain, settle, and jar. Return wet comb the same evening so you are not hosting a robbing frenzy at dusk tomorrow." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "What to leave" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Count frames of capped honey, not frames of brood. A full deep frame is reckoned here at 7 pounds, a medium at 4. Your comb will vary. Heft the hive before you believe the sum."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display",
						children: "Colonies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 1,
						max: 40,
						value: harvest.colonies,
						onChange: (event) => setNumber("colonies", Number(event.target.value), 40),
						className: "mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display",
						children: "Winter you expect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: harvest.winter,
						onChange: (event) => setHarvest({ winter: event.target.value }),
						className: "mt-2 min-h-11 w-full border border-line bg-page px-3",
						children: Object.keys(WINTER_TARGET).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: key,
							children: [
								key,
								" · ",
								WINTER_TARGET[key].lb,
								" lb each"
							]
						}, key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display",
						children: "Deep frames of honey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 0,
						max: 80,
						value: harvest.deepFrames,
						onChange: (event) => setNumber("deepFrames", Number(event.target.value), 80),
						className: "mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display",
						children: "Medium frames of honey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 0,
						max: 80,
						value: harvest.mediumFrames,
						onChange: (event) => setNumber("mediumFrames", Number(event.target.value), 80),
						className: "mt-2 min-h-11 w-full border border-line px-3 tabular-nums"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: WINTER_TARGET[harvest.winter].note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "bg-comb p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Estimated stores"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-3xl tabular-nums",
						children: [stores, " lb"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "bg-comb p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: "Winter target"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-3xl tabular-nums",
						children: [target, " lb"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "bg-honey-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-muted",
						children: surplus >= 0 ? "You may take" : "Still short"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-3xl tabular-nums",
						children: [Math.abs(surplus), " lb"]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: surplus >= 0 ? "That surplus is the honey you can lift off, if it is capped. Leave the target on the hive even if the jars look bare." : "Leave every frame. Feed heavy syrup only while days are warm enough for the bees to cure it, or candy once the weather has turned. Do not harvest your way into a February corpse."
		})
	] });
}
function Glossary() {
	const [query, setQuery] = (0, import_react.useState)("");
	const q = query.trim().toLowerCase();
	const terms = GLOSSARY.filter((item) => !q || item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter VIII" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Glossary"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "The few words that unlock the others. Search is blunt on purpose."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-6 block font-display",
			htmlFor: "glossary-q",
			children: "Search the words"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "glossary-q",
			value: query,
			onChange: (event) => setQuery(event.target.value),
			placeholder: "Try swarm, dearth, bee space",
			className: "mt-2 min-h-11 w-full border border-line px-3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-6 space-y-5",
			children: terms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-2xl",
				children: item.term
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1",
				children: item.def
			})] }, item.term))
		}),
		terms.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: "Nothing under that word."
		})
	] });
}
function Notes() {
	const notes = useBook((state) => state.notes);
	const addNote = useBook((state) => state.addNote);
	const removeNote = useBook((state) => state.removeNote);
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter IX" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Field notes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "Write what the hive did, not what you hoped. A date, the weather, whether you saw eggs, whether the orchard was in bloom. These pages stay on this device."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-6 block font-display",
			htmlFor: "note-title",
			children: "Title"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: "note-title",
			value: title,
			onChange: (event) => setTitle(event.target.value),
			placeholder: "Apple bloom, north hive",
			className: "mt-2 min-h-11 w-full border border-line px-3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mt-4 block font-display",
			htmlFor: "note-body",
			children: "Note"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id: "note-body",
			value: body,
			onChange: (event) => setBody(event.target.value),
			rows: 5,
			placeholder: "Plums are finished, apples just opening. Both hives heavy with nectar. No queen cells.",
			className: "mt-2 w-full border border-line bg-honey-soft px-3 py-3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			disabled: !body.trim(),
			onClick: () => {
				addNote(title, body);
				setTitle("");
				setBody("");
			},
			className: "mt-3 min-h-11 bg-ink px-4 text-page disabled:opacity-40",
			children: "Save this page"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Saved pages" }),
		notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: "No pages yet. The first note is usually shorter than you think it should be."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-4",
			children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: note.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							className: "text-sm text-muted tabular-nums",
							children: note.date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 whitespace-pre-wrap",
						children: note.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => removeNote(note.id),
						className: "mt-3 min-h-11 text-honey-deep",
						children: "Remove page"
					})
				]
			}, note.id))
		})
	] });
}
var KINDS = [
	"all",
	"tree",
	"berry",
	"herb",
	"wildflower",
	"crop",
	"shrub"
];
function Forage() {
	const climate = useBook((state) => state.climate);
	const setClimate = useBook((state) => state.setClimate);
	const planted = useBook((state) => state.planted);
	const togglePlant = useBook((state) => state.togglePlant);
	const addStarterBelt = useBook((state) => state.addStarterBelt);
	const clearPlanted = useBook((state) => state.clearPlanted);
	const [month, setMonth] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).getMonth() + 1);
	const [zone, setZone] = (0, import_react.useState)("all");
	const [kind, setKind] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => PLANTS.filter((plant) => (zone === "all" || plant.zone === zone) && (kind === "all" || plant.kind === kind)), [zone, kind]);
	const blooming = (0, import_react.useMemo)(() => plantsInMonth(month, climate, zone).filter((plant) => kind === "all" || plant.kind === kind), [
		month,
		climate,
		zone,
		kind
	]);
	const gaps = gapMonths(planted, climate);
	const orchardCount = planted.filter((id) => PLANTS.find((plant) => plant.id === id)?.zone === "orchard").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Chapter VI" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold sm:text-5xl",
			children: "Forage"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "drop mt-6",
			children: "A colony does not live on a single blossom. From the first warm flight of spring until the last pollen of fall, something within reach has to be in flower. Fruit trees and berry bushes belong close to the hives. The meadow and the wild trees, out at flying range, finish the year."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.orchard,
			alt: "Three wooden hives in a blossoming orchard, with berry bushes in front and a wild hedgerow beyond.",
			caption: "Hives in the orchard belt: fruit trees and berry rows nearby, wild trees beyond."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "Three distances" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Most foraging trips stay inside a kilometre. Bees can fly two or three, and sometimes farther, but honey costs more the farther they carry it. Plant the continuous bloom as close as the entrance will allow."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 bg-comb p-3 sm:p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-2 font-display text-sm text-muted",
				children: "Flying range · out to about 3 km"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 bg-honey-soft p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 font-display text-sm text-honey-deep",
					children: "Orchard belt · 15–100 m · fruit and berries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 border border-line bg-page p-3 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-muted",
						children: "At the hives · the first 15 m"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl",
						children: "Clover, herbs, water"
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3",
			children: ZONES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setZone((current) => current === item.id ? "all" : item.id),
				className: cn("min-h-11 border px-4 py-3 text-left", zone === item.id ? "border-honey bg-honey-soft" : "border-line bg-page"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-honey-deep",
						children: item.range
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted",
						children: item.body
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
			title: "Do not spray the bloom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Insecticide on open apple, pear, cherry, or berry flowers kills the insects you planted the row for. If a treatment cannot wait, it happens after bees are home, and only as the label allows. Better: nothing at all while the flowers are open." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "How to set the orchard" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-4 list-decimal space-y-3 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Put the fruit to the side or behind the hives, not in front of the landing board, and not where it shades the entrance at morning." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Choose dwarf and semi-dwarf apples, crabapples, cherries, plums, and pears. Forest-sized trees belong out in the flying range, not on the stand." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Run raspberries, blackberries, currants, gooseberries, and blueberries as a windbreak on the windward side." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Give two apple varieties that bloom together, or a crabapple as the partner. A lone tree is a poor crop and a short meal." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Set water closer than the neighbor’s pool: a shallow pan with stones so bees can drink without drowning." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Fruit and berries carry spring into early summer. They do not carry August. Clover underfoot, herbs, a sowing of buckwheat, and a goldenrod and aster meadow have to close the year, or the colony meets a dearth with the supers still on."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
			src: plates.meadow,
			alt: "A summer meadow of clover, lavender, sunflower, and goldenrod with honey bees foraging.",
			caption: "Beyond the orchard, the meadow has to keep flowering after the fruit petals fall."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "The bloom calendar" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Dates below fit a middle temperate year in the north. If your spring comes early or late, shift the book. If you live where spring begins in August, keep the order and start at your first warm month — succession matters more than the names on the calendar."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [
				["early", "Early spring"],
				["middle", "Middle"],
				["late", "Late spring"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setClimate(id),
				className: cn("min-h-11 px-4", climate === id ? "bg-ink text-page" : "bg-comb text-ink"),
				children: label
			}, id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-2 overflow-x-auto pb-1",
			children: MONTHS.map((name, index) => {
				const value = index + 1;
				const inSeason = FORAGE_MONTHS.includes(value);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMonth(value),
					className: cn("min-h-11 shrink-0 px-3 font-display", month === value ? "bg-honey text-ink" : "bg-page text-ink", !inSeason && month !== value && "text-muted"),
					children: name.slice(0, 3)
				}, name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: KINDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setKind(id),
				className: cn("min-h-11 border px-3 text-sm", kind === id ? "border-ink bg-ink text-page" : "border-line bg-page text-ink"),
				children: id === "all" ? "All plants" : KIND_LABEL[id]
			}, id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bloom-scroll",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bloom-grid text-center font-display text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-left",
						children: "In flower"
					}), MONTH_SHORT.map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn(month === index + 1 && "text-honey-deep"),
						children: letter
					}, `${letter}-${index}`))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1",
					children: visible.map((plant) => {
						const months = bloomMonths(plant, climate);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "bloom-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm",
								children: plant.name
							}), MONTH_SHORT.map((_, index) => {
								const on = months.includes(index + 1);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mx-auto block size-3.5 rounded-sm", on ? "bg-honey" : "bg-line", month === index + 1 && "ring-2 ring-ink") }, plant.id + index);
							})]
						}, plant.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(H2, { children: [
			"In flower in ",
			MONTHS[month - 1],
			zone !== "all" ? ` · ${ZONE_LABEL[zone]}` : ""
		] }),
		blooming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: "Nothing in this filter is in bloom. That empty month is a dearth — add a plant that covers it, or look one zone farther out."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 divide-y divide-line border-y border-line",
			children: blooming.map((plant) => {
				const on = planted.includes(plant.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: plant.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "italic text-muted",
							children: plant.latin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-honey-deep",
							children: [
								KIND_LABEL[plant.kind],
								" · ",
								ZONE_LABEL[plant.zone],
								" · nectar ",
								plant.nectar,
								"/3 · pollen ",
								plant.pollen,
								"/3"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: plant.note
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => togglePlant(plant.id),
						className: cn("min-h-11 shrink-0 px-4 font-display", on ? "bg-honey text-ink" : "bg-bark text-page"),
						children: on ? "In my planting" : "Add to planting"
					})]
				}, plant.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, { children: "My planting" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4",
			children: "Tick what already grows within flight, and what you mean to put in. The book checks March through October for a month with nothing in flower."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: addStarterBelt,
				className: "min-h-11 bg-ink px-4 text-page",
				children: "Add the starter belt"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: clearPlanted,
				className: "min-h-11 border border-line px-4",
				children: "Clear the list"
			})]
		}),
		planted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted",
			children: "The starter belt is clover and herbs at the stand, a short orchard of plum, apple, crabapple, cherry, honeyberry, blueberry, currant, raspberry, and blackberry, then willow, linden, buckwheat, goldenrod, and aster out at range."
		}) : gaps.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4",
			children: [
				"Your list flowers from March through October without a gap. That is the whole trick. ",
				orchardCount,
				" of those plants sit in the orchard belt, beside the hives."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4",
			children: [
				"Still empty: ",
				gaps.map((item) => MONTHS[item - 1]).join(", "),
				". Fruit trees will not fill a late summer hole. Look to clover, borage, buckwheat, goldenrod, and aster.",
				orchardCount > 0 ? ` You have ${orchardCount} in the orchard belt.` : ""
			]
		}),
		planted.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 flex flex-wrap gap-2",
			children: PLANTS.filter((plant) => planted.includes(plant.id)).map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => togglePlant(plant.id),
				className: "min-h-11 bg-honey-soft px-3 text-sm",
				children: [plant.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: " · remove"
				})]
			}) }, plant.id))
		})
	] });
}
function ChapterBody({ chapter, onChapter }) {
	switch (chapter) {
		case "cover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, { onChapter });
		case "colony": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Colony, {});
		case "hive": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hive, {});
		case "year": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Year, { onChapter });
		case "inspect": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspect, {});
		case "health": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Health, {});
		case "forage": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Forage, {});
		case "harvest": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Harvest, {});
		case "glossary": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glossary, {});
		case "notes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notes, {});
	}
}
function Contents({ chapter, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Contents",
		className: "flex flex-col gap-1",
		children: CHAPTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick(item.id),
			className: cn("flex min-h-11 items-baseline gap-3 px-3 text-left", chapter === item.id ? "bg-honey text-ink" : "text-page"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 font-display text-sm",
				children: item.numeral
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg",
				children: item.label
			})]
		}, item.id))
	});
}
function BookApp({ chapter, onChapter }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useBook.persist.rehydrate();
	}, []);
	const index = CHAPTERS.findIndex((item) => item.id === chapter);
	const current = CHAPTERS[index] ?? CHAPTERS[0];
	const prev = index > 0 ? CHAPTERS[index - 1] : null;
	const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;
	function pick(id) {
		setOpen(false);
		onChapter(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bark lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "sticky top-0 hidden h-screen flex-col bg-bark px-4 py-8 text-page lg:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 font-display text-3xl font-semibold",
					children: "The Apiary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 px-3 text-sm text-honey-soft",
					children: "Blue and the Awesome Dudes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contents, {
						chapter,
						onPick: pick
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex items-center gap-2 bg-bark px-3 py-2 text-page lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Open contents",
						onClick: () => setOpen(true),
						className: "grid size-11 place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-none",
						children: "The Apiary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-honey-soft",
						children: [
							current.numeral,
							" · ",
							current.label
						]
					})] })]
				}),
				open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-30 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close contents",
						className: "absolute inset-0 bg-bark/80",
						onClick: () => setOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-y-0 left-0 flex w-72 flex-col bg-bark px-4 py-6 text-page",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: "Contents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Close",
								onClick: () => setOpen(false),
								className: "grid size-11 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contents, {
								chapter,
								onPick: pick
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "mx-auto max-w-3xl px-4 py-6 sm:px-8 sm:py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-lg bg-page px-5 py-8 text-ink shadow-md sm:px-10 sm:py-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBody, {
							chapter,
							onChapter: pick
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",
							children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pick(prev.id),
								className: "min-h-11 px-2 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: "Previous"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl",
									children: prev.label
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pick(next.id),
								className: "min-h-11 px-2 text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: "Next"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl",
									children: next.label
								})]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 px-1 text-sm leading-relaxed text-honey-soft",
						children: "The Apiary, by Blue and the Awesome Dudes. Educational field notes for a temperate apiary — not veterinary advice. Follow local law, treatment labels, and your inspector. Never spray fruit trees or berries while they are in bloom."
					})]
				})
			]
		})]
	});
}
function Home() {
	const { chapter } = Route.useSearch();
	const navigate = useNavigate({ from: Route.fullPath });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookApp, {
		chapter,
		onChapter: (next) => {
			navigate({ search: { chapter: next } });
			window.scrollTo({
				top: 0,
				left: 0
			});
		}
	});
}
//#endregion
export { Home as component };
