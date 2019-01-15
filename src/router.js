import Vue from 'vue'
import Router from 'vue-router'
import Discover from './views/Discover.vue'
import Animal from './views/Animal.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/:slug',
      name: 'animal',
      component: Animal
    }
  ]
});
