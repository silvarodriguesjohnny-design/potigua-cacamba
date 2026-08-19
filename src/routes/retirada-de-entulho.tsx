import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/retirada-de-entulho")({
  head: () => ({
    meta: [
      { title: "Retirada de Entulho | Potigua Caçamba" },
      {
        name: "description",
        content:
          "Retirada de entulho de obras e reformas com caçamba na Grande São Paulo. Fale pelo WhatsApp.",
      },
      { property: "og:title", content: "Retirada de Entulho | Potigua Caçamba" },
      {
        property: "og:description",
        content: "Coleta e destinação de entulho de obras e reformas.",
      },
    ],
  }),
  component: Page,
});

const BLOCKS = [
  {
    title: "Como solicitar a retirada?",
    text: "Basta entrar em contato pelo WhatsApp, informar a necessidade da retirada e agendar o melhor horário. Confirmamos a disponibilidade e realizamos a coleta do material de forma ágil.",
  },
  { title: "Tipos de entulho atendidos", text: "[PREENCHER]" },
  { title: "Destinação dos resíduos", text: "[PREENCHER]" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Serviço"
        title="Retirada de entulho"
        description="Coleta do entulho gerado em obras, reformas e limpezas de imóvel."
      >
        <WhatsAppLink message="Olá! Preciso de retirada de entulho.">
          Solicitar retirada
        </WhatsAppLink>
      </PageHero>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="h-full border-l-4 border-primary bg-card p-6 transition-shadow duration-300 hover:shadow-xl">
                <h2 className="text-lg">{b.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
