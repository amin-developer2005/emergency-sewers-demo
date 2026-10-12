export const BUSINESS = "Emergency Sewers";

export const PHONE_DISPLAY = "800-301-1429";
export const PHONE_TEL = "+18003011429";
export const EMAIL = "emergencysewers@gmail.com";
export const LOCATION = "Brooklyn, NY 11223";
export const CITY = "Brooklyn, New York";

export const PUBLIC_DESCRIPTION =
  "Emergency Sewers is your One-Stop-Shop for all your drainage needs. If you have a clogged drain or a problem with your sewer that you just can't fix, no need to look any further.";

export const SERVICE_OPTIONS = [
  "Drainage Services",
  "Sewer Services",
  "Emergency Plumbing",
  "Toilet Plumbing",
  "Toilet Installation",
  "Disposal Services",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const services = [
  {
    id: "drainage",
    title: "Drainage Services",
    option: "Drainage Services",
    summary:
      "Slow sinks, standing showers, and drains that are no longer carrying water away.",
  },
  {
    id: "sewer",
    title: "Sewer Services",
    option: "Sewer Services",
    summary:
      "Sewer problems, including backups and odors that seem to reach beyond a single fixture.",
  },
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    option: "Emergency Plumbing",
    summary:
      "Urgent plumbing situations tied to the drainage, sewer, toilet, and disposal work listed for this business.",
  },
  {
    id: "toilet-plumbing",
    title: "Toilet Plumbing",
    option: "Toilet Plumbing",
    summary: "Toilets that will not flush, keep running, clog repeatedly, or leak.",
  },
  {
    id: "toilet-installation",
    title: "Toilet Installation",
    option: "Toilet Installation",
    summary: "Putting a toilet in place, as distinct from repairing one that is already installed.",
  },
  {
    id: "disposal",
    title: "Disposal Services",
    option: "Disposal Services",
    summary: "Garbage disposals that are jammed, leaking, unusually loud, or not running.",
  },
] as const;

export function isServiceOption(value: string): value is ServiceOption {
  return (SERVICE_OPTIONS as readonly string[]).includes(value);
}
