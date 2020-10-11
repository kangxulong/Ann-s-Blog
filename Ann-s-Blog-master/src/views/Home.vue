<template>
  <div class="home">
    <div class="slick-nav-menu" ref="navMenu" v-if="screenWidth <= 769">
      <div class="nav-menu">
        <div class="logo">
          <h1 class="logo_tit">
            <a href="/" class="logo_tit_lk">安菲菲</a>
          </h1>
        </div>
        <div class="side-menu" @click="togglePanel">
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
          <span class="nav-icon-bar"></span>
        </div>
      </div>
      <collapse-transition>
        <tree-view v-show= "isShow" class="tree-view" ></tree-view>
      </collapse-transition>
    </div>
    <div class="slick-navMenu" v-if="screenWidth >769">
      <div class="logo">
        <h1 class="logo_tit">
          <a href="/" class="logo_tit_lk">安菲菲</a>
        </h1>
      </div>
      <div class="desktop-menu-view">
        <tree-view ></tree-view>
      </div>
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
        isShow: false,
        screenWidth:document.body.clientWidth
      }
    },
    components: {
      TreeView,
      Scroll,
      collapseTransition
    },  
    methods: {
      togglePanel(){
        this.isShow ? this.hidden() : this.show()
      },
      show() {
        this.isShow = true;
        document.addEventListener('click',this.hidePanel,false)
      },
      hidden() {
        this.isShow = false;
        document.removeEventListener('click',this.hidePanel,false)
      },
      hidePanel(e) {
        if(!this.$refs.navMenu.contains(e.target)) {
          console.log('121212');
          this.hidden()
        }
      }
    },
    mounted() {
      const _this = this;
      window.resize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth;
          _this.screenWidth = window.screenWidth;
        })()
      }
    },
    // watch观察路由情况，控制跳转后菜单隐藏（未成功）
    watch:{
      $route:{
        handler(val, oldVal){
          if(!val == oldVal) {
            console.log("121212");
            this.hidden()
          }
        }
      }
    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
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
    /* position: relative; */
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

  .content {
    width: 100vw;
    position: absolute;
    top: 50px;
    bottom: 0;
    overflow: hidden;
  }
  .desktop-navMenu {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .desktop-menu-view{
    background-color: brown; 
  }
  @media screen and (max-width: 769px){
    .logo {
      background-color: aqua;
    }
    .tree-view {
      position: absolute;
      top: 49px;
      left: 0;
    }
  }
</style>