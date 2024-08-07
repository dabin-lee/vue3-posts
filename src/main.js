import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

createApp(App).use(router).mount('#app');

console.log('env.mode', import.meta.env.MODE);
// console.log('env BaseURL', import.meta.env.BASE_URL);
// console.log('env PRODo', import.meta.env.PRODO);
// console.log('env DEV', import.meta.env.DEV);
// console.log(
// 	'VITE_APP_API_URL=http://localhost:5174/',
// 	import.meta.env.VITE_APP_API_URL,
// );
