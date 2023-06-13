import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import VueI18n from 'vue-i18n'
import en from './i18n/en.json'
import id from './i18n/id.json'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueScrollTo)

var lang
(localStorage.getItem('lang') === null) ? lang = 'en' : lang = localStorage.getItem('lang')

const i18n = new VueI18n({
  locale: lang,
  messages: {
    'en': en,
    'id': id
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
