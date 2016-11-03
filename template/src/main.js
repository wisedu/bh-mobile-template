import Vue from 'vue';
import Index from './pages/index/index.vue';
import VueResource from 'vue-resource';
import {init} from 'bh-mobile-sdk';

Vue.use(VueResource);
Vue.http.options.credentials = true;

let Init = () => {
  new Vue({
    el: 'body',
    components: { Index }
  });
}
if (process.env.NODE_ENV === 'production') {
  init(() => {
    global.HOST = location.origin;
    Init();
  });
} else {
  init(() => {
    global.HOST = 'http://amptest.wisedu.com';
    Init();
  })
}
