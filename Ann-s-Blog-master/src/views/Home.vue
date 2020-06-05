<template>
  <div class="home">
    <div class="slick-nav-menu">
      <div class="nav-menu">
        <div class="logo">
          <a href="/"></a>
          </div>
        <div class="side-menu" @click="showTreeView">
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
        </div>
      </div>
      <transition name="slick-fade">
        <tree-view v-show="isShow" class="tree-view"></tree-view>
      </transition>
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
  
  export default {
    data() {
      return {
        isShow: false
      }
    },
    components: {
      TreeView,
      Scroll
    },
    methods: {
      showTreeView() {
        this.isShow = !this.isShow
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
  
  .logo {
    width: 110px;
    height: 40px;
  }

  .logo a {
    background: url("../assets/img/logo.png") no-repeat center center;
    width: 100%;
    height: 100%;
    display: block;
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

  .slick-fade-enter, .slick-fade-leave-to {
    opacity: 0;
    transform: translateY(-50px);
  }
  .slick-fade-enter-active, .slick-fade-leave-active {
    transition: all .5s ease;
  }
</style>