export const SITE = {
  name: "ALA Turismo",
  slogan: "Seja no Brasil ou no exterior a ALA Turismo está com você!",
  whatsapp: "5588996904477",
  whatsappDisplay: "(88) 99690-4477",
  whatsapp2Display: "(88) 99690-4488",
  catalog: "https://wa.me/c/558896904477",
  instagram: "https://www.instagram.com/alaturismo/",
  instagramHandle: "@alaturismo",
  address: "Av. Perimetral Dom Francisco, 1087 — Conj. Santa Luzia, Bairro São Miguel",
  city: "Crato — Ceará",
  team: ["Prof. Gilson", "Profª Veris"],
};

export function wa(message = "Olá, ALA Turismo! Gostaria de planejar minha viagem.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Destino = {
  slug: string;
  nome: string;
  uf: string;
  img: string;
  desc: string;
  tag: "Brasil" | "Internacional";
};

/** Destinos identificados nas publicações oficiais da @alaturismo */
export const DESTINOS: Destino[] = [
  {
    slug: "lencois",
    nome: "Lençóis Maranhenses",
    uf: "MA",
    img: "/images/real/lencois-dunas.jpg",
    desc: "Dunas brancas e lagoas cristalinas — um cenário que parece irreal, mas é 100% Brasil.",
    tag: "Brasil",
  },
  {
    slug: "icaraizinho",
    nome: "Icaraizinho de Amontada",
    uf: "CE",
    img: "/images/real/icaraizinho-sunset.jpg",
    desc: "Vila de pescadores, coqueirais e pôr do sol à beira-mar no litoral oeste do Ceará.",
    tag: "Brasil",
  },
  {
    slug: "ibiapaba",
    nome: "Serra da Ibiapaba",
    uf: "CE",
    img: "/images/ibiapaba.jpg",
    desc: "Viçosa, Tianguá, Ubajara e São Benedito: clima de serra, festivais e o bondinho de Ubajara.",
    tag: "Brasil",
  },
  {
    slug: "penedo",
    nome: "Penedo",
    uf: "AL",
    img: "/images/penedo.jpg",
    desc: "Charme histórico, igrejas coloniais e passeios pelo majestoso Rio São Francisco.",
    tag: "Brasil",
  },
  {
    slug: "piranhas",
    nome: "Piranhas",
    uf: "AL",
    img: "/images/piranhas.jpg",
    desc: "Os cânions do São Francisco e uma cidade histórica encravada no sertão alagoano.",
    tag: "Brasil",
  },
  {
    slug: "natal",
    nome: "Natal",
    uf: "RN",
    img: "/images/natal.jpg",
    desc: "Ponta Negra, Pipa e o Carnaval potiguar — sol, mar morno e muita animação.",
    tag: "Brasil",
  },
  {
    slug: "maragogi",
    nome: "Maragogi & Porto de Galinhas",
    uf: "AL · PE",
    img: "/images/maragogi.jpg",
    desc: "Piscinas naturais de água azul-turquesa entre dois dos litorais mais famosos do Nordeste.",
    tag: "Brasil",
  },
  {
    slug: "triunfo",
    nome: "Triunfo",
    uf: "PE",
    img: "/images/triunfo.jpg",
    desc: "A cidade serrana do sertão pernambucano, com clima ameno, neblina e tour urbano.",
    tag: "Brasil",
  },
  {
    slug: "campos",
    nome: "Aparecida & Campos do Jordão",
    uf: "SP",
    img: "/images/campos.jpg",
    desc: "Aparecida do Norte, Canção Nova, Frei Galvão e o charme europeu de Campos do Jordão.",
    tag: "Brasil",
  },
  {
    slug: "portugal",
    nome: "Portugal",
    uf: "2027",
    img: "/images/portugal.jpg",
    desc: "Roteiro inédito anunciado pela ALA Turismo para 2027. Garanta suas informações.",
    tag: "Internacional",
  },
];

export type Foto = { src: string; alt: string };

/** Fotografias reais da ALA Turismo (fornecidas pela empresa) */
export const FOTOS_REAIS: Foto[] = [
  { src: "/images/real/lencois-grupo", alt: "Grupo da ALA Turismo nos Lençóis Maranhenses" },
  { src: "/images/real/cachoeira-grupo", alt: "Viajantes da ALA Turismo em uma cachoeira" },
  { src: "/images/real/icaraizinho-sunset", alt: "Viajante no pôr do sol em Icaraizinho de Amontada" },
  { src: "/images/real/igreja-grupo", alt: "Grande grupo da ALA Turismo em frente a uma igreja histórica" },
  { src: "/images/real/lencois-dunas", alt: "Lagoa entre dunas ao pôr do sol" },
  { src: "/images/real/teleferico-1", alt: "Teleférico sobre a serra" },
  { src: "/images/real/icaraizinho-barco", alt: "Grupo em passeio de barco pelo mangue em Icaraizinho" },
  { src: "/images/real/por-do-sol", alt: "Grupo celebrando o pôr do sol ao lado de uma capela" },
  { src: "/images/real/cascata-grupo", alt: "Viajantes em mirante com cascata ao fundo" },
  { src: "/images/real/cachoeira-banho", alt: "Banho de cachoeira com o grupo" },
  { src: "/images/real/serra-grupo", alt: "Grupo da ALA Turismo em passeio na serra" },
  { src: "/images/real/lencois-amigas", alt: "Viajantes nas dunas dos Lençóis Maranhenses" },
  { src: "/images/real/museu", alt: "Visita a museu com pintura histórica" },
  { src: "/images/real/neve", alt: "Viajantes em atração de neve" },
  { src: "/images/real/mirante", alt: "Casal de viajantes no mirante" },
  { src: "/images/real/kong", alt: "Viajantes em parque temático" },
  { src: "/images/real/cachoeira", alt: "Rapel em cachoeira em meio à mata" },
  { src: "/images/real/sp-skyline", alt: "Prof. Gilson no alto de um edifício em São Paulo" },
  { src: "/images/real/aviao-museu", alt: "Viajantes em visita a museu aeroespacial" },
  { src: "/images/real/teleferico-2", alt: "Cabines do teleférico ao entardecer" },
  { src: "/images/real/barco-grupo", alt: "Grupo da ALA Turismo em passeio de barco" },
];
