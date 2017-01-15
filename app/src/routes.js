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
      {
        path: 'chat',
        component: require('components/chat/Chat'),
        children:[
          {path: 'chatToPeople',component: require('components/chat/MessageBox')}
        ]
      },
      {path: 'contacts',component: require('components/chat/Contacts')},
      {path: 'group',component: require('components/chat/Group')},
      {path: 'organization',component: require('components/chat/Organization')},
      {path: 'more',component: require('components/chat/More')},
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
