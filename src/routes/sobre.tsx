import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Potigua Caçamba | Locação de Caçambas" },
      {
        name: "description",
        content:
          "Conheça a Potigua Caçamba, empresa de locação de caçambas para obras, reformas e retirada de entulho na Grande São Paulo.",
      },
      { property: "og:title", content: "Sobre a Potigua Caçamba" },
      {
        property: "og:description",
        content: "Locação de caçambas para obras, reformas e retirada de entulho.",
      },
    ],
  }),
  component: Page,
});

const BLOCKS = [
  {
    title: "O que é a Potigua Caçamba?",
    text: "Somos uma empresa especializada em locação de caçambas para obras, reformas e retirada de entulho. Atuamos com foco em agilidade e eficiência para garantir que o descarte de resíduos do seu projeto seja feito de forma correta e sem complicações.",
  },
  {
    title: "Para quem é?",
    text: "Atendemos pessoas realizando reformas residenciais, proprietários de obras de todos os portes, profissionais da construção civil e empresas que necessitam de soluções confiáveis para o descarte de entulho.",
  },
  {
    title: "Nosso Diferencial",
    text: "[PREENCHER]",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Sobre a Potigua Caçamba"
        description={`Empresa de locação de caçambas para obras, reformas e retirada de entulho na ${SITE.region}.`}
      >
        <WhatsAppLink>Falar com a equipe</WhatsAppLink>
      </PageHero>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="h-full border-l-4 border-primary bg-card p-6">
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
