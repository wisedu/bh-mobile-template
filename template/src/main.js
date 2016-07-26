import Vue from 'vue';
import App from './App.vue';

let Init = () => {
  new Vue({
    el: 'body',
    components: { App }
  });
}

if (process.env.NODE_ENV === 'production') {
  // For the Hybrid App
  Hybrid.Init(() => {
    global.HOST = site_url; // only can get this when Hybrid.Init is called
    Init();
  });
} else {
  global.HOST = 'http://amptest.wisedu.com';
  Init();
}
