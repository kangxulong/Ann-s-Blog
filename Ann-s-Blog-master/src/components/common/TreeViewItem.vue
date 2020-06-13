<template>
  <div class="tree-view-item">
    <div v-for="menu in menus" :key="menu.id" class="item">
      <div v-if="menu.type === 'link'"
           @click="activeChange()">
        <!-- 判定为link时，可以直接跳转到相应路径 -->
        <router-link :to="menu.url" @click.native="toggle(menu)" class="link">{{menu.name}}</router-link>
      </div>
      <div v-if="menu.type === 'button'">
        <div :class="{selected: menu.isSelected, expand: menu.isExpanded}" class="button"  @click="toggle(menu)">
          {{menu.name}}
          <span class="icon" v-if="menu.isExpanded">
            <img src="~assets/img/icon/arrow-down.svg" alt="打开">
          </span>
          <span class="icon" v-else>
            <img src="~assets/img/icon/arrow-right.svg" alt="折叠">
          </span>
        </div>
        <collapse-transition>
          <div v-show = "menu.isExpanded" class="subMenu">
            <tree-view-item :menus="menu.subMenu"></tree-view-item>
          </div>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>

  import collapseTransition from "common/collapseTransition.js"

  export default {
    name:'TreeViewItem',
    props: ['menus'],
    data() {
      return {
        // isActive:false
      }
    },
    components:{
      collapseTransition
    },
    methods: {
      toggle(menu) {
        this.$store.commit('findParents', { menu });
      },
      activeChange() {
        this.isActive = !this.isActive
      }
    },
    created() {
      // 创建组件时，初始化组件
      this.$store.commit('firstInit', { url:"/index" })
    }
  }
</script>

<style scoped>
  .tree-view-item {
    color: var(--color-text);
    width: 100%;
  }
  .item {
    margin: 10px 0;
  }

  .link, .button {
    display: block;
    font-size: 18px;
    line-height: 20px;
    padding: 5px 10px;
    margin: 2px 8px;
  }
  .icon{
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 20px;
  }

  .icon img {
    width: 100%;
    height: 100%;
  }

  .expand {
    display: block;
  }

  .select{
    background-color:#ccc;
    color: #77571d;
    border-radius: 5px;
  }

  .subMenu {
    padding: 0 0 0 20px;
  }
</style>