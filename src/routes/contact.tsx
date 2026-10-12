import { createFileRoute } from "@tanstack/react-router";
import { RequestForm } from "@/components/site/request-form";
import { SiteShell } from "@/components/site/shell";
import { EMAIL, isServiceOption, LOCATION, PHONE_DISPLAY, PHONE_TEL, type ServiceOption } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: ServiceOption } => {
    const value = typeof search.service === "string" ? search.service : "";
    return isServiceOption(value) ? { service: value } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact Emergency Sewers | Brooklyn, NY 11223" },
      {
        name: "description",
        content:
          "Call Emergency Sewers at 800-301-1429, email emergencysewers@gmail.com, or preview a service request. Listed in Brooklyn, NY 11223. The form on this demo does not send messages.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();

  return (
    <SiteShell>
      <div className="wrap grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-accent">Contact</p>
          <h1 className="mt-3 font-display text-5xl leading-tight">
            Reach Emergency Sewers directly.
          </h1>
          <p className="mt-5 leading-relaxed text-ink-soft">
            The phone number and email below are the public contacts for the business listed in
            Brooklyn, NY 11223. Use either one for a real conversation. The form is a
            demonstration of how a request would be written — submitting it does not notify
            anyone.
          </p>

          <dl className="mt-8 divide-y divide-line border-y border-line">
            <div className="py-4">
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="mt-1">
                <a className="font-display text-3xl text-ink hover:text-accent" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1">
                <a className="text-lg break-all text-ink hover:text-accent" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-muted">Listed location</dt>
              <dd className="mt-1 text-lg text-ink">{LOCATION}</dd>
              <dd className="mt-1 text-sm leading-relaxed text-muted">
                No street address is displayed. A preferred customer-facing street address was not
                independently confirmed.
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-sm text-muted">Reported hours</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                A public listing shows 24 hours. Confirm current availability when you call. No
                arrival window is stated here, because none was verified.
              </dd>
            </div>
          </dl>

          <h2 className="mt-10 font-display text-2xl">What is useful to include</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft">
            <li>Your name and a phone number where you can be reached.</li>
            <li>The Brooklyn address of the property, when you call or email.</li>
            <li>The closest service category, or Other if you are unsure.</li>
            <li>Whether one fixture or several are affected, and for how long.</li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl">Service request</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Required fields are labeled. After a valid submission you will see your entries on
            screen, together with a clear note that they were not sent.
          </p>
          <div className="mt-6">
            <RequestForm initialService={service ?? ""} />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
