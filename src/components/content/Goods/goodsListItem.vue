<template>
    <div class="goods" @click="itemClick">

        <img v-lazy="image" alt="" @load = "itemImageLoad">
        <div class="goods-info">
          <p>{{title}}</p>
          <span class="price">￥{{price}}</span>
          <span class="collect">{{fav}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "goodsListItem",
        props:{
            type:'',
            image:{
                type:String,
                default:''
            },
            title:{
                type:String,
                default:''
            },
            price:{
                type:String,
                default:''
            },
            fav:{
                type:String,
                default:''
            },
            id:{
                type:String,
                default:''
            }
        },
        methods:{
            itemImageLoad(){
                this.$bus.$emit('itemImageLoad')
            },
            itemClick(){
                this.$router.push({
                    path:'/detail',
                    query:{
                        type:this.type,
                        id:this.id
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .goods {
    padding-bottom: 40px;
    position: relative;
    width : 46%;

    /*padding: 2px;*/
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
