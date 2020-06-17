import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueAutosuggest from "vue-autosuggest";
import Multiselect from "vue-multiselect";
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import App from './components/App';
import Home from './components/Home';
import Map from './components/Map';
import Profiles from './components/Profiles';
import Calendar from './components/Calendar';
import About from './components/About';
import Forchildren from './components/Forchildren';
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
    { path: '', component: Home },
    { path: '/map', component: Map },
    { path: '/profiles', component: Profiles },
    { path: '/calendar', component: Calendar },
    { path: '/about', component: About },
    { path: '/forchildren', component: Forchildren },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});