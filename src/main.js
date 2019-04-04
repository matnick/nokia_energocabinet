import Vue from 'vue'
import main_page from './main_page.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid.faDatabase)
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const router = new VueRouter({
   routes: [{
      path: '/main',
      component: main_page
   },
   {
      path: '*',
      redirect: '/main'
   }]
});

import Axios from "axios";
import VueAxios from "vue-axios";
import Vuex from 'vuex';

Vue.use(Vuex, VueAxios, Axios, Vue_i18n);

const store = new Vuex.Store({
    state: {
        locale: "ru",
        energoCabURL: "https://dom.energokabinet.ru/api",
        energoCabToken: undefined,
    },
    mutations: {
        updateLocale(state, locale) {
            this.state.locale = locale;
        },
        updateEnergyCabToken(state, token) {
            this.state.energoCabToken = token;
        }
    },
    getters: {
        getLocale: state => {
            return state.locale;
        },
        getEnergoCabURL: state => {
            return state.energoCabURL;
        },
        getEnergoCabToken: state => {
          return state.energoCabToken;
        }
    },
    actions: {
        changeLocale: ({ commit }, locale) => {
            commit("updateLocale", locale)
        },
        setEnergoCabToken: ({ commit }, token) => {
          commit("updateEnergyCabToken", token)
        },
    }
});

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import '../src/assets/bootstrap-custom.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import YmapPlugin from 'vue-yandex-maps'
const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'ec521c46-9bb1-4d29-97a3-31758999fe20', // '' by default
  lang: 'en_US', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}
Vue.use(YmapPlugin, options)

import Vue_i18n from 'vue-i18n';
Vue.use(Vue_i18n)
const messages = require ('./assets/translation.json');
const i18n = new Vue_i18n({
    locale: store.state.locale,
    messages,
})

import "../src/assets/custom.css";

new Vue({
   el: '#app',
   router,
   store,
   i18n,
   render: h => h(main_page)
})
