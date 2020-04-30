<template>
  <div class="home">
    <div class="side-menu">
      <tree-view></tree-view>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TreeView from "components/common/TreeView"
  
  export default {
    data() {
      return {

      }
    },
    components: {
      TreeView
    }
  }
</script>

<style scoped>
  .side-menu {
    width: 200px;
    height: 50px;
  }
</style>