import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Lara from './presets/lara';
import './style.css'
import App from './App.vue'
import Checkbox from 'primevue/checkbox';

const app = createApp(App)
app.component("Checkbox", Checkbox);
app.use(PrimeVue, {
    unstyled: true,
    pt:Lara
});
app.mount('#app');;