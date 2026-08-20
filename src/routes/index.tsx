import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  HardHat,
  Hammer,
  Trash2,
  PhoneCall,
  CalendarCheck,
  PackageCheck,
  Recycle,
  MapPin,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SmokeText } from "@/components/SmokeText";
import { SITE } from "@/lib/site";
import { PhotoGallery } from "@/components/PhotoGallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Potigua CaÃ§amba | LocaÃ§Ã£o de CaÃ§amba na Grande SÃ£o Paulo" },
      {
        name: "description",
        content:
          "LocaÃ§Ã£o de caÃ§amba para obras, reformas e retirada de entulho na Grande SÃ£o Paulo. Entrega no mesmo dia. Solicite pelo WhatsApp: (11) 93309-5481.",
      },
      { property: "og:title", content: "Potigua CaÃ§amba | LocaÃ§Ã£o de CaÃ§amba" },
      {
        property: "og:description",
        content:
          "CaÃ§ambas para obras, reformas e retirada de entulho na Grande SÃ£o Paulo. Entrega no mesmo dia. Atendimento rÃ¡pido pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Truck,
    title: "LocaÃ§Ã£o de CaÃ§amba",
    text: "CaÃ§ambas de 3mÂ³ a 5mÂ³ para descarte de resÃ­duos de construÃ§Ã£o e demoliÃ§Ã£o com entrega Ã¡gil.",
    to: "/locacao-de-cacamba" as const,
  },
  {
    icon: HardHat,
    title: "CaÃ§amba para Obra",
    text: "Apoio contÃ­nuo para canteiros de obra com retirada recorrente de entulho e resÃ­duos.",
  },
  {
    icon: Hammer,
    title: "CaÃ§amba para Reforma",
    text: "SoluÃ§Ã£o prÃ¡tica e sem burocracia para reformas residenciais e comerciais de qualquer porte.",
  },
  {
    icon: Trash2,
    title: "Retirada de Entulho",
    text: "Coleta e destinaÃ§Ã£o correta do entulho gerado no seu imÃ³vel, com documentaÃ§Ã£o se necessÃ¡rio.",
    to: "/retirada-de-entulho" as const,
  },
];

const STEPS = [
  {
    icon: PhoneCall,
    title: "1. Solicite",
    text: "Fale com a gente pelo WhatsApp, informe o endereÃ§o e o tipo de material a descartar.",
  },
  {
    icon: CalendarCheck,
    title: "2. Agende",
    text: "Combinamos data, horÃ¡rio e local de entrega da caÃ§amba na hora que for melhor para vocÃª.",
  },
  {
    icon: PackageCheck,
    title: "3. Utilize",
    text: "A caÃ§amba Ã© entregue no endereÃ§o combinado. Use pelo tempo contratado, com toda tranquilidade.",
  },
  {
    icon: Recycle,
    title: "4. Retiramos",
    text: "ApÃ³s o prazo, buscamos a caÃ§amba e fazemos a destinaÃ§Ã£o correta dos resÃ­duos.",
  },
];

