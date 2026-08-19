export const SITE = {
  name: "Potigua Caçamba",
  phoneDisplay: "(11) 93309-5481",
  phoneRaw: "5511933095481",
  email: "ciceraaparecidadealmeida@gmail.com",
  region: "Grande São Paulo",
  businessHours: "Segunda a sábado, das 7h às 18h.",
} as const;

export const whatsappUrl = (
  message = "Olá! Gostaria de solicitar uma caçamba.",
) => `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/locacao-de-cacamba", label: "Locação de Caçamba" },
  { to: "/retirada-de-entulho", label: "Retirada de Entulho" },
  { to: "/areas-atendidas", label: "Áreas Atendidas" },
  { to: "/sobre", label: "Sobre" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/contato", label: "Contato" },
] as const;

export const AREAS = [
  "São Paulo","Guarulhos","Mauá","Santo André","São Bernardo do Campo",
  "São Caetano do Sul","Diadema","Osasco","Carapicuíba","Barueri","Cotia",
  "Taboão da Serra","Embu das Artes","Itapecerica da Serra","Suzano",
  "Mogi das Cruzes","Poá","Ferraz de Vasconcelos",
] as const;

export const FAQ = [
  { q: "Quais tamanhos de caçamba estão disponíveis?", a: "Trabalhamos com caçambas de 3m³ a 5m³, ideais para obras, reformas residenciais, limpezas de terrenos e descarte de entulho em geral. Consulte-nos pelo WhatsApp para indicarmos o tamanho certo para a sua necessidade." },
  { q: "Qual o prazo de entrega da caçamba?", a: "Realizamos entregas no mesmo dia ou no próximo dia útil, conforme disponibilidade e região. Entre em contato pelo WhatsApp para confirmar horário e disponibilidade na sua área." },
  { q: "Por quanto tempo posso ficar com a caçamba?", a: "O prazo padrão de locação é de até 5 dias corridos. Para obras de maior duração, oferecemos planos com prazos estendidos. Consulte-nos e encontramos a melhor solução para o seu projeto." },
  { q: "Quais são as formas de pagamento?", a: "Aceitamos PIX, dinheiro e transferência bancária. O pagamento pode ser realizado na entrega ou conforme acordo prévio. Para empresas, consulte condições especiais." },
  { q: "Quais materiais podem ser descartados na caçamba?", a: "Aceitamos entulho de obras e reformas: tijolos, concreto, gesso, cerâmica, madeira, ferragens e resíduos de construção em geral. Não aceitamos resíduos tóxicos, lixo orgânico, pneus ou materiais eletrônicos." },
  { q: "Vocês emitem nota fiscal?", a: "Sim, emitimos nota fiscal para pessoas físicas e jurídicas. Solicite no momento do agendamento e teremos o documento pronto para você." },
  { q: "É necessário solicitar alvará para posicionar a caçamba na rua?", a: "Em alguns municípios é necessário alvará da prefeitura para posicionar a caçamba em via pública. Podemos orientá-lo sobre o processo — entre em contato e esclarecemos sua dúvida." },
] as const;
