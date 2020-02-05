<template>
  <div>
    <swiper v-if="banner.length">
      <swiperItem v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImageLoad">
        </a>
      </swiperItem>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'common/swiper'

    export default {
        name: "swiperBanner",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banner:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
          return {
              isLoad:false
          }
        },
        methods:{
            swiperImageLoad(){
                if(!this.isLoad){
                    this.$emit('swiperImageLoad')
                    this.isLoad = true
                }
            }
        }
    }
</script>

<style scoped>

</style>
