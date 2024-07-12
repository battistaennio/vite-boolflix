import { createApp } from 'vue'
import App from './App.vue'

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Aggiungi l'icona della stella alla libreria
library.add(faStar)

const app = createApp(App)

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
