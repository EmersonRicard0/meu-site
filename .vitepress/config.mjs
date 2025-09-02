import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Emerson Silva Ricardo',
  description: 'Portfólio e Documentação Técnica',

  // Adicionado para ativar a data de "Última Atualização"
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Sobre Mim ', link: '/curriculo' }, // Nome mais descritivo
      { text: 'Projetos', link: '/projetos/' }, // NOVO LINK AQUI
      { text: 'Documentação', link: '/docs/guias-instalacao/instalando-zabbix' },
      { text: 'Contato', link: '/contato' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EmersonRicard0' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/emerson-silva-ricardo-543308119/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Guias de Instalação',
          collapsible: true,
          items: [
            { text: 'Instalando Zabbix 7.4', link: '/docs/guias-instalacao/instalando-zabbix' },
            { text: 'Backup com Rclone', link: '/docs/guias-instalacao/backup-com-rclone' },
            { text: 'Backup com Grafana', link: '/docs/guias-instalacao/instalando-grafana' },
          ]
        }
      ]
    },

    // Adicionado para ativar a barra de pesquisa local
    search: {
      provider: 'local'
    }
  }
})