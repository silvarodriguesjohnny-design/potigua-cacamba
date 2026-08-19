import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WhatsAppLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes | Potigua Caçamba" },
      {
        name: "description",
        content:
          "Dúvidas sobre locação de caçamba, prazos, tamanhos e materiais aceitos. Veja as perguntas frequentes da Potigua Caçamba.",
      },
      { property: "og:title", content: "Perguntas Frequentes | Potigua Caçamba" },
      { property: "og:description", content: "Dúvidas sobre locação de caçamba e entulho." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Dúvidas"
        title="Perguntas frequentes"
        description="Respostas às dúvidas mais comuns sobre locação de caçamba e retirada de entulho."
      />
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Reveal>
            <FaqAccordion />
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">Não encontrou sua resposta?</p>
              <WhatsAppLink className="mt-4">Tirar dúvida no WhatsApp</WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
