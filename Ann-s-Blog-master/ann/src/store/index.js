import Vue from "vue"
import Vuex from "vuex"
import menuModule from "./modules/menuModule"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:menuModule
})

export default store;