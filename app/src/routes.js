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
    component: require('components/chat'),
    children:[
      {path: 'contacts',component: require('components/chat/Contacts')}
    ]
  },
  {
    path: '/Screenshot',
    component: require('components/tools/Screenshot')
  },
  {
    path: '*',
    redirect: '/'
  }
];
