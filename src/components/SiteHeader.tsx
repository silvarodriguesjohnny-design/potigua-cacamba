import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppButton";
import { ASSETS } from "@/lib/assets";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img 
            src={ASSETS.LOGO} 
            alt="Potigua Caçamba" 
            className="h-10 w-auto object-contain sm:h-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none sm:text-xl">
              Potigua <span className="text-primary">Caçamba</span>
            </span>
            <span className="block truncate text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
              {SITE.region}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <WhatsAppLink className="hidden px-4 py-2 sm:inline-flex">
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </WhatsAppLink>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-ink px-4 pb-4 xl:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="block border-b border-border py-3 text-sm font-semibold uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <WhatsAppLink className="mt-4 flex w-full">Falar no WhatsApp</WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
