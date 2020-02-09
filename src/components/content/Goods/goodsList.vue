<template>
    <div class="goodsList">
      <goodsListItem v-for="item in goodsList" :image = item.image :title="item.title" :price="item.discountPrice"
                     :fav="item.orginPrice" :type = type :id = "item.id"></goodsListItem>
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
            },
            type:''
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
