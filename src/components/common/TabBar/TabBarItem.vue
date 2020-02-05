<template>
  <div class="TabBar-item" @click="itemClick">
    <slot name="TabBarIcon" v-if="!isActive"></slot>
    <slot name="TabBarIcon-active" v-else></slot>
    <div :style="activeStyle"><slot name="TabBarText" ></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#33b5f3'
      }
    },
    computed:{
      isActive(){
        return !this.$route.path.indexOf(this.path)
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        return this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .TabBar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 5px;
  }
  .TabBar-item img{
    height: 22px;
  }

  .active{
    color: #33b5f3;
  }
</style>
