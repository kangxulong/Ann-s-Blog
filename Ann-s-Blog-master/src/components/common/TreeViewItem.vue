<template>
  <div class="tree-view-item">
    <div v-for="menu in menus" :key="menu.id" class="item">
      <div v-if="menu.type === 'link'">
        <!-- 判定为link时，可以直接跳转到相应路径 -->
        <router-link :to="menu.url" @click.native="toggle(menu)" class="link">{{menu.name}}</router-link>
      </div>
      <div v-if="menu.type === 'button'">
        <div :class="{selected: menu.isSelected, expand: menu.isExpanded}" class="button"  @click="toggle(menu)">
          {{menu.name}}
          <span class="icon">{{icon}}</span>
        </div>
        <transition name="fade">
          <div v-if="menu.isExpanded" class="subMenu">
            <tree-view-item :menus="menu.subMenu"></tree-view-item>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TreeViewItem',
    props: ['menus'],
    data() {
      return {
        icon:'▶'
      }
    },
    methods: {
      toggle(menu) {
        this.$store.commit('findParents', { menu });
        if(this.icon = '▶') {
         return this.icon = '▼';
        }else if(this.icon = '▼') {
          return this.icon = '▶';
        }
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

  .expand {
    display: block;
  }

  .selected{
    background-color:#ccc;
    color: #77571d;
    border-radius: 5px;
  }

  .subMenu {
    padding: 0 0 0 20px;
  }

  .fade-enter-active {
    transition: all 0.5s ease 0s;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave-to {
    height: 0;
  }
</style>