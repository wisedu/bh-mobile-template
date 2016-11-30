/**
 * 用于路由的配置
 */
import IndexPage from './pages/index/index.vue';

export default (router) => {
  router.map({
    '/': {
      component: IndexPage
    }
  });
};
