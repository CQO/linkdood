"use strict";
export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/index')
  },
  {
    path: '/register',
    name: 'register',
    component: require('components/register')
  },
  {
    path: '*',
    redirect: '/'
  }
];
