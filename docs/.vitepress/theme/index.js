import DefaultTheme from 'vitepress/theme'
import HomePage from '../../components/HomePage.vue'
import './style/index.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('HomePage', HomePage)
  }
}
