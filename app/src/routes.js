"use strict";
export default [
  {
    path: '/',
    component: require('components/MainWindow'),
    children:[
      {
        path: 'chat',
        component: require('components/list/ChatList'),
        children:[
          {path: 'chatToPeople/:item',component: require('components/MessageBox')}
        ]
      },
      {
        path: 'contacts',
        component: require('components/list/ContactsList'),
        children:[
          {path: 'userIntroduction/:item',component: require('components/card/ContactsInformation')}
        ]
      },
      {
        path: 'group',
        component: require('components/list/GroupList'),
        children:[
          {path: 'groupIntroduction/:item',component: require('components/card/GroupInformation')}
        ]
      },
      {path: 'organization',component: require('components/Organization')},
      {path: 'more',component: require('components/More')},
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
