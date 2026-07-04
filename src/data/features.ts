export type Feature = {
  title: string;
  description: string;
  icon: "users" | "message-circle" | "shopping-bag" | "calendar-days";
};

export const features: Feature[] = [
  {
    title: "Conecte-se com seu campus",
    description:
      "Encontre estudantes da sua universidade, participe da comunidade e amplie sua rede acadêmica.",
    icon: "users",
  },
  {
    title: "Converse em um só lugar",
    description:
      "Troque mensagens, compartilhe informações e acompanhe o que acontece na vida universitária.",
    icon: "message-circle",
  },
  {
    title: "Compre, venda e troque",
    description:
      "Negocie livros, materiais, eletrônicos e outros itens diretamente com estudantes próximos.",
    icon: "shopping-bag",
  },
  {
    title: "Descubra oportunidades",
    description:
      "Acompanhe eventos, iniciativas, serviços e oportunidades relevantes para sua jornada acadêmica.",
    icon: "calendar-days",
  },
];
