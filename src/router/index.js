import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from 'utils/auth'
import Layout from 'views/layout/Layout'
import WebLayout from 'views/web/webLayout/WebLayout'

Vue.use(VueRouter)

export const constantRouterMap = [
  {path: '/login', component: () => import('views/login/index'), hidden: true},
  {path: '/404', component: () => import('views/404'), hidden: true},

]

export const asyncRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('views/home/Home'),
      meta:{
        title: '首页',
        icon: 'el-icon-s-home'
      }
    }]
  },
  {
    path: '/pm',
    component: Layout,
    redirect: '/pm',
    name: 'PM',
    meta: {title: '项目管理', icon: 'el-icon-s-claim'},
    children:[
      {
        path: '',
        name: 'project',
        component: () => import('views/pm/PM'),
        meta: {title: '项目列表',}
      },
      {
        path: 'detail/:name',
        name: 'detail',
        component: () => import('views/pm/detail/Detail'),
        meta: { title: '项目详情'},
        hidden:true
      },
      {
        path: 'addProject',
        name: 'addProject',
        meta:{title: '添加项目'}
      }
    ]
  },
  {
    path: '/ams',
    component: Layout,
    redirect: '/ams',
    children:[
      {
        path: '',
        name: 'AMS',
        // component: () => import('views/test/Test'),
        meta: {title: '资产管理'}
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    children:[
      {
        path: '',
        name: 'profile',
        component: () => import('views/profile/Profile'),
        meta: {title: '个人中心'}
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    children:[
      {
        path: '',
        name: 'task',
        component: () => import('views/task/Task'),
        meta: {title: '任务管理'}
      }
    ]
  },
]

export const asyncWebRouterMap = [
  {
    path: '',
    component: WebLayout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'webHome',
      component: () => import('views/web/home'),
      meta:{title:'网页管理', icon: 'el-icon-s-home'}
    }]
  },
  {
    path: '/pm',
    component: WebLayout,
    redirect: '/pm',
    name: 'PM',
    meta: {title: '项目管理', icon: 'el-icon-s-claim'},
    children:[
      {
        path: '',
        name: 'project',
        // component: () => import('views/pm/PM'),
        meta: {title: '项目列表', icon: 'el-icon-folder'}
      },
      {
        path: 'detail/:name',
        name: 'detail',
        // component: () => import('views/pm/detail/Detail'),
        meta: { title: '项目详情'},
        hidden:true
      },
      {
        path: 'addProject',
        name: 'addProject',
        meta:{title: '添加项目', icon: 'el-icon-folder-add'}
      }
    ]
  },
  {
    path: '/ams',
    component: WebLayout,
    redirect: '/ams',
    children:[
      {
        path: '',
        name: 'AMS',
        meta: {title: '资产管理', icon: 'el-icon-collection-tag'}
      }
    ]
  },
  {
    path: '/profile',
    component: WebLayout,
    children:[
      {
        path: '',
        name: 'profile',
        // component: () => import('views/profile/Profile'),
        meta: {title: '个人中心'},
      }
    ],
    hidden:true
  },
  {
    path: '/task',
    component: WebLayout,
    children:[
      {
        path: '',
        name: 'task',
        // component: () => import('views/task/Task'),
        meta: {title: '任务管理', icon: 'el-icon-collection-tag'}
      }
    ]
  },
  {
    path: '/ums',
    component: WebLayout,
    name: 'ums',
    meta: {title: '系统管理', icon: 'el-icon-setting'},
    children:[
      {
        path: 'user',
        name: 'user',
        // component: () => import('views/task/Task'),
        meta: {title: '用户管理', icon: 'el-icon-user'}
      },
      {
        path: 'rbac',
        name: 'rbac',
        // component: () => import('views/task/Task'),
        meta: {title: '角色管理', icon: 'el-icon-s-custom'}
      },
      {
        path: 'menu',
        name: 'menu',
        // component: () => import('views/task/Task'),
        meta: {title: '菜单列表', icon: 'el-icon-menu'}
      },
    ]
  },
]

const router = new VueRouter({
  routes: constantRouterMap,
  mode: 'history',
  linkActiveClass: 'active',
  // 滚动设置
  scrollBehavior: () => ({y:0})
})

export default router