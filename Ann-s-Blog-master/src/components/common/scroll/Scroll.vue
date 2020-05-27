<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name:"Scroll",
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type:Number,
        default:1
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        scroll: {}
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout( () => {
        this.__initScroll()
      }, 20)
    },
    methods: {
      __initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        //better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click:true
        }) 

        // 2.是否派发滚动事件
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
    },
    watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>

</style>