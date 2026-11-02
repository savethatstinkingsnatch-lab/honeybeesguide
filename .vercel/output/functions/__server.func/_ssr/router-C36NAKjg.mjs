import { i as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_react, v as createRootRoute, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C36NAKjg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-Dww3E97l.css";
var APP_NAME = "The Apiary";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "The Apiary by Blue and the Awesome Dudes. A field book for keeping honey bees."
			},
			{
				name: "theme-color",
				content: "#3d2b1f"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var CHAPTERS = [
	{
		id: "cover",
		label: "Contents",
		numeral: "—",
		blurb: "How to read this book"
	},
	{
		id: "colony",
		label: "The colony",
		numeral: "I",
		blurb: "Queen, worker, and drone"
	},
	{
		id: "hive",
		label: "The hive",
		numeral: "II",
		blurb: "Boxes, frames, and bee space"
	},
	{
		id: "year",
		label: "The year",
		numeral: "III",
		blurb: "What the month asks of you"
	},
	{
		id: "inspect",
		label: "Inspection",
		numeral: "IV",
		blurb: "A list you can keep"
	},
	{
		id: "health",
		label: "Health",
		numeral: "V",
		blurb: "Mites, brood, and trouble"
	},
	{
		id: "forage",
		label: "Forage",
		numeral: "VI",
		blurb: "Bloom from spring to fall"
	},
	{
		id: "harvest",
		label: "Harvest",
		numeral: "VII",
		blurb: "What you may take"
	},
	{
		id: "glossary",
		label: "Glossary",
		numeral: "VIII",
		blurb: "Words of the craft"
	},
	{
		id: "notes",
		label: "Field notes",
		numeral: "IX",
		blurb: "Your own pages"
	}
];
function isChapterId(value) {
	return CHAPTERS.some((chapter) => chapter.id === value);
}
var CHECKS = [
	{
		id: "smoke",
		label: "Smoked the entrance and waited a slow minute"
	},
	{
		id: "temper",
		label: "Temper is workable, not a roaring defense"
	},
	{
		id: "queen",
		label: "Queen seen, or fresh eggs standing one to a cell"
	},
	{
		id: "pattern",
		label: "Brood is a solid oval, not a scatter of empty cells"
	},
	{
		id: "larvae",
		label: "Larvae pearly and wet; cappings even, not sunken"
	},
	{
		id: "stores",
		label: "Honey and pollen enough for the next dearth"
	},
	{
		id: "space",
		label: "Room to lay and to store — not honey-bound, not packed"
	},
	{
		id: "cells",
		label: "Checked frame bottoms and faces for queen cells"
	},
	{
		id: "pests",
		label: "Looked for mites, beetles, moth webbing, and robbing"
	},
	{
		id: "gear",
		label: "Boxes square, lids close, no mouse or skunk damage"
	}
];
var WINTER_TARGET = {
	mild: {
		lb: 40,
		note: "Short winters, reliable early bloom."
	},
	temperate: {
		lb: 70,
		note: "A real winter and a spring that can stall."
	},
	cold: {
		lb: 90,
		note: "Long cluster, late pollen, little margin."
	}
};
var YEAR = [
	{
		month: 1,
		intent: "Leave the cluster alone.",
		tasks: [
			"Heft the back of the hive. A light colony gets fondant or a candy board, not an open inspection in a freeze.",
			"Sweep dead bees off the entrance only if they are blocking air.",
			"Order frames, foundation, and jars before spring."
		]
	},
	{
		month: 2,
		intent: "Watch for the first pollen, and still stay out.",
		tasks: [
			"Crocus and the earliest willow catkins are a signal, not an invitation to pull frames.",
			"On a mild day, a quick peek under the cover is enough to see cluster size and emergency feed.",
			"Repair equipment in the shed. The bees are not bored; you might be."
		]
	},
	{
		month: 3,
		intent: "Build-up begins. Feed only if stores are truly thin.",
		tasks: [
			"Maple and willow pollen turn the bees' corbiculae bright. The queen is laying again.",
			"A light hive can take 1:1 syrup once days are reliably mild. Never flood a cold cluster.",
			"Clean or swap a solid bottom board if it is packed with debris. Work fast."
		]
	},
	{
		month: 4,
		intent: "Make room before the bees decide to leave.",
		tasks: [
			"Fruit bloom — plum, cherry, pear, apple — is the surge. Inspect every seven to ten days.",
			"Reverse brood boxes only if the cluster is stuck in the top and the bottom is empty.",
			"Add drawn comb if you have it. Foundation alone, in a cold snap, is a poor gift."
		]
	},
	{
		month: 5,
		intent: "Swarm season. This is the working month.",
		tasks: [
			"Look for queen cells along the bottom bars. Charged swarm cells mean the colony is preparing to divide.",
			"Give space ahead of congestion: a super of drawn comb, or a split if the colony is truly strong.",
			"A clipped or marked queen is easier to find now than in August."
		]
	},
	{
		month: 6,
		intent: "The main flow. Super early, not late.",
		tasks: [
			"Clover, bramble, and linden can fill a box while you are at work. Add the next super at seven frames full, not ten.",
			"Keep the brood nest from being packed with nectar. That is honey-bound, and it starts swarming all over again.",
			"Do not harvest the first blush of honey if your winter target is not already safe."
		]
	},
	{
		month: 7,
		intent: "In many places the flowers pause. Robbing starts.",
		tasks: [
			"A July dearth is normal where clover has been cut and goldenrod has not begun.",
			"Narrow entrances. Do not spill syrup or leave wet comb in the open.",
			"Sample for varroa. The mites that ride this month's bees become the winter collapse."
		]
	},
	{
		month: 8,
		intent: "Protect the winter bees before they are born.",
		tasks: [
			"Winter bees are raised now and next month. A heavy mite load shortens their lives.",
			"Treat or manage mites according to what your sample showed and what is legal where you live.",
			"Sow buckwheat or lean on goldenrod if the yard has gone quiet. See Forage."
		]
	},
	{
		month: 9,
		intent: "Take only surplus. Arrange the brood nest for winter.",
		tasks: [
			"Goldenrod and aster are the last great flow in much of the temperate north.",
			"Remove honey you are truly allowed to keep. Leave the target weight. See Harvest.",
			"Confine the brood nest to the boxes you want them to winter in. Exit reducers go on."
		]
	},
	{
		month: 10,
		intent: "Close the hive properly, then stop fiddling.",
		tasks: [
			"Mouse guards on. Queen excluder off — a cluster must be free to move to honey.",
			"A last heft. Feed heavy syrup only while days are warm enough for the bees to cure it.",
			"Combine a hopelessly weak colony with a strong one rather than wishing."
		]
	},
	{
		month: 11,
		intent: "They are a cluster now.",
		tasks: [
			"Insulation and a windbreak help in exposed yards. Moisture, not cold, is what kills.",
			"A dry inner cover with a small upper vent beats a sealed wet box.",
			"Read your notes from May. Order queens or make plans while the season is still honest in your memory."
		]
	},
	{
		month: 12,
		intent: "A year ends quietly.",
		tasks: [
			"Check that lids have not blown and entrances are clear after snow.",
			"Do not tap the hive to 'see if they are alive.' You will hear them on a still day if you must.",
			"Render wax, clean jars, and leave the bees to their honey."
		]
	}
];
var TROUBLES = [
	{
		name: "Varroa mite",
		signs: "Tiny reddish ovals on bees or in drone brood. Spotty brood, crawling bees, and deformed wings come later — that is the virus, not the first warning.",
		action: "Sample monthly in the warm season with an alcohol wash of about 300 bees. Many beekeepers act around 2–3 mites per 100 bees, and want the load lower before winter bees are raised."
	},
	{
		name: "Deformed wing virus",
		signs: "Bees with shriveled, useless wings, often with a high mite count.",
		action: "You cannot treat the virus directly. Knock the mites down. A colony this far along may not recover this season."
	},
	{
		name: "American foulbrood",
		signs: "Sunken, perforated cappings; brood that ropes out in a brown thread; a foul smell. Scales stick in the cell.",
		action: "Stop. Close the hive. Do not move frames, and do not feed honey from this colony to another. It is reportable in many regions. Call your inspector.",
		urgent: true
	},
	{
		name: "European foulbrood",
		signs: "Twisted, melted larvae before they are capped, often in spring when nutrition is poor.",
		action: "A strong nectar flow and a young queen often clear a mild case. Confirm the diagnosis before you treat. It is not the same disease as American foulbrood."
	},
	{
		name: "Chalkbrood",
		signs: "Hard white or black mummies of larvae on the landing board and in cells.",
		action: "Usually a stress disease of cool, damp weather. Improve ventilation and let the colony outgrow it. Do not spread the mummies around the yard."
	},
	{
		name: "Wax moth",
		signs: "Silken galleries through comb, webbing, and cocoons in stored or weak boxes.",
		action: "Strong colonies police their own comb. The moth is a symptom of emptiness. Freeze spare comb, or keep it on bees."
	},
	{
		name: "Small hive beetle",
		signs: "Dark beetles running from light, and slimy fermented comb when the colony is too weak to guard it.",
		action: "Keep colonies strong, do not leave wet supers standing in the honey house, and use the traps that are legal where you live."
	},
	{
		name: "Robbing",
		signs: "Fighting at the entrance, bees darting for cracks, wax crumbs, and a frantic sound.",
		action: "Close the hive down to a small entrance, stop feeding in the open, and do not inspect every colony in the yard once robbing has started."
	}
];
var GLOSSARY = [
	{
		term: "Bee space",
		def: "The gap bees will not fill with wax or propolis, about 6 to 9 millimetres. Langstroth built the hive around it."
	},
	{
		term: "Bee bread",
		def: "Pollen packed into cells and fermented with honey. This is what nurse bees actually eat."
	},
	{
		term: "Brood",
		def: "Eggs, larvae, and pupae. The living nursery, usually a warm oval in the center of the nest."
	},
	{
		term: "Capped honey",
		def: "Ripe honey sealed under wax. Uncapped nectar is still water. Do not extract it."
	},
	{
		term: "Dearth",
		def: "A stretch with little nectar. July is a classic dearth where the spring flow has ended and goldenrod has not begun."
	},
	{
		term: "Drone",
		def: "A male bee. He does not forage or sting. His only work is mating, and the colony expels him in the fall."
	},
	{
		term: "Forager",
		def: "An older worker who flies for nectar, pollen, water, or resin. Most flights stay inside a mile or two."
	},
	{
		term: "Frame",
		def: "The wooden rectangle that holds a comb. You handle frames, not loose wax, if the hive is a modern one."
	},
	{
		term: "Honey-bound",
		def: "A brood nest so packed with nectar that the queen has nowhere to lay. It invites swarming."
	},
	{
		term: "Laying worker",
		def: "A worker that lays unfertilized eggs after a colony has been queenless too long. The brood is drone brood in worker cells, scattered and domed."
	},
	{
		term: "Nectar flow",
		def: "Days when plants yield enough nectar that the hive gains weight. Not every bloom is a flow."
	},
	{
		term: "Propolis",
		def: "Resin the bees collect and use as varnish, glue, and a crude disinfectant."
	},
	{
		term: "Queen cell",
		def: "A peanut-shaped cell for raising a queen. On the bottom of frames it often means swarming. In the middle, after queen loss, it is an emergency."
	},
	{
		term: "Queen cup",
		def: "An empty play cup. Common and harmless until it holds a larva and royal jelly."
	},
	{
		term: "Robbing",
		def: "Bees stealing honey from a weak hive or from your own carelessness. It spreads mites and disease."
	},
	{
		term: "Royal jelly",
		def: "The rich food of young larvae and, for longer, of a queen larva. Diet, not genetics alone, makes the queen."
	},
	{
		term: "Super",
		def: "A box added above the brood nest for honey. 'Super' simply means above."
	},
	{
		term: "Supersedure",
		def: "The colony replacing a failing queen without leaving. A few queen cells, and the old queen may remain for a time."
	},
	{
		term: "Swarm",
		def: "The old queen leaving with a share of the bees to start another home. Natural, and expensive if you wanted that honey."
	},
	{
		term: "Varroa",
		def: "Varroa destructor, the parasitic mite that lives on bees and in brood, and the main reason colonies die."
	},
	{
		term: "Winter cluster",
		def: "The ball of bees that keeps the queen and brood warm. They move slowly onto stored honey. They do not heat the whole box."
	}
];
var $$splitComponentImporter = () => import("./routes-CfQ5-BJE.mjs");
var Route = createFileRoute("/")({
	validateSearch: (search) => {
		const raw = typeof search.chapter === "string" ? search.chapter : "cover";
		return { chapter: isChapterId(raw) ? raw : "cover" };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { GLOSSARY as a, YEAR as c, CHECKS as i, Route as n, TROUBLES as o, CHAPTERS as r, WINTER_TARGET as s, router_exports as t };
