import { defineConfig } from 'vitepress'

export default defineConfig({
  // Define o nome que aparece no canto superior esquerdo do site
  title: 'Emerson Silva Ricardo',
  description: 'Analista de Redes / NOC - Portfólio Profissional',

  themeConfig: {
    // Configurações do tema

    // Itens do menu de navegação no topo
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Currículo', link: '/curriculo' },
      { text: 'Contato', link: '/contato' }
    ],

    // Ícones de redes sociais no topo
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmersonRicard0' }, // Lembre-se de verificar se este é o link correto do seu GitHub
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emerson-silva-ricardo-543308119/' }
    ],
  },
  
  // Configura o ícone que aparece na aba do navegador (favicon)
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ]
})