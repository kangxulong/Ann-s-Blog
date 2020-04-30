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
    }
  }
</script>

<style scoped>
  .treeView {
    color: var(--color-text);
  }
</style>