<template>
    <div class = "wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"

    export default {
        name: "scroll",
        data(){
            return {
                scroll:null
            }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default: false
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType: this.probeType,
                pullUpLoad:this.pullUpLoad
            })

            this.scroll.on('scroll',(position) => {
                this.$emit('contentScroll',position)
            })

            this.scroll.on('pullingUp',() => {
                this.$emit('pullingUp')
            })
        },
        methods:{
            scrollTo(x,y,time=500){
                this.scroll && this.scroll.scrollTo(x,y,time)
            },

            finishPullUp(){
                this.scroll && this.scroll.finishPullUp()
            },

            refresh(){
                // console.log("===");
                this.scroll && this.scroll.refresh()
            },

            getScrollY(){
                return this.scroll ? this.scroll.y : 0
            }
        }
    }
</script>

<style scoped>
  .wrapper{
    /*height: 300px;*/
  }

</style>
