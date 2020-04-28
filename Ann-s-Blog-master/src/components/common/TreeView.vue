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
        menu: this.$store.state.menuModule.menu
      }
    },
    components: {
      TreeViewItem
    }
  }
</script>

<style scoped>

</style>