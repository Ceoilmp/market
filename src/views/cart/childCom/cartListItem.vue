<template>
  <div id="shop-item">
    <div class="item-selector">
      <checkButton :is-checked="itemInfo.checked" @click.native = "checkClick"></checkButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.shortdescrip}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price.toFixed(2)}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
      <div>
        <span class="deleteGoods" @click = "deleteGoods">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from "./checkButton";

    export default {
        name: "cartListItem",
        components:{
            checkButton
        },
        props:{
            itemInfo:{}
        },
        methods:{
            checkClick(){
                this.itemInfo.checked = !this.itemInfo.checked
                // console.log(this.$store.state.cartList);
            },
            deleteGoods(){
                let index = this.$store.state.cartList.indexOf(this.itemInfo)
                this.$store.state.cartList.splice(index,1)
            }
        }
    }
</script>

<style scoped>

  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }

  .deleteGoods{
    display: block;
    color: #fff;
    font-size: 12px;
    background-color: #33b5f3;
    width: 40px;
    border-radius: 10px;
    text-align: center;
  }

</style>
