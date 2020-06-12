import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import App from './components/App';
import VueAutosuggest from "vue-autosuggest";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './index.html';

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(VueAutosuggest);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});