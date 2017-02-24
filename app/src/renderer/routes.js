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
            component: require('components/messageBox'),
          }
        ]
      },
      {
        path: '/conversations',
        component: require('components/list/conversations'),
        children:[
          {
            path: '/chatList/dialog/:id',
            component: require('components/messageBox'),
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
