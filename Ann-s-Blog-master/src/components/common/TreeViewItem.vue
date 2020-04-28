<template>
  <div class="tree-view-item">
    <div v-for="menu in menus" :key="menu.id" :class="'level-' + menu.level">
      <!-- :class是为了动态拼接样式，可以设置level-1和level-2不同样式 -->
      <div v-if="menu.type === 'link'">
        <!-- 判定为link时，可以直接跳转到相应路径 -->
        <router-link :to="menu.url" @click.native="toggle(menu)">{{menu.name}}</router-link>
      </div>
      <div v-if="menu.type === 'button'">
        <div :class="{selected: menu.isSelected,expend: menu.isExpended}" @click="toggle(menu);changeIcon(icon)" >
          {{menu.name}}
          <span class="icon">{{icon}}</span>
        </div>
        <transition name="fade">
          <div v-if="menu.subMenu" v-show="menu.isExpended">
            <tree-view-item :menus="menu.subMenu"></tree-view-item>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['menu'],
    data() {
      return {
        icon:'▶'
      }
    },
    methods: {
      toggle(menu) {
        this.$store.commit('findParent', { menu });
      },
      changeIcon(icon) {
        if(this.icon = '▶') {
          this.icon = '▼'
        }else if(this.icon = '▼'){
          this.icon = '▶'
        }
      }
    },
    created() {
      // 创建组件时，初始化组件
      this.$store.commit('firstInit', { url:this.$route.path })
    }
  }
</script>

<style scoped>

</style>