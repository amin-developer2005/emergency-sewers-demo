import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BUSINESS, EMAIL, LOCATION, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function Mark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 shrink-0 place-items-center rounded-md bg-ink text-sm font-medium tracking-wide text-paper"
    >
      ES
    </span>
  );
}

export function DemoBanner() {
  return (
    <p className="bg-ink px-5 py-2 text-center text-sm leading-snug text-paper">
      Website concept — This demo was created for presentation purposes only and is not the
      official website of Emergency Sewers.
    </p>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="wrap flex items-center justify-between gap-3 py-3">
        <Link to="/" className="flex min-h-11 items-center gap-3 rounded-md">
          <Mark />
          <span className="leading-tight">
            <span className="block font-display text-xl text-ink">{BUSINESS}</span>
            <span className="block text-xs text-muted">Brooklyn, NY</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={
                  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium " +
                  (active ? "text-accent" : "text-ink-soft hover:text-ink")
                }
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
          >
            Call {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition-colors duration-150 hover:bg-accent-hover"
          >
            Request Service
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            Call
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line lg:hidden">
          <div className="wrap flex flex-col py-2">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "inline-flex min-h-11 items-center text-base font-medium " +
                    (active ? "text-accent" : "text-ink")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              Request Service
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="sticky top-0 z-40">
        <DemoBanner />
        <Header />
      </div>
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export function PageCta({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="border-t border-line bg-ink text-paper" aria-labelledby="page-cta-title">
      <div className="wrap grid gap-8 py-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="page-cta-title" className="font-display text-4xl leading-tight text-paper">
            {title}
          </h2>
          <p className="prose-measure mt-4 text-base leading-relaxed text-paper/80">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-paper-deep"
          >
            Request Service
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-paper/30 px-5 text-sm font-medium text-paper transition-colors duration-150 hover:border-paper"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-2xl text-ink">{BUSINESS}</p>
          <p className="prose-measure mt-3 text-sm leading-relaxed text-ink-soft">
            Drainage, sewer, and emergency plumbing services publicly associated with a business
            listed in Brooklyn, NY 11223.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink">
            Website concept — This demo was created for presentation purposes only and is not the
            official website of Emergency Sewers.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-muted">Navigate</h2>
          <ul className="mt-3 space-y-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-11 items-center text-sm text-ink hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-muted">Contact</h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-accent" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="inline-flex min-h-11 items-center break-all hover:text-accent" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li className="pt-2 text-ink-soft">{LOCATION}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="wrap py-4 text-xs leading-relaxed text-muted">
          No street address is shown because a preferred customer-facing street address was not
          independently confirmed. Customer reviews can be added here once verified.
        </p>
      </div>
    </footer>
  );
}
