import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppButton";
import { ASSETS } from "@/lib/assets";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-primary bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={ASSETS.LOGO}
              alt="Potigua Caçamba Logo"
              className="h-16 w-auto object-contain"
            />
            <h3 className="text-xl">
              Potigua <span className="text-primary">Caçamba</span>
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Locação de caçambas para obras, reformas e retirada de entulho na{" "}
            {SITE.region}. Entrega no mesmo dia.
          </p>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-primary">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-primary">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:text-primary transition-colors"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{SITE.region}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{SITE.businessHours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-primary">Solicite agora</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Orçamento em minutos. Atendimento rápido pelo WhatsApp.
          </p>
          <WhatsAppLink className="mt-4 flex w-full">Solicitar caçamba</WhatsAppLink>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Potigua Caçamba. Todos os direitos reservados.</span>
          <span>{SITE.region} · {SITE.phoneDisplay}</span>
        </div>
      </div>
    </footer>
  );
}
