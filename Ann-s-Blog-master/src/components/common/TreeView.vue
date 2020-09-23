<template>
  <div class="treeView">
    <tree-view-item :menus="menus"></tree-view-item>
  </div>
</template>

<script>
  import TreeViewItem from "./TreeViewItem"
  export default {
    data() {
    return {
      menus: this.$store.state.menusModule.menus
      };
    },
    components: {
      TreeViewItem
    },
  }
</script>

<style scoped>
  .treeView {
    background-color: rgba(47,46,44,0.85);
    width: 100%;
  }
</style>