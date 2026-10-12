import { createFileRoute, Link } from "@tanstack/react-router";
import { PageCta, SiteShell } from "@/components/site/shell";
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_TEL, PUBLIC_DESCRIPTION } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Emergency Sewers | Brooklyn Drainage & Sewer Services" },
      {
        name: "description",
        content:
          "What is publicly known about Emergency Sewers in Brooklyn, NY 11223: drainage, clogged drains, sewer problems, emergency plumbing, toilets, and disposals.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <article className="wrap py-14 lg:py-20">
        <p className="text-sm font-medium text-accent">About</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">
          A Brooklyn business focused on drainage and sewer problems.
        </h1>
        <p className="prose-measure mt-6 text-lg leading-relaxed text-ink-soft">
          Emergency Sewers is publicly described as a place to go for drainage needs. The wording
          associated with the business is plain: if you have a clogged drain, or a sewer problem
          you cannot fix, you do not need to keep looking. That description — not a founding story
          — is what this page is built on.
        </p>

        <blockquote className="mt-10 max-w-3xl border-l-2 border-accent pl-5">
          <p className="font-display text-2xl leading-snug text-ink">“{PUBLIC_DESCRIPTION}”</p>
          <footer className="mt-3 text-sm text-muted">Publicly reported business description</footer>
        </blockquote>

        <h2 className="mt-14 font-display text-3xl">What the public listing connects to the name</h2>
        <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
          No owner, founder, or employee names were independently verified, so none are used. No
          year in business is stated, because none was confirmed. The useful facts are the kinds
          of problems the business is publicly associated with in Brooklyn.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <Focus
            title="Drainage needs and clogged drains"
            body="The published description leads with drainage. A clog that will not clear — a sink, a shower, a floor drain — is the situation that description is written for."
          />
          <Focus
            title="Sewer problems"
            body="The same description names sewer problems a customer cannot fix. Sewer service is a separate listed category from everyday drainage."
          />
          <Focus
            title="Emergency plumbing"
            body="Emergency plumbing is publicly associated with the business. A listing also shows hours of 24 hours. That is reported information, not a promise of how quickly someone can be on site."
          />
          <Focus
            title="Toilet plumbing"
            body="Trouble with a toilet that is already installed — flushing, running, clogging, or leaking — sits in this category rather than in installation."
          />
          <Focus
            title="Toilet installation"
            body="Installation is listed on its own: putting a toilet in, as opposed to repairing the one that is there."
          />
          <Focus
            title="Disposal services"
            body="Disposal services are publicly associated with the business and usually mean the garbage disposal at a kitchen sink, including units that jam, leak, or will not run."
          />
        </ul>
        <p className="mt-6 text-base leading-relaxed text-ink-soft">
          Practical notes on each category are on the{" "}
          <Link to="/services" className="font-medium text-accent hover:underline">
            services directory
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-3xl">How to read this website</h2>
        <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
          The pages are written as a finished local-service site would be written, but only with
          details that can be said honestly. Where a fact was not verified, the page says so or
          leaves it out. That is a presentation choice, not a claim that the business lacks those
          details in real life.
        </p>
        <div className="mt-6 max-w-3xl rounded-lg border border-line bg-surface p-6">
          <h3 className="text-sm font-medium tracking-wide text-accent">DEMO DISCLAIMER</h3>
          <p className="mt-3 leading-relaxed text-ink">
            This website is a concept created for presentation purposes only. It is not an official
            Emergency Sewers website and has not been approved or published by Emergency Sewers.
          </p>
        </div>

        <h2 className="mt-14 font-display text-3xl">What this concept deliberately leaves out</h2>
        <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
          Licenses, insurance, bonding, awards, years in business, staff size, pricing, discounts,
          warranties, and response-time promises are not stated, because they were not
          independently verified for Emergency Sewers. Specialized procedures beyond the six
          listed categories are also omitted rather than guessed.
        </p>
        <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
          Customer reviews can be added here once verified. Nothing on this site should be read as
          a testimonial or a star rating.
        </p>

        <h2 className="mt-14 font-display text-3xl">Where the business is listed</h2>
        <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
          Emergency Sewers is publicly listed in {LOCATION}. A preferred street address was not
          confirmed, so this site does not display one. The reliable ways to make contact are the
          published phone number and email.
        </p>
        <dl className="mt-6 grid max-w-xl gap-4 text-base">
          <div className="flex flex-col border-t border-line pt-4 sm:flex-row sm:justify-between">
            <dt className="text-muted">Phone</dt>
            <dd>
              <a className="font-medium text-ink hover:text-accent" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </dd>
          </div>
          <div className="flex flex-col border-t border-line pt-4 sm:flex-row sm:justify-between">
            <dt className="text-muted">Email</dt>
            <dd>
              <a className="font-medium break-all text-ink hover:text-accent" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="flex flex-col border-t border-b border-line py-4 sm:flex-row sm:justify-between">
            <dt className="text-muted">Location</dt>
            <dd className="font-medium">{LOCATION}</dd>
          </div>
        </dl>
      </article>
      <PageCta
        title="Ask the business about the situation you actually have."
        body="Use the published phone or email. The contact page also shows the request form this concept would use — it does not send anything."
      />
    </SiteShell>
  );
}

function Focus({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-lg bg-surface p-5 shadow-card">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </li>
  );
}
