import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import store from './vuex'
import * as Vuex from 'vuex';
import useVuelidate from '@vuelidate/core'

AOS.init();



createApp(App).use(router).use(store).use(VueAwesomePaginate).mount('#app')
