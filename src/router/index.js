import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/teacherManger',
    component: Layout,
    redirect: '/teacherManger/table',
    name: 'TeacherManger',
    meta: { title: '教师管理', icon: 'el-icon-user-solid' },
    children: [
      {
        path: 'teacherList',
        name: 'TeacherList',
        component: () => import('@/views/teacherList/index'),
        meta: { title: '教师列表', icon: 'search' }
      },
      {
        path: 'addTeacher',
        name: 'AddTeacher',
        component: () => import('@/views/addTeacher/index'),
        meta: { title: '新增教师', icon: 'edit' }
      },
      {
        path: 'teacherInformation',
        name: 'TeacherInformation',
        component: () => import('@/views/teacherInformation/index'),
        meta: { title: '教师信息', icon: 'el-icon-document' }
      }
    ]
  },

  {
    path: '/studentManger',
    component: Layout,
    redirect: '/studentManger/table',
    name: 'StudentManger',
    meta: { title: '学生管理', icon: 'peoples' },
    children: [
      {
        path: 'studentList',
        name: 'StudentList',
        component: () => import('@/views/studentList/index'),
        meta: { title: '学生列表', icon: 'search' }
      },
      {
        path: 'addStudent',
        name: 'AddStudent',
        component: () => import('@/views/addStudent/index'),
        meta: { title: '新增学生', icon: 'edit' }
      },
      {
        path: 'studentInformation',
        name: 'StudentInformation',
        component: () => import('@/views/studentInformation/index'),
        meta: { title: '学生信息', icon: 'el-icon-document' }
      }
    ]
  },

  {
    path: '/scoreManger',
    component: Layout,
    redirect: '/scoreManger/table',
    name: 'ScoreManger',
    meta: { title: '成绩管理', icon: 'skill' },
    children: [
      {
        path: 'scoreSearch',
        name: 'ScoreSearch',
        component: () => import('@/views/scoreSearch/index'),
        meta: { title: '成绩查询', icon: 'search' }
      },
      {
        path: 'addscore',
        name: 'Addscore',
        component: () => import('@/views/addscore/index'),
        meta: { title: '新增成绩', icon: 'edit' }
      },
      {
        path: 'scoreReport',
        name: 'ScoreReport',
        component: () => import('@/views/scoreReport/index'),
        meta: { title: '成绩分析', icon: 'el-icon-document' }
      }
    ]
  },

  {
    path: '/adminUserManger',
    component: Layout,
    redirect: '/adminUserManger/table',
    name: 'AdminUserManger',
    meta: { title: '管理员管理', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'adminUserList',
        name: 'AdminUserList',
        component: () => import('@/views/adminUserList/index'),
        meta: { title: '管理员列表', icon: 'search' }
      },
      {
        path: 'addAdminUser',
        name: 'AddAdminUser',
        component: () => import('@/views/addAdminUser/index'),
        meta: { title: '新增管理员', icon: 'edit' }
      },
      {
        path: 'adminUserInformation',
        name: 'AdminUserInformation',
        component: () => import('@/views/adminUserInformation/index'),
        meta: { title: '管理员信息', icon: 'el-icon-document' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
