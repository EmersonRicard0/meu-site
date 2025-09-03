// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './components/BackToTop.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Componentes personalizados podem ser registrados aqui
  }
}