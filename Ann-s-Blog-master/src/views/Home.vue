<template>
  <div class="home">
    <div class="slick-nav-menu" ref="navMenu">
      <div class="nav-menu">
        <div class="logo">
          <h1 class="logo_tit">
            <a href="/" class="logo_tit_lk">安菲菲</a>
          </h1>
        </div>
        <div class="side-menu" @click="menuChangeState">
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
        </div>
      </div>
      <collapse-transition>
        <tree-view v-show="this.$store.state.menuShow" class="tree-view" :isShow = "isShow"></tree-view>
      </collapse-transition>
    </div>
    <scroll class="content"
            :probe-type = "3">
        <div class="router-view">
          <router-view></router-view>
        </div>
    </scroll>
  </div>
</template>

<script>
  import TreeView from "components/common/TreeView"
  import Scroll from "components/common/scroll/Scroll"

  import collapseTransition from "common/collapseTransition"

  export default {
    data() {
      return {
        isShow: this.$store.state.menuShow
      }
    },
    components: {
      TreeView,
      Scroll,
      collapseTransition
    },
    methods: {
      menuChangeState() {
        this.$store.commit('menuChangeState')
      }
    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    position: relative;
  }
  .slick-nav-menu {
    border-bottom: 1px solid #927f61;
    background-color: rgba(47,46,44,0.85);
    height: 50px;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .nav-menu {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  .logo h1 {
    margin: 0;
  }

  .logo_tit {
    width: 75px;
    height: 40px;
  }

  .logo .logo_tit_lk {
    background: url("../assets/img/logo.png") no-repeat center center;
    width: 100%;
    height: 100%;
    display: block;
    font-size: 0;
    overflow: hidden;
  }
  .side-menu {
    width: 1.125em;
    margin: 10px 20px 10px 0;
  }
  .side-menu .nav-icon-bar {
    display: block;
    height: 0.125em;
    width: 1.125em;
    background-color: #927f61;
    border-radius: 0;
    margin-bottom: 5px;
  }

  .tree-view {
    position: absolute;
    top: 49px;
    left: 0;
  }
  .content {
    /* background-color: rgb(240, 47, 47); */
    width: 100vw;

    position: absolute;
    top: 50px;
    bottom: 0;
    overflow: hidden;
  }

  /* .slick-fade-enter, .slick-fade-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  .slick-fade-enter-active, .slick-fade-leave-active {
    transition: all .5s ease;
  } */
</style>