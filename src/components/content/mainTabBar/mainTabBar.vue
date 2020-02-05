<template>
  <div>
    <tab-bar>
      <TabBarItem path='/home'>
        <img src="~assets/img/TabBar/home-active.png" alt="" slot="TabBarIcon-active">
        <img src="~assets/img/TabBar/home.png" alt="" slot="TabBarIcon">
        <div slot="TabBarText">首页</div>
      </TabBarItem>
      <TabBarItem path='/class'>
        <img src="~assets/img/TabBar/class-active.png" alt="" slot="TabBarIcon-active">
        <img src="~assets/img/TabBar/class.png" alt="" slot="TabBarIcon">
        <div slot="TabBarText">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart'>
        <img src="~assets/img/TabBar/cart-active.png" alt="" slot="TabBarIcon-active">
        <img src="~assets/img/TabBar/cart.png" alt="" slot="TabBarIcon">
        <div slot="TabBarText">购物车</div>
      </TabBarItem>
      <TabBarItem path='/about'>
        <img src="~assets/img/TabBar/about-active.png" alt="" slot="TabBarIcon-active">
        <img src="~assets/img/TabBar/about.png" alt="" slot="TabBarIcon">
        <div slot="TabBarText">关于</div>
      </TabBarItem>
      <TabBarItem path='/profile'>
        <img src="~assets/img/TabBar/profile-active.png" alt="" slot="TabBarIcon-active">
        <img src="~assets/img/TabBar/profile.png" alt="" slot="TabBarIcon">
        <div slot="TabBarText">我的</div>
      </TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from 'components/common/TabBar/TabBar.vue'
    import TabBarItem from 'components/common/TabBar/TabBarItem.vue'

    export default {
        name: "mainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
