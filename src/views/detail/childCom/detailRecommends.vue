<template>
  <div>
    <div class="comment-info">
      <div class="info-header">
        <div class="header-title">商品推荐</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="goodsList" v-if="detailRecommendList.length>0">
      <goodsListItem v-for="item in detailRecommendList" :image = item.img :title="item.name" :price="item.price"
                     :fav="item.fav"></goodsListItem>
    </div>
  </div>

</template>

<script>
    import goodsListItem from "content/Goods/goodsListItem";

    export default {
        name: "detailRecommends",
        components:{
            goodsListItem
        },
        props:{
            detailRecommendList:{
                type:Array,
                default:[]
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

  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
</style>
