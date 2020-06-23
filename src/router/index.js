import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/layout'

Vue.use(Router)



export const constantRouterMap = [
  //首页
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    meta: { title: '首页', noCache: true },
    children: [
      {
        path: 'Home',
        component: resolve => require(['@/views/home/index'],resolve),
        name: 'Home',
        meta: { title: '首页', noCache: true ,icon:'dashboard' },
      }
    ]
  },
  //测试
  {
    path: '/test',
    component: resolve => require(['@/views/test/index'],resolve),
    meta: { title: '测试', noCache: true },
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        // component: () => import('@/views/redirect/index')
        component: resolve => require(['@/views/redirect/index'],resolve)
      }
    ],
    meta: { title: '刷新当前页面' }
  },
  {
    path: '/login',
    // component: () => import('@/views/login/index'),
    component: resolve => require(['@/views/login/index'],resolve),
    hidden: true
  },
  // {
  //   path: '*',
  //   name:'notfound',
  //   component: () => import('@/views/layout/404'),
  //   hidden: true
  // },

  // { path: '*', redirect: '/', hidden: true }
  {
    path: '/error/:code',
    name: 'error',
    meta: {
      title: 'error'
    },
    component: () => import('@/views/error/index')
  },

  //权限管理
  {
    path: '/authority_management',
    component: Layout,
    redirect: '/authority_management/set',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '权限管理',
      roles:'/authority_management/set',icon:'lock'
    },
    children: [
      {
        path: 'set',
        component: () => import('@/views/authority/set'),
        name: 'set',
        meta: {
          title: '权限设置',
          roles: '/authority_management/set'
        }
      },
      {
        path: 'set_user',
        name: 'set_user_index',
        redirect: '/authority_management/set',
            component: () => import('@/views/authority/set_user_index'),
        meta: {
          title: '用户管理',
          roles: '/authority_management/set'
        },
        hidden:true,
        children:[
          {
            path: '',
            component: () => import('@/views/authority/set_user'),
            name: 'set_user',
            meta: {
              title: '用户详情',
              roles: '/authority_management/set'
            },
          },

        ]
      },
    ]
  },
]


export default new Router({
  // mode: process.env.srconfig == 'testdev'?'hash':'history', // require service support
  // base:'/approveweb/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // {
  //   component: Layout,
  //   path: '/review',
  //   children: [
  //     {
  //       path: 'detail/:orderNumber/:id',
  //       component: resolve => require(['@/views/review_detail/detail'],resolve),
  //       name: 'review_detail',
  //       props: true ,
  //       meta: {
  //         title: '审核详情',
  //         icon: 'detail',
  //         noCache: true ,
  //         roles:'/approval_management/apply_first'
  //       }
  //     },
  //     {
  //       path: 'detail_end/:orderNumber/:id',
  //       component: resolve => require(['@/views/review_detail/detail_end'],resolve),
  //       name: 'review_detail_end',
  //       props: true ,
  //       meta: { title: '审核详情',
  //         icon: 'detail',
  //         noCache: true ,
  //         roles:'/approval_management/apply_first' }
  //     },
  //   ],
  //   hidden: true
  // },
]
