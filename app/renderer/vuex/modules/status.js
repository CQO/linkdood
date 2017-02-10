"use strict";
import * as types from '../mutation-types';

const state = {
  main: 0,
  userMenuShow:false,
  fileBoxShow:false,
  peopleBoxShow:false,
  server:"http://127.0.0.1:3000/"
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
  [types.CLICK_FILE_BOX] (state) {
    //开关文件窗口
    state.peopleBoxShow=false;
    state.fileBoxShow=!state.fileBoxShow;
  },
  [types.CLICK_PEOPLE_BOX] (state) {
    //开关群成员窗口
    state.fileBoxShow=false;
    state.peopleBoxShow=!state.peopleBoxShow;
  },
  [types.ALL_HIDE] (state) {
    //隐藏所有菜单
    state.userMenuShow=false;
    state.fileBoxShow=false;
    state.peopleBoxShow=false;
  }
};

export default {
  state,
  mutations
};
