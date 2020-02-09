<template>
    <div class="base-info">
      <div class="info-title">{{goodsTitle}}</div>
      <div  class="info">
        <div class="info-price">
          <span class="n-price">{{goodsPrice.now_price}}</span>
          <span class="o-price">{{goodsPrice.org_price}}</span>
        </div>

        <div class="info-other">
          <img src="~assets/img/common/star.png" alt="">
          <span>{{stars}}</span>
        </div>
      </div>


      <div class="info-service">
        <span v-for="item in service" class="info-service-item">
          <img src="~assets/img/common/service.png" alt="">
          <span>{{item}}</span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailBaseInfo",
        props:{
            goodsTitle:'',
            goodsPrice:{
                type:Object,
                default:{}
            },
            stars:0,
            service:{
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info{
    display: flex;
    justify-content: space-between;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    font-size: 14px;
    margin-top: 12px;
  }

  .info-other img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }

</style>
