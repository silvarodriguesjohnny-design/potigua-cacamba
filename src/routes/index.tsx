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
      { title: "Potigua Caçamba | Locação de Caçamba na Grande São Paulo" },
      {
        name: "description",
        content:
          "Locação de caçamba para obras, reformas e retirada de entulho na Grande São Paulo. Entrega no mesmo dia. Solicite pelo WhatsApp: (11) 93309-5481.",
      },
      { property: "og:title", content: "Potigua Caçamba | Locação de Caçamba" },
      {
        property: "og:description",
        content:
          "Caçambas para obras, reformas e retirada de entulho na Grande São Paulo. Entrega no mesmo dia. Atendimento rápido pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Truck,
    title: "Locação de Caçamba",
    text: "Caçambas de 3m³ a 5m³ para descarte de resíduos de construção e demolição com entrega ágil.",
    to: "/locacao-de-cacamba" as const,
  },
  {
    icon: HardHat,
    title: "Caçamba para Obra",
    text: "Apoio contínuo para canteiros de obra com retirada recorrente de entulho e resíduos.",
  },
  {
    icon: Hammer,
    title: "Caçamba para Reforma",
    text: "Solução prática e sem burocracia para reformas residenciais e comerciais de qualquer porte.",
  },
  {
    icon: Trash2,
    title: "Retirada de Entulho",
    text: "Coleta e destinação correta do entulho gerado no seu imóvel, com documentação se necessário.",
    to: "/retirada-de-entulho" as const,
  },
];

const STEPS = [
  {
    icon: PhoneCall,
    title: "1. Solicite",
    text: "Fale com a gente pelo WhatsApp, informe o endereço e o tipo de material a descartar.",
  },
  {
    icon: CalendarCheck,
    title: "2. Agende",
    text: "Combinamos data, horário e local de entrega da caçamba na hora que for melhor para você.",
  },
  {
    icon: PackageCheck,
    title: "3. Utilize",
    text: "A caçamba é entregue no endereço combinado. Use pelo tempo contratado, com toda tranquilidade.",
  },
  {
    icon: Recycle,
    title: "4. Retiramos",
    text: "Após o prazo, buscamos a caçamba e fazemos a destinação correta dos resíduos.",
  },
];

const STATS = [
  { value: "+5.000", label: "Clientes atendidos", icon: Star },
  { value: "Mesmo dia", label: "Prazo de entrega", icon: Zap },
  { value: "+10", label: "Caçambas disponíveis", icon: Truck },
  { value: "10 anos", label: "De experiência", icon: Shield },
];

const BENEFITS = [
  "Atendimento pelo WhatsApp 7 dias por semana",
  "Entrega no mesmo dia — sem burocracia",
  "Caçambas limpas e em bom estado",
  "Destinação correta e responsável dos resíduos",
  "Emissão de nota fiscal para PF e PJ",
  "Preço justo e transparente",
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
              text="POTIGUA CAÇAMBA"
              className="mt-4 text-4xl sm:text-5xl lg:text-7xl"
            />
            <h2 className="mt-3 text-xl leading-tight text-white sm:text-2xl lg:text-3xl">
              Entulho sai da sua vida.{" "}
              <span className="text-primary">Caçamba chega no mesmo dia.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Locação de caçambas para obras, reformas e limpezas na Grande São Paulo.
              Atendimento direto pelo WhatsApp — sem enrolação.
            </p>

            {/* Benefícios rápidos */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {BENEFITS.slice(0, 4).map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink message="Olá! Quero solicitar uma caçamba agora.">
                Solicitar caçamba agora
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
                src="/caminhao.jpg"
                alt="Caminhão e caçamba Potigua na Grande São Paulo"
                className="w-full object-cover"
              />
              {/* Badge de urgência */}
              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-lg">
                <Zap className="h-3 w-3" />
                Entrega hoje
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS / PROVA SOCIAL */}
      <section className="border-y-4 border-primary bg-primary/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 lg:grid-cols-4 lg:px-8">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 py-8 text-center">
              <s.icon className="h-7 w-7 text-primary" />
              <span className="font-display text-3xl font-bold text-foreground lg:text-4xl">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">A solução certa para o seu entulho</h2>
            <p className="mt-4 text-muted-foreground">
              A Potigua Caçamba atua há mais de 10 anos na Grande São Paulo com locação de
              caçambas para obras, reformas e retirada de entulho. Você solicita pelo WhatsApp,
              entregamos no endereço combinado e retiramos no prazo. Simples, rápido e confiável.
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

      {/* SERVIÇOS */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Nossos serviços</h2>
            <p className="mt-2 text-muted-foreground">
              Atendemos desde reformas residenciais até grandes obras.
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
            <p className="mt-2 text-muted-foreground">4 passos simples — do pedido à retirada.</p>
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
              <WhatsAppLink message="Olá! Quero solicitar uma caçamba agora." className="inline-flex">
                Solicitar minha caçamba agora
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
                <span className="text-primary">Potigua Caçamba?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mais de uma década atendendo a Grande São Paulo com agilidade, responsabilidade e
                preço justo. Somos a escolha de quem não quer surpresas na obra.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Entrega rápida: caçamba no mesmo dia",
                  "Frota própria — não dependemos de terceiros",
                  "Destinação ambientalmente correta dos resíduos",
                  "Atendimento humano e direto via WhatsApp",
                  "Nota fiscal garantida para sua tranquilidade",
                  "Cobertura em toda a Grande São Paulo",
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
                  { icon: Clock, title: "Pontualidade", desc: "Entregamos no horário combinado, sempre." },
                  { icon: Shield, title: "Confiança", desc: "Mais de 10 anos no mercado com reputação sólida." },
                  { icon: Zap, title: "Agilidade", desc: "Do pedido à entrega em poucas horas." },
                  { icon: Star, title: "Qualidade", desc: "Caçambas limpas e em excelente estado." },
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

      {/* ÁREAS ATENDIDAS */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Áreas atendidas</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Atendemos toda a {SITE.region}. Confira as principais cidades cobertas:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "São Paulo","Guarulhos","Mauá","Santo André","São Bernardo do Campo",
                "São Caetano do Sul","Diadema","Osasco","Carapicuíba","Barueri",
                "Cotia","Taboão da Serra","Embu das Artes","Itapecerica da Serra",
                "Suzano","Mogi das Cruzes","Poá","Ferraz de Vasconcelos",
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
              Ver todas as áreas <ArrowRight className="h-4 w-4" />
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
              Tire suas dúvidas antes de solicitar.
            </p>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-y4 border-primary bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Atendimento imediato
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Precisa de uma caçamba agora?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fale diretamente com a Potigua Caçamba pelo WhatsApp. Orçamento em minutos,
              entrega no mesmo dia.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsAppLink message="Olá! Quero solicitar uma caçamba agora." className="text-base px-8 py-4">
                Solicitar caçamba agora
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
              Segunda a sábado, das 7h às 18h · Atendimento via WhatsApp
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
