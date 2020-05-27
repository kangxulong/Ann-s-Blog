import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import("views/childComps/Index.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: "",
      redirect: "/index"
    },
    {
      path:"/index",
      component: Index
    }
]

const router = new VueRouter({
  linkActiveClass:'selected',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router