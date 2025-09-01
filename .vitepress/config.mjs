import { defineConfig } from 'vitepress'

export default defineConfig({
  // Título do site (aparece no canto superior esquerdo)
  title: 'Emerson Silva Ricardo', // <-- CORRIGIDO AQUI
  description: 'Analista de Redes / NOC - Portfólio Profissional',

  themeConfig: {
    // Itens do menu de navegação
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Currículo', link: '/curriculo' },
      { text: 'Contato', link: '/contato' }
    ], 

    // Ícones de redes sociais
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmersonRicard0' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emerson-silva-ricardo-543308119/' }
    ]
  },
  
  // Ícone da aba do navegador
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ]
})