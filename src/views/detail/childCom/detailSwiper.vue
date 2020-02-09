<template>
  <swiper v-if="banner.length">
    <swiperItem v-for="(item, index) in banner" :key="index" class="banner">

        <img :src="item" alt="">

    </swiperItem>
  </swiper>
</template>

<script>
    import {Swiper, SwiperItem} from 'common/swiper'

    export default {
        name: "detailSwiper",
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
        }
    }
</script>

<style scoped>

  .banner{
    height: 450px;
    overflow: hidden;
  }

</style>