const BENEFITS = [
  "Atendimento pelo WhatsApp 7 dias por semana",
  "Entrega no mesmo dia â sem burocracia",
  "CaÃ§ambas limpas e em bom estado",
  "DestinaÃ§Ã£o correta e responsÃ¡vel dos resÃ­duos",
  "EmissÃ£o de nota fiscal para PF e PJ",
  "PreÃ§o justo e transparente",
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="stripes absolute inset-x-0 top-0 h-2 opacity-80" aria-hidden />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-28">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              {SITE.region}
            </p>
            <SmokeText
              text="POTIGUA CAÃAMBA"
              className="mt-4 text-4xl sm:text-5xl lg:text-7xl"
            />
            <h2 className="mt-3 text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
              Entulho sai da sua vida.{" "}
              <span className="text-primary">CaÃ§amba chega no mesmo dia.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              LocaÃ§Ã£o de caÃ§ambas para obras, reformas e limpezas na Grande SÃ£o Paulo.
              Atendimento direto pelo WhatsApp â sem enrolaÃ§Ã£o.
            </p>

            {/* BenefÃ­cios rÃ¡pidos */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {BENEFITS.slice(0, 4).map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink message="OlÃ¡! Quero solicitar uma caÃ§amba agora.">
                Solicitar caÃ§amba agora
              </WhatsAppLink>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                <PhoneCall className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-lg border-2 border-primary shadow-2xl">
              <img
                src={ASSETS.HERO}
                alt="CaminhÃ£o e caÃ§amba Potigua na Grande SÃ£o Paulo"
                className="w-full object-cover"
              />
              {/* Badge de urgÃªncia */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-lg">
                <Zap className="h-3 w-3" />
                Entrega hoje
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">A soluÃ§Ã£o certa para o seu entulho</h2>
            <p className="mt-4 text-muted-foreground">
              A Potigua CaÃ§amba atua hÃ¡ mais de 10 anos na Grande SÃ£o Paulo com locaÃ§Ã£o de
              caÃ§ambas para obras, reformas e retirada de entulho. VocÃª solicita pelo WhatsApp,
              entregamos no endereÃ§o combinado e retiramos no prazo. Simples, rÃ¡pido e confiÃ¡vel.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-left">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÃOS */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Nossos serviÃ§os</h2>
            <p className="mt-2 text-muted-foreground">
              Atendemos desde reformas residenciais atÃ© grandes obras.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full border-l-4 border-primary bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  {s.to && (
                    <Link
                      to={s.to}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold uppercase text-primary transition-all hover:gap-2"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <PhotoGallery photos={ASSETS.GALLERY} />

      {/* COMO FUNCIONA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Como funciona</h2>
            <p className="mt-2 text-muted-foreground">4 passos simples â do pedido Ã  retirada.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative h-full border border-border bg-card p-6 transition-colors duration-300 hover:border-primary">
                  <div className="absolute -top-3 right-4 font-display text-6xl font-bold text-primary/10">
                    {i + 1}
                  </div>
                  <s.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <WhatsAppLink message="OlÃ¡! Quero solicitar uma caÃ§amba agora." className="inline-flex">
                Solicitar minha caÃ§amba agora
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS / POR QUE ESCOLHER */}
      <section className="bg-ink py-16 text-ink-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl text-white sm:text-3xl">
                Por que escolher a{" "}
                <span className="text-primary">Potigua CaÃ§amba?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mais de uma dÃ©cada atendendo a Grande SÃ£o Paulo com agilidade, responsabilidade e
                preÃ§o justo. Somos a escolha de quem nÃ£o quer surpresas na obra.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Entrega rÃ¡pida: caÃ§amba no mesmo dia",
                  "Frota prÃ³pria â nÃ£o dependemos de terceiros",
                  "DestinaÃ§Ã£o ambientalmente correta dos resÃ­duos",
                  "Atendimento humano e direto via WhatsApp",
                  "Nota fiscal garantida para sua tranquilidade",
                  "Cobertura em toda a Grande SÃ£o Paulo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Pontualidade", desc: "Entregamos no horÃ¡rio combinado, sempre." },
                  { icon: Shield, title: "ConfianÃ§a", desc: "Mais de 10 anos no mercado com reputaÃ§Ã£o sÃ³lida." },
                  { icon: Zap, title: "Agilidade", desc: "Do pedido Ã  entrega em poucas horas." },
                  { icon: Star, title: "Qualidade", desc: "CaÃ§ambas limpas e em excelente estado." },
                ].map((card) => (
                  <div key={card.title} className="rounded-md border border-primary/30 bg-ink/50 p-5">
                    <card.icon className="h-6 w-6 text-primary" />
                    <h4 className="mt-3 text-sm font-display text-white uppercase tracking-wide">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">{card.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ÃREAS ATENDIDAS */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Ãreas atendidas</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Atendemos toda a {SITE.region}. Confira as principais cidades cobertas:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "SÃ£o Paulo","Guarulhos","MauÃ¡","Santo AndrÃ©","SÃ£o Bernardo do Campo",
                "SÃ£o Caetano do Sul","Diadema","Osasco","CarapicuÃ­ba","Barueri",
                "Cotia","TaboÃ£o da Serra","Embu das Artes","Itapecerica da Serra",
                "Suzano","Mogi das Cruzes","PoÃ¡","Ferraz de Vasconcelos",
              ].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-foreground"
                >
                  <MapPin className="h-3 w-3 text-primary" />
                  {city}
                </span>
              ))}
            </div>
            <Link
              to="/areas-atendidas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary transition-all hover:gap-3"
            >
              Ver todas as Ã¡reas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Perguntas frequentes</h2>
            <p className="mt-2 text-muted-foreground">
              Tire suas dÃºvidas antes de solicitar.
            </p>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-y-4 border-primary bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Atendimento imediato
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Precisa de uma caÃ§amba agora?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fale diretamente com a Potigua CaÃ§amba pelo WhatsApp. OrÃ§amento em minutos,
              entrega no mesmo dia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsAppLink message="OlÃ¡! Quero solicitar uma caÃ§amba agora." className="text-base px-8 py-4">
                Solicitar caÃ§amba agora
              </WhatsAppLink>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-md border-2 border-foreground px-8 py-4 font-display text-sm uppercase tracking-wide text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
              >
                <PhoneCall className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Segunda a sÃ¡bado, das 7h Ã s 18h Â· Atendimento via WhatsApp
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
