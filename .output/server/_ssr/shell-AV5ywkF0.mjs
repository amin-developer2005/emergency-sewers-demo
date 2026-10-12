import { i as __toESM } from "../_runtime.mjs";
import { a as PHONE_TEL, i as PHONE_DISPLAY, n as EMAIL, r as LOCATION, t as BUSINESS } from "./site-DfjeGky5.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-AV5ywkF0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: "grid size-9 shrink-0 place-items-center rounded-md bg-ink text-sm font-medium tracking-wide text-paper",
		children: "ES"
	});
}
function DemoBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bg-ink px-5 py-2 text-center text-sm leading-snug text-paper",
		children: "Website concept — This demo was created for presentation purposes only and is not the official website of Emergency Sewers."
	});
}
function Header() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(event) {
			if (event.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-line bg-paper/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap flex items-center justify-between gap-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3 rounded-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl text-ink",
							children: BUSINESS
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: "Brooklyn, NY"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium " + (active ? "text-accent" : "text-ink-soft hover:text-ink"),
							"aria-current": active ? "page" : void 0,
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink",
						children: ["Call ", PHONE_DISPLAY]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition-colors duration-150 hover:bg-accent-hover",
						children: "Request Service"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg",
						children: "Call"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: open ? "Close" : "Menu"
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			"aria-label": "Mobile",
			className: "border-t border-line lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col py-2",
				children: [NAV.map((item) => {
					const active = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "inline-flex min-h-11 items-center text-base font-medium " + (active ? "text-accent" : "text-ink"),
						"aria-current": active ? "page" : void 0,
						children: item.label
					}, item.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg",
					children: "Request Service"
				})]
			})
		}) : null]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoBanner, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageCta({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-ink text-paper",
		"aria-labelledby": "page-cta-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-8 py-14 lg:grid-cols-12 lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "page-cta-title",
					className: "font-display text-4xl leading-tight text-paper",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "prose-measure mt-4 text-base leading-relaxed text-paper/80",
					children: body
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper-deep",
					children: "Request Service"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "inline-flex min-h-11 items-center justify-center rounded-full border border-paper/30 px-5 text-sm font-medium text-paper transition-colors duration-150 hover:border-paper",
					children: ["Call ", PHONE_DISPLAY]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper-deep",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-ink",
							children: BUSINESS
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "prose-measure mt-3 text-sm leading-relaxed text-ink-soft",
							children: "Drainage, sewer, and emergency plumbing services publicly associated with a business listed in Brooklyn, NY 11223."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm leading-relaxed text-ink",
							children: "Website concept — This demo was created for presentation purposes only and is not the official website of Emergency Sewers."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-muted",
					children: "Navigate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "inline-flex min-h-11 items-center text-sm text-ink hover:text-accent",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-muted",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-1 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center hover:text-accent",
							href: `tel:${PHONE_TEL}`,
							children: PHONE_DISPLAY
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 items-center break-all hover:text-accent",
							href: `mailto:${EMAIL}`,
							children: EMAIL
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-2 text-ink-soft",
							children: LOCATION
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wrap py-4 text-xs leading-relaxed text-muted",
				children: "No street address is shown because a preferred customer-facing street address was not independently confirmed. Customer reviews can be added here once verified."
			})
		})]
	});
}
//#endregion
export { SiteShell as n, PageCta as t };
