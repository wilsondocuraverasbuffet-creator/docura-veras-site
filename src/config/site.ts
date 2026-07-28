export const SITE = {
  brand: "Doçura Vera's",
  legalName: "Doçura Vera's Buffet",
  descriptor: 'Hospitalidade · Eventos · Experiências',
  signature: 'Excelência servida em cada detalhe.',
  url: 'https://docuraverasbuffet.com.br',
  contact: {
    whatsapp: '+5511939470374',
    whatsappDisplay: '(11) 93947-0374',
    email: 'docuraverasbuffet@yahoo.com.br',
    areas: 'São Paulo e Rio de Janeiro',
  },
  social: {
    instagram: 'https://instagram.com/docuraverasbuffet',
    instagramDisplay: '@docuraverasbuffet',
  },
  whatsappLink(message = 'Olá, gostaria de solicitar um orçamento para o meu evento.') {
    return `https://wa.me/${this.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  },
} as const;
