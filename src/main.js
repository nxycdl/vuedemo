// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import axios from 'axios';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import './common/stylus/index.styl';

Vue.use(VueRouter);

Vue.prototype.$http = axios;

let routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/',
    component: goods
  }];
let router = new VueRouter({routes: routes, linkActiveClass: 'active'});

var vm = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
console.log(vm.length);
