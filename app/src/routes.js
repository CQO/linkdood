"use strict";
export default [
  {
    path: '/',
    component: require('components/index')
  },
  {
    path: '/register',
    component: require('components/register')
  },
  {
    path: '/chatMainWindow',
    component: require('components/chat')
  },
  {
    path: '*',
    redirect: '/'
  }
];
