<template>
    <div>
      <div v-for="item in cartList">
        <cartListItem :item-info="item"></cartListItem>
      </div>
    </div>
</template>

<script>
  import cartListItem from "./cartListItem";
    export default {
        name: "cartList",
        components:{
            cartListItem
        },
        data(){
            return {
                cartList:{
                    type:Array,
                    default:[]
                }
            }
        },
        created() {
            this.cartList = this.$store.state.cartList
        }
    }
</script>

<style scoped>

</style>
