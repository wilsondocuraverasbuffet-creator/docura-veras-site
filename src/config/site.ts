export const SITE = {
  name: "Doçura Vera's",
  descriptor: "Especialistas em Catering Corporativo",
  signature: "Excelência servida em cada detalhe.",
  url: "https://www.docuraverasbuffet.com.br",
  contact: {
    whatsapp: "5511939470374",
    whatsappDisplay: "(11) 93947-0374",
    email: "docuraverasbuffet@yahoo.com.br",
    areas: "São Paulo e Rio de Janeiro",
  },
  social: {
    instagram: "https://instagram.com/docuraverasbuffet",
    instagramDisplay: "@docuraverasbuffet",
  },
  whatsappLink(message = "Olá, gostaria de solicitar um orçamento para meu evento.") {
    return `https://wa.me/${this.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  },
} as const;
