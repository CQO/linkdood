"use strict";
export default [
  {
    path: '/',
    component: require('components/list/Chat'),
    children:[
      {path: 'chatToPeople/:item/:id',component: require('components/MessageBox')}
    ]
  },
  {
    path: '/contacts',
    component: require('components/list/Contacts'),
    children:[
      {path: 'userIntroduction/:item/:id',component: require('components/card/ContactsInformation')},
      {path: 'mailRobotIntroduction/:item/:id',component: require('components/robot/information/mail')}
    ]
  },
  {path: '/more',component: require('components/More')},
  {
    path: '*',
    redirect: '/'
  }
];
