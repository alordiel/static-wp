const c1 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/home/saas/Development/Node.js/static-wp/src/templates/WordPressPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--word-press-post-tag-vue" */ "/home/saas/Development/Node.js/static-wp/src/templates/WordPressPostTag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/home/saas/Development/Node.js/static-wp/src/templates/WordPressCategory.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/saas/Development/Node.js/static-wp/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/saas/Development/Node.js/static-wp/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/saas/Development/Node.js/static-wp/src/pages/Index.vue")

export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: c1
  },
  {
    path: "/tag/:slug/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/category/:slug/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
