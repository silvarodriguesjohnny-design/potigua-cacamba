import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/locacao-de-cacamba")({
  head: () => ({
    meta: [
      { title: "Locação de Caçamba | Potigua Caçamba" },
      {
        name: "description",
        content:
          "Locação de caçamba para descarte de entulho de obras e reformas na Grande São Paulo. Solicite pelo WhatsApp.",
      },
      { property: "og:title", content: "Locação de Caçamba | Potigua Caçamba" },
      {
        property: "og:description",
        content: "Caçambas para obras e reformas na Grande São Paulo.",
      },
    ],
  }),
  component: Page,
});

const BLOCKS = [
  {
    title: "Como funciona a locação?",
    text: "O processo é simples: 1. Solicitação via WhatsApp -> 2. Definição do tipo de caçamba -> 3. Orçamento e confirmação -> 4. Entrega no local -> 5. Utilização -> 6. Retirada após o uso.",
  },
  { title: "Tamanhos disponíveis", text: "[PREENCHER]" },
  { title: "Prazo de entrega", text: "[PREENCHER]" },
  { title: "Tempo de locação", text: "[PREENCHER]" },
  { title: "Formas de pagamento", text: "[PREENCHER]" },
  { title: "Materiais aceitos", text: "[PREENCHER]" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Serviço"
        title="Locação de caçamba"
        description="Caçambas para descarte de entulho de obras e reformas, entregues no endereço combinado."
      >
        <WhatsAppLink message="Olá! Quero informações sobre locação de caçamba.">
          Solicitar caçamba
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
