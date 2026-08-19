import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/areas-atendidas")({
  head: () => ({
    meta: [
      { title: "Áreas Atendidas | Potigua Caçamba" },
      {
        name: "description",
        content:
          "Confira as áreas atendidas pela Potigua Caçamba na Grande São Paulo para locação de caçamba.",
      },
      { property: "og:title", content: "Áreas Atendidas | Potigua Caçamba" },
      { property: "og:description", content: "Locação de caçamba na Grande São Paulo." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Áreas atendidas"
        description={`Atendemos a ${SITE.region}. A lista completa de cidades e bairros será confirmada.`}
      >
        <WhatsAppLink message="Olá! Vocês atendem a minha região?">
          Consultar minha região
        </WhatsAppLink>
      </PageHero>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Reveal>
            <div className="border border-border bg-card p-8">
              <MapPin className="h-9 w-9 text-primary" />
              <h2 className="mt-4 text-xl">Cidades e bairros atendidos</h2>
              <p className="mt-3 text-muted-foreground">[CIDADES E BAIRROS A CONFIRMAR]</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
