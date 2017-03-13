export default [
  {
    path: '/',
    component: require('components/index'),
    children:[
      {
        path: '/chatList',
        component: require('components/list/chat'),
        children:[
          {
            path: '/chatList/dialog/:id',
            component: require('components/box/message'),
          }
        ]
      },
      {
        path: '/conversations',
        component: require('components/list/conversations'),
        children:[
          {
            path: '/conversations/dialog/:id',
            component: require('components/box/information'),
          }
        ]
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];
