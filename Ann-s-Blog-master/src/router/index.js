import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import("views/childComps/Index.vue")
const QuickQortfolio = () => import("views/childComps/QuickQortfolio.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: "",
      redirect: "/index"
    },
    {
      path:"/index",
      component: Index,
      meta: {
        title:'首页'
      }
    },
    {
      path:"/overview/quick-qortfolio",
      component:QuickQortfolio,
      meta: {
        title: 'QuickQortfolio'
      }
    }
]

const router = new VueRouter({
  linkActiveClass:'selected',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 修改每个页面的title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

// 跳转路由后关闭菜单显示
router.afterEach((to, from) => {
  if(to !== from) {
    console.log('123123');
  }
})

export default router