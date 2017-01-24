"use strict";
export default [
  {
    path: '/',
    component: require('components/mainWindow')
  },
  {
    path: '/chatMainWindow',
    component: require('components/mainWindow'),
    children:[
      {
        path: 'chat',
        component: require('components/chat/Chat'),
        children:[
          {path: 'chatToPeople/:item',component: require('components/chat/MessageBox')}
        ]
      },
      {
        path: 'contacts',
        component: require('components/chat/Contacts'),
        children:[
          {path: 'userIntroduction/:item',component: require('components/chat/introduction')}
        ]
      },
      {
        path: 'group',
        component: require('components/chat/Group'),
        children:[
          {path: 'userIntroduction/:item',component: require('components/chat/introduction')}
        ]
      },
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
