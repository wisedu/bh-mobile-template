import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {init} from 'bh-mobile-sdk';
import routerconfig from './router';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.credentials = true;

const router = new VueRouter({
  history: false
});

routerconfig(router);

let Init = () => {
  router.start(App, '#app');
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
