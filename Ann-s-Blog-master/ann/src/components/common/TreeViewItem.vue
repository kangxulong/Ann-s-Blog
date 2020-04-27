<template>
  <div class=" ">
    <div v-for="menu in menus" :key="menu.id" :class="'level-' + menu.level">
      <!-- :class是为了动态拼接样式，可以设置level-1和level-2不同样式 -->
      <div v-if="menu.type === 'link'">
        <!-- 判定为link时，可以直接跳转到相应路径 -->
        <router-link :to="menu.url" @click.native="toggle(menu)">{{menu.name}}</router-link>
      </div>
      <div v-if="menu.type === 'button'">
        <div>

        </div>
        <transition name="fade">
          
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

      }
    },
  }
</script>

<style scoped>

</style>