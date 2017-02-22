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
            path: '/chatList/chatList',
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
]
