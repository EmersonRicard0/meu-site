import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import './custom.css'
import Enhancements from './components/Enhancements.vue'
// 1. Importar a nossa nova função de animação
import { initScrollAnimations } from './scroll-animations.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('Enhancements', Enhancements)
  },
  // 2. Adicionar a função setup para executar o script de animação
  setup() {
    // Garante que o código só é executado no navegador
    if (typeof window !== 'undefined') {
      // Espera o conteúdo da página carregar antes de iniciar as animações
      window.addEventListener('load', () => {
        initScrollAnimations();
      });
    }
  }
}