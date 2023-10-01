/**
 * meta 属性 解释
 * title: 在菜单(导航栏)中显示的名字
 * hidden: 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
 * icon: 菜单的前面那个图标 【注意:这里的图标名要和element-plus官方图标名一致】
 */

// 自定义路由
export const constantRouters = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      // 路由元信息
      title: '登录', // 标题
      hidden: true, // 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
    },
  },
  // 首页
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      // 路由元信息
      title: '', // 标题
      hidden: false, // 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
      icon: 'Link', // 图标
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          // 路由元信息
          title: '首页', // 标题
          hidden: false, // 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
          icon: 'HomeFilled', // 图标
        },
      },
    ],
  },
  // 数据大屏
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/screen.vue'),
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  // 权限管理
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Platform',
        },
      },
    ],
  },
  // 商品管理
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/layout/index.vue'),
    redirect: '/product/trademark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'ShoppingBag',
    },
    children: [
      {
        path: '/product/trademark',
        name: 'Trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingCartFull',
        },
      },
      {
        path: '/product/attr',
        name: 'Attr',
        component: () => import('@/views/product/attr/index.vue'),
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'Calendar',
        },
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'Orange',
        },
      },
    ],
  },
  // 404
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      // 路由元信息
      title: '404', // 标题
      hidden: true, // 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
    },
  },
  // Any : 兜底
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      // 路由元信息
      title: '任意路由', // 标题
      hidden: true, // 该路由 在菜单中是否隐藏   true:隐藏 false:不隐藏
    },
  },
];
