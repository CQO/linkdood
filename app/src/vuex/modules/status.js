"use strict";
import * as types from '../mutation-types';

const state = {
  main: 0,
  userMenuShow:true
};

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main--;
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main++;
  },
  [types.USER_MENU_CLICK] (state) {
    //如果菜单为打开状态那么把它关闭 如果是关闭状态把它打开
    state.userMenuShow=!state.userMenuShow;
  },
  [types.USER_MENU_HIDE] (state) {
    //关闭用户菜单
    state.userMenuShow=true;
  }
};

export default {
  state,
  mutations
};
