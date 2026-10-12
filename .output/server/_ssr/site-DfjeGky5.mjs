//#region node_modules/.nitro/vite/services/ssr/assets/site-DfjeGky5.js
var BUSINESS = "Emergency Sewers";
var PHONE_DISPLAY = "800-301-1429";
var PHONE_TEL = "+18003011429";
var EMAIL = "emergencysewers@gmail.com";
var LOCATION = "Brooklyn, NY 11223";
var PUBLIC_DESCRIPTION = "Emergency Sewers is your One-Stop-Shop for all your drainage needs. If you have a clogged drain or a problem with your sewer that you just can't fix, no need to look any further.";
var SERVICE_OPTIONS = [
	"Drainage Services",
	"Sewer Services",
	"Emergency Plumbing",
	"Toilet Plumbing",
	"Toilet Installation",
	"Disposal Services",
	"Other"
];
var services = [
	{
		id: "drainage",
		title: "Drainage Services",
		option: "Drainage Services",
		summary: "Slow sinks, standing showers, and drains that are no longer carrying water away."
	},
	{
		id: "sewer",
		title: "Sewer Services",
		option: "Sewer Services",
		summary: "Sewer problems, including backups and odors that seem to reach beyond a single fixture."
	},
	{
		id: "emergency-plumbing",
		title: "Emergency Plumbing",
		option: "Emergency Plumbing",
		summary: "Urgent plumbing situations tied to the drainage, sewer, toilet, and disposal work listed for this business."
	},
	{
		id: "toilet-plumbing",
		title: "Toilet Plumbing",
		option: "Toilet Plumbing",
		summary: "Toilets that will not flush, keep running, clog repeatedly, or leak."
	},
	{
		id: "toilet-installation",
		title: "Toilet Installation",
		option: "Toilet Installation",
		summary: "Putting a toilet in place, as distinct from repairing one that is already installed."
	},
	{
		id: "disposal",
		title: "Disposal Services",
		option: "Disposal Services",
		summary: "Garbage disposals that are jammed, leaking, unusually loud, or not running."
	}
];
function isServiceOption(value) {
	return SERVICE_OPTIONS.includes(value);
}
//#endregion
export { PHONE_TEL as a, isServiceOption as c, PHONE_DISPLAY as i, services as l, EMAIL as n, PUBLIC_DESCRIPTION as o, LOCATION as r, SERVICE_OPTIONS as s, BUSINESS as t };
