import { defineConfig } from 'vitepress'

export default defineConfig({
  // Configurações gerais do site
  title: 'Emerson Silva Ricardo',
  description: 'Portfólio e Documentação Técnica',

  // Configura o ícone que aparece na aba do navegador (favicon)
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],

  // Configurações do tema (aparência, menus, etc.)
  themeConfig: {
    // Itens do menu de navegação no topo do site
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Currículo', link: '/curriculo' },
      { text: 'Documentação', link: '/docs/guias-instalacao/instalando-servico-x' }, // Link para a nova seção
      { text: 'Contato', link: '/contato' }
    ],

    // Ícones de redes sociais no topo
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmersonRicard0' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emerson-silva-ricardo-543308119/' }
    ],

    // --- CONFIGURAÇÃO DO MENU LATERAL (SIDEBAR) PARA A DOCUMENTAÇÃO ---
    sidebar: {
      // Esta sidebar só irá aparecer em páginas dentro da pasta /docs/
      '/docs/': [
        {
          text: 'Guias de Instalação',
          collapsible: true, // Permite que a seção seja expandida/recolhida
          items: [
            // Seus manuais vão aqui. O link deve corresponder ao caminho do arquivo.
            { text: 'Instalando Serviço X', link: '/docs/guias-instalacao/instalando-servico-x' },
            // { text: 'Instalando Serviço Y', link: '/docs/guias-instalacao/instalando-servico-y' },
          ]
        },
        {
          text: 'Conceitos Gerais',
          collapsible: true,
          items: [
            // Exemplo de outra seção para o futuro
            // { text: 'Arquitetura de Rede', link: '/docs/conceitos/arquitetura-rede' },
          ]
        }
      ]
    }
  }
})