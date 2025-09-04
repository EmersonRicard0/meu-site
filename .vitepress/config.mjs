export default {
  title: 'Emerson Silva - Analista de Redes & NOC',
  description: 'Profissional de redes com 7 anos de experiência em ambiente de provedor de internet',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer'
      }
    ]
  ],
  
  themeConfig: {
    logo: '/perfil.jpg',
    
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Currículo', link: '/curriculo' },
      {
        text: 'Documentação',
        items: [
          { text: 'Instalando Zabbix 7.4', link: '/docs/guias-instalacao/instalando-zabbix' },
          { text: 'Instalando Grafana', link: '/docs/guias-instalacao/instalando-grafana' },
          { text: 'Backup com Rclone', link: '/docs/guias-instalacao/backup-com-rclone' }
        ]
      },
      { text: 'Projetos', link: '/projetos/monitoramento-grafana-zabbix' },
      // --- NOVO BOTÃO ADICIONADO AQUI ---
      { text: 'Ferramentas', link: '/isptools' },
      { text: 'Contato', link: '/contato' }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/seu-usuario' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/seu-perfil' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Guias de Instalação',
          collapsed: false,
          items: [
            { text: 'Instalando Zabbix 7.4', link: '/docs/guias-instalacao/instalando-zabbix' },
            { text: 'Instalando Grafana', link: '/docs/guias-instalacao/instalando-grafana' },
            { text: 'Backup com Rclone', link: '/docs/guias-instalacao/backup-com-rclone' }
          ]
        }
      ]
    }
  }
}