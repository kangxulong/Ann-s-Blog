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
      component: Index
    },
    {
      path:"/overview/quick-qortfolio",
      component:QuickQortfolio
    }
]

const router = new VueRouter({
  linkActiveClass:'selected',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router