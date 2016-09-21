import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

let Init = () => {
  new Vue({
    el: 'body',
    components: { App }
  });
}
{{#if isHybrid}}
if (process.env.NODE_ENV === 'production') {
  // For the Hybrid App
  Hybrid.Init(() => {
    // only can get this when Hybrid.Init is called
    global.HOST = site_url;
    Init();
  });
} else {
  global.HOST = 'http://amptest.wisedu.com';
  Init();
}
{{else}}
Init()
{{/if}}
