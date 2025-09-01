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
      // Atualizado para apontar para o primeiro guia real
      { text: 'Documentação', link: '/docs/guias-instalacao/instalando-zabbix' },
      { text: 'Contato', link: '/contato' }
    ],

    // Ícones de redes sociais no topo
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmersonRicard0' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emerson-silva-ricardo-543308119/' }
    ],

    // --- CONFIGURAÇÃO DO MENU LATERAL (SIDEBAR) ATUALIZADA ---
    sidebar: {
      // Esta sidebar só irá aparecer em páginas dentro da pasta /docs/
      '/docs/': [
        {
          text: 'Guias de Instalação',
          collapsible: true, // Permite que a seção seja expandida/recolhida
          items: [
            // Links para os manuais que criamos
            { text: 'Instalando Zabbix 7.4', link: '/docs/guias-instalacao/instalando-zabbix' },
            { text: 'Backup com Rclone', link: '/docs/guias-instalacao/backup-com-rclone' },
          ]
        }
        // Se quiser adicionar uma nova seção no futuro, como "Conceitos",
        // basta criar um novo bloco como este aqui.
        /*
        {
          text: 'Conceitos Gerais',
          collapsible: true,
          items: [
            // { text: 'Arquitetura de Rede', link: '/docs/conceitos/arquitetura-rede' },
          ]
        }
        */
      ]
    }
  }
})