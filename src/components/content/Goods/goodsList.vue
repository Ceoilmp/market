<template>
    <div class="goodsList">
      <goodsListItem v-for="item in goodsList" :goods-item=item class="item"></goodsListItem>
    </div>
</template>

<script>
    import goodsListItem from "./goodsListItem";

    export default {
        name: "goodsList",
        components:{
            goodsListItem
        },
        props:{
            goodsList:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }


</style>
