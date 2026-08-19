// Imagens locais (public/) e URLs públicas para a galeria
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=800&auto=format&fit=crop&q=80`;

export const ASSETS = {
  // Logo: sem imagem — header já exibe o texto estilizado
  LOGO: "",

  // Hero: imagem do caminhão/caçamba (public/caminhao.jpg)
  HERO: "/caminhao.jpg",

  // Galeria: fotos de obras, entulho e equipamentos via Unsplash
  GALLERY: [
    {
      url: "/caminhao.jpg",
      alt: "Caminhão e caçamba da Potigua Caçamba na Grande São Paulo.",
    },
    {
      url: UNSPLASH("1558618666-fcd25c85cd64"),
      alt: "Entulho e resíduos de construção prontos para descarte.",
    },
    {
      url: UNSPLASH("1504307651254-35680f356dfd"),
      alt: "Obra residencial com caçamba para retirada de entulho.",
    },
    {
      url: UNSPLASH("1503387762-592deb58ef4e"),
      alt: "Canteiro de obra com descarte correto de resíduos.",
    },
    {
      url: UNSPLASH("1600566752355-35792bedcfea"),
      alt: "Reforma residencial com serviço de caçamba Potigua.",
    },
    {
      url: UNSPLASH("1590736704728-f4730bb30770"),
      alt: "Interior de imóvel em reforma com entulho segregado.",
    },
    {
      url: UNSPLASH("1483736762161-1e9571e0dabb"),
      alt: "Demolição e retirada de resíduos com caçamba.",
    },
    {
      url: UNSPLASH("1560179406-1c14bd93b4db"),
      alt: "Equipamento pesado em operação de limpeza de obra.",
    },
  ],
};
