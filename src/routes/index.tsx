import { createFileRoute, Link } from "@tanstack/react-router";
import { PageCta, SiteShell } from "@/components/site/shell";
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  PUBLIC_DESCRIPTION,
  services,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emergency Sewers | Drainage & Sewer Services in Brooklyn, NY" },
      {
        name: "description",
        content:
          "Emergency Sewers is listed in Brooklyn, NY 11223 for drainage services, sewer services, emergency plumbing, toilet plumbing, toilet installation, and disposal services.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <section className="bg-ink text-paper">
        <div className="wrap grid items-end gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-paper/75">
              Drainage & sewer services in Brooklyn, NY
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-paper sm:text-6xl">
              Clear access to the drainage and sewer help you need.
            </h1>
            <p className="prose-measure mt-6 text-lg leading-relaxed text-paper/85">
              Emergency Sewers is publicly listed in Brooklyn, NY 11223, and is associated with
              drainage, sewer, and emergency plumbing needs — including toilet plumbing, toilet
              installation, and disposal services. If a clogged drain or a sewer problem is more
              than you can sort out, this is the work the business is publicly described as
              handling.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper-deep"
              >
                Request Service
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-paper/35 px-5 text-sm font-medium text-paper transition-colors duration-150 hover:border-paper"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <figure className="lg:col-span-5">
            <img
              src="/images/street-drain.jpg"
              alt="Illustrative photograph of a wet residential street and a storm-drain grate in front of brownstones. Not a documented Emergency Sewers project."
              className="aspect-3/2 w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-paper/15"
              width={1728}
              height={1152}
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-paper/65">
              Illustrative photograph of street drainage. Not a documented Emergency Sewers job,
              crew, or vehicle.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Contact details" className="border-b border-line">
        <dl className="wrap grid sm:grid-cols-3">
          <div className="border-b border-line py-5 sm:border-r sm:border-b-0 sm:pr-6">
            <dt className="text-sm text-muted">Phone</dt>
            <dd className="mt-1">
              <a className="font-display text-2xl text-ink hover:text-accent" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </dd>
          </div>
          <div className="border-b border-line py-5 sm:border-r sm:border-b-0 sm:px-6">
            <dt className="text-sm text-muted">Email</dt>
            <dd className="mt-1">
              <a className="text-base break-all text-ink hover:text-accent" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="py-5 sm:pl-6">
            <dt className="text-sm text-muted">Listed location</dt>
            <dd className="mt-1 font-display text-2xl text-ink">{LOCATION}</dd>
          </div>
        </dl>
      </section>

      <section className="wrap py-16" aria-labelledby="which-problem">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="which-problem" className="font-display text-4xl leading-tight">
              Which kind of problem is it?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              You do not need a technical name before you call. A plain description — which
              fixture, and whether the trouble is in one place or several — is enough to start.
            </p>
          </div>
          <div className="grid gap-8 lg:col-span-8">
            <article>
              <h3 className="font-display text-2xl">A drain that will not clear</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Water should leave a sink, tub, shower, floor drain, or outdoor drain, and it is
                not. When one fixture is slow, standing, or gurgling while the rest of the home
                seems normal, people usually describe that as a drainage problem. Emergency Sewers
                is publicly associated with clogged drains and drainage needs in Brooklyn.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl">Something that feels like the sewer</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Several fixtures in trouble at once, a sewage odor that will not fade, or waste
                water showing up in a tub or floor drain often points people toward sewer service
                rather than a single clogged sink. The business is publicly associated with sewer
                problems. This site does not describe a particular repair method.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl">A toilet, a disposal, or an urgent call</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                An existing toilet that will not flush or keeps running is toilet plumbing. Putting
                a toilet in is toilet installation. A jammed or leaking garbage disposal is a
                disposal question, and it is easy to confuse with a clogged kitchen drain. If the
                situation feels urgent, emergency plumbing is the category the listing associates
                with that kind of call.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface" aria-labelledby="service-list">
        <div className="wrap py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 id="service-list" className="font-display text-4xl leading-tight">
              Services publicly associated with Emergency Sewers
            </h2>
            <Link to="/services" className="text-sm font-medium text-accent hover:underline">
              Read the full service directory
            </Link>
          </div>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.id} className="bg-surface">
                <Link
                  to="/services"
                  hash={service.id}
                  className="flex h-full flex-col gap-3 p-6 transition-colors duration-150 hover:bg-paper"
                >
                  <span className="font-display text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl text-ink">{service.title}</span>
                  <span className="text-sm leading-relaxed text-ink-soft">{service.summary}</span>
                  <span className="mt-auto text-sm font-medium text-accent">View this service</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid items-center gap-10 py-16 lg:grid-cols-2" aria-labelledby="brooklyn">
        <figure>
          <img
            src="/images/under-sink.jpg"
            alt="Illustrative photograph of orderly drain pipes under a kitchen sink. Not a documented Emergency Sewers repair."
            className="aspect-4/3 w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            width={1600}
            height={1200}
          />
          <figcaption className="mt-3 text-sm text-muted">
            Illustrative photograph of household drain piping. Not a photo of an Emergency Sewers
            project.
          </figcaption>
        </figure>
        <div>
          <h2 id="brooklyn" className="font-display text-4xl leading-tight">
            Listed in Brooklyn, not a guessed map
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            The business is publicly listed in Brooklyn, New York {LOCATION.slice(-5)}. An exact
            street address was not confirmed for this concept, so none is published here. Queens,
            Staten Island, Manhattan, the Bronx, and Long Island are not named as service areas,
            because that coverage was not verified.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            A public listing reports the hours as 24 hours. This website does not turn that note
            into a promise of immediate dispatch or a guaranteed response time. Ask about
            availability for your situation when you call.
          </p>
          <blockquote className="mt-6 border-l-2 border-accent pl-4 text-base leading-relaxed text-ink">
            <p>“{PUBLIC_DESCRIPTION}”</p>
            <footer className="mt-2 text-sm text-muted">Publicly reported business description</footer>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="when-you-call">
        <div className="wrap py-16">
          <h2 id="when-you-call" className="font-display text-4xl leading-tight">
            What to have ready when you call
          </h2>
          <p className="prose-measure mt-4 leading-relaxed text-ink-soft">
            A short, specific account saves a second round of questions. You are describing what
            you can see — not diagnosing a pipe.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "The Brooklyn address where the work is needed.",
              "Which fixture or area is involved: sink, shower, toilet, floor drain, yard drain, or disposal.",
              "Whether one fixture is affected or several at the same time.",
              "How long it has been happening, and whether it started suddenly.",
              "Whether water is still running or waste is backing up.",
              "Whether you need an existing toilet looked at, a toilet installed, or help with a disposal.",
            ].map((item) => (
              <li key={item} className="rounded-lg bg-surface p-5 text-sm leading-relaxed shadow-card">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title="The next step is a direct conversation."
        body="Call the published number, send an email, or use the request form to see how a service request would be collected. The form on this demo does not deliver a message."
      />
    </SiteShell>
  );
}
