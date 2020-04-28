import Vue from 'vue'
import VueRouter from 'vue-router'

const QuickPortfolio = () => import("views/overview/QuickPortfolio")
const NavBar = () => import("components/common/NavBar.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: "",
      redirect: "/navbar"
    },
    {
      path:"/navbar",
      component: NavBar
    },
    {
      path:"/quickportfolio",
      component: QuickPortfolio
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router