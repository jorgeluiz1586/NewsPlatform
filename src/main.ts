import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import router from './infrastructure/routes/Routes';

createApp(App).use(router).mount('#app');
