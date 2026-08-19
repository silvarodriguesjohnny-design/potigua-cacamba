import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Loader2, Mail } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppButton";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Potigua Caçamba" },
      {
        name: "description",
        content:
          "Entre em contato com a Potigua Caçamba pelo WhatsApp (11) 93309-5481 ou e-mail. Solicite sua caçamba agora.",
      },
      { property: "og:title", content: "Contato | Potigua Caçamba" },
      {
        property: "og:description",
        content: "Fale com a Potigua Caçamba e solicite sua caçamba na Grande São Paulo.",
      },
    ],
  }),
  component: Page,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome."),
  telefone: z.string().trim().min(8, "Informe um telefone válido."),
  mensagem: z.string().trim().min(5, "Descreva o que você precisa."),
});

function Page() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      nome: String(form.get("nome") ?? ""),
      telefone: String(form.get("telefone") ?? ""),
      mensagem: String(form.get("mensagem") ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setLoading(true);
    const { nome, telefone, mensagem } = parsed.data;
    const url = whatsappUrl(`Olá! Sou ${nome} (${telefone}). ${mensagem}`);
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
  }

  const field =
    "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Contato"
        description="Solicite sua caçamba pelo WhatsApp ou e-mail. Atendimento rápido e sem burocracia."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-6 rounded-md">
              <h2 className="text-xl">Solicitar caçamba</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha o formulário e continue a conversa pelo WhatsApp.
              </p>

              <div className="mt-6">
                <label htmlFor="nome" className="text-sm font-semibold">
                  Nome *
                </label>
                <input id="nome" name="nome" className={field} autoComplete="name" placeholder="Seu nome completo" />
                {errors["nome"] && (
                  <p className="mt-1 text-xs text-destructive">{errors["nome"]}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="telefone" className="text-sm font-semibold">
                  Telefone / WhatsApp *
                </label>
                <input id="telefone" name="telefone" className={field} inputMode="tel" placeholder="(11) 99999-9999" />
                {errors["telefone"] && (
                  <p className="mt-1 text-xs text-destructive">{errors["telefone"]}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="mensagem" className="text-sm font-semibold">
                  O que você precisa? *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className={field}
                  placeholder="Ex: Preciso de uma caçamba para obra na Rua X, bairro Y..."
                />
                {errors["mensagem"] && (
                  <p className="mt-1 text-xs text-destructive">{errors["mensagem"]}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-md border-l-4 border-primary bg-card p-6">
              <h2 className="text-xl">Dados de contato</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Prefere contato direto? Escolha o canal que preferir.
              </p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp / Telefone</p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="break-all text-muted-foreground hover:text-primary transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Área de atendimento</p>
                    <p className="text-muted-foreground">{SITE.region}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de atendimento</p>
                    <p className="text-muted-foreground">{SITE.businessHours}</p>
                  </div>
                </li>
              </ul>
              <WhatsAppLink className="mt-8 flex w-full">
                Falar no WhatsApp agora
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
