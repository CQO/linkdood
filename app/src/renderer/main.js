"use strict";
import Vue from 'vue';
import Vuex from 'vuex';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';

import App from './App';
import routes from './routes';
import store from './vuex/store';
import VueDND from 'awe-dnd';

Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);
Vue.use(Vuex);
//拖动排序插件
Vue.use(VueDND);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
