<template>
  <div class="quickqortfolio">
    <div v-for="(item, index) in items" :key="index" class="imgItem">
       <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items:[]
      }
    },
    created() {
      const requireContext = require.context("../../assets/img/overview/quick-qortfolio", true, /\.jpg$/);

      const images = requireContext.keys().map(requireContext);

      this.items = images;
      console.log(this.items);
      
    }
  }
</script>

<style scoped>

  .quickqortfolio{
    width: 96%;
    z-index: 9;
    margin: 0 auto;
  }

  .imgItem {
    padding-bottom: 7px;
  }

  .imgItem img{
    width: 100%;
    height: auto;
  }
</style>