import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueAutosuggest from "vue-autosuggest";
import Multiselect from "vue-multiselect";
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import App from './components/App';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Profiles from './components/Profiles';
import About from './components/about';
import './index.html';

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAutosuggest);
Vue.component("multiselect", Multiselect);
Vue.use(firestorePlugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/profiles', component: Profiles },
    { path: '/about', component: About },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});