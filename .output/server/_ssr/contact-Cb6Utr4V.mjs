import { i as __toESM } from "../_runtime.mjs";
import { a as PHONE_TEL, i as PHONE_DISPLAY, n as EMAIL, r as LOCATION, s as SERVICE_OPTIONS } from "./site-DfjeGky5.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell } from "./shell-AV5ywkF0.mjs";
import { n as Route$1 } from "./router-DtirXGDt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cb6Utr4V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	name: "",
	email: "",
	phone: "",
	service: "",
	message: ""
};
function validate(fields) {
	const errors = {};
	if (fields.name.trim().length < 2) errors.name = "Enter your name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "Enter a valid email address.";
	if (fields.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a phone number with at least 10 digits.";
	if (!fields.service) errors.service = "Choose a service.";
	if (fields.message.trim().length < 12) errors.message = "Describe the problem in at least a short sentence.";
	return errors;
}
function RequestForm({ initialService = "" }) {
	const [fields, setFields] = (0, import_react.useState)({
		...EMPTY,
		service: initialService
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [preview, setPreview] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!initialService) return;
		setFields((current) => ({
			...current,
			service: initialService
		}));
	}, [initialService]);
	function update(name, value) {
		setFields((current) => ({
			...current,
			[name]: value
		}));
		setErrors((current) => ({
			...current,
			[name]: void 0
		}));
		setPreview(false);
	}
	function onSubmit(event) {
		event.preventDefault();
		const next = validate(fields);
		setErrors(next);
		setPreview(Object.keys(next).length === 0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "rounded-xl bg-surface p-5 shadow-card sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-ink-soft",
				children: [
					"This form demonstrates the request a finished site would collect. It does not email Emergency Sewers and it does not store your details. To reach the business, call",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-medium text-accent underline-offset-2 hover:underline",
						href: `tel:${PHONE_TEL}`,
						children: PHONE_DISPLAY
					}),
					" ",
					"or email",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "font-medium text-accent underline-offset-2 hover:underline",
						href: `mailto:${EMAIL}`,
						children: EMAIL
					}),
					"."
				]
			}),
			preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-lg border border-line bg-paper p-5",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-ink",
						children: "Demonstration only — nothing was sent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-soft",
						children: [
							"Your details stayed in this browser. Emergency Sewers was not notified, and no message was delivered. Call ",
							PHONE_DISPLAY,
							" or email ",
							EMAIL,
							" if you want to contact the business."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fields.name })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "break-all",
									children: fields.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fields.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Service"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: fields.service })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_1fr] gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "whitespace-pre-wrap",
									children: fields.message
								})]
							})
						]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						name: "name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							name: "name",
							autoComplete: "name",
							value: fields.name,
							onChange: (event) => update("name", event.target.value),
							className: inputClass(Boolean(errors.name)),
							"aria-invalid": Boolean(errors.name),
							"aria-describedby": errors.name ? "name-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							inputMode: "email",
							value: fields.email,
							onChange: (event) => update("email", event.target.value),
							className: inputClass(Boolean(errors.email)),
							"aria-invalid": Boolean(errors.email),
							"aria-describedby": errors.email ? "email-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						name: "phone",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							inputMode: "tel",
							value: fields.phone,
							onChange: (event) => update("phone", event.target.value),
							className: inputClass(Boolean(errors.phone)),
							"aria-invalid": Boolean(errors.phone),
							"aria-describedby": errors.phone ? "phone-error" : void 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Service needed",
						name: "service",
						error: errors.service,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "service",
							name: "service",
							value: fields.service,
							onChange: (event) => update("service", event.target.value),
							className: inputClass(Boolean(errors.service)),
							"aria-invalid": Boolean(errors.service),
							"aria-describedby": errors.service ? "service-error" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a service"
							}), SERVICE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option,
								children: option
							}, option))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
						label: "Message",
						name: "message",
						error: errors.message,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							rows: 5,
							value: fields.message,
							onChange: (event) => update("message", event.target.value),
							className: inputClass(Boolean(errors.message)) + " min-h-32 resize-y py-3",
							"aria-invalid": Boolean(errors.message),
							"aria-describedby": errors.message ? "message-error" : "message-hint"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "message-hint",
							className: "text-sm text-muted",
							children: "Which fixture, how long it has been happening, and whether one room or several are affected."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition-colors duration-150 hover:bg-accent-hover sm:w-auto",
				children: "Submit request"
			})
		]
	});
}
function Field({ label, name, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: name,
				className: "text-sm font-medium text-ink",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${name}-error`,
				className: "text-sm text-danger",
				children: error
			}) : null
		]
	});
}
function inputClass(invalid) {
	return "min-h-11 w-full rounded-md border bg-paper px-3 text-base text-ink " + (invalid ? "border-danger" : "border-line");
}
function ContactPage() {
	const { service } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wrap grid gap-12 py-14 lg:grid-cols-12 lg:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-accent",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl leading-tight",
					children: "Reach Emergency Sewers directly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 leading-relaxed text-ink-soft",
					children: "The phone number and email below are the public contacts for the business listed in Brooklyn, NY 11223. Use either one for a real conversation. The form is a demonstration of how a request would be written — submitting it does not notify anyone."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-display text-3xl text-ink hover:text-accent",
									href: `tel:${PHONE_TEL}`,
									children: PHONE_DISPLAY
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-lg break-all text-ink hover:text-accent",
									href: `mailto:${EMAIL}`,
									children: EMAIL
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm text-muted",
									children: "Listed location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-lg text-ink",
									children: LOCATION
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm leading-relaxed text-muted",
									children: "No street address is displayed. A preferred customer-facing street address was not independently confirmed."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-muted",
								children: "Reported hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm leading-relaxed text-ink-soft",
								children: "A public listing shows 24 hours. Confirm current availability when you call. No arrival window is stated here, because none was verified."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 font-display text-2xl",
					children: "What is useful to include"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your name and a phone number where you can be reached." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The Brooklyn address of the property, when you call or email." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The closest service category, or Other if you are unsure." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Whether one fixture or several are affected, and for how long." })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Service request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-ink-soft",
					children: "Required fields are labeled. After a valid submission you will see your entries on screen, together with a clear note that they were not sent."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestForm, { initialService: service ?? "" })
				})
			]
		})]
	}) });
}
//#endregion
export { ContactPage as component };
