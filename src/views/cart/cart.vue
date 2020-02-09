<template>
  <div class = "cart">
    <NavBar class="cart-nav">
      <p slot="center">购物车({{cartNum}})</p>
    </NavBar>

    <scroll ref="cartScroll" class="cartScroll">
      <cartList></cartList>
    </scroll>

    <cartBottomBar></cartBottomBar>
  </div>
</template>

<script>
   import NavBar from "common/NavBar/NavBar";
   import scroll from "common/scroll/scroll";
   import cartBottomBar from "./childCom/cartBottomBar";

   import cartList from "./childCom/cartList";

  export default{
    name:'Cart',
      components:{
        NavBar,
        scroll,
          cartList,
          cartBottomBar
      },
      computed:{
        cartNum(){
            return this.$store.state.cartList.length
        }
      },
      activated() {
        this.$refs.cartScroll.refresh()
      }
  }
</script>

<style scoped>
  .cart{
    overflow: hidden;
    height: 100vh;
  }

  .cart-nav{
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
  }

  .cartScroll{
    height: calc(100% - 44px - 49px - 40px);
  }
</style>
