import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faSearch, faBalanceScale, faCog } from '@fortawesome/free-solid-svg-icons';

// Agregar íconos a la biblioteca
library.add(faHome, faSearch, faBalanceScale, faCog);

const app = createApp(App);

// Registrar Font Awesome como componente global
app.component('font-awesome-icon', FontAwesomeIcon);

// Configurar Pinia y Router
app.use(createPinia());
app.use(router);

app.mount('#app');
