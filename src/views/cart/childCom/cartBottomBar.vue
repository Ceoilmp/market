<template>
  <div class="bottom-menu">
    <checkButton class="select-all" :is-checked="isSelectAll" @click.native="checkBtnClick"></checkButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算(({{checkLength}})</span>
  </div>
</template>

<script>
  import checkButton from "./checkButton";
    export default {
        name: "cartBottomBar",
        components:{
            checkButton
        },
        computed: {
            totalPrice() {
                const cartList = this.$store.state.cartList;
                return cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.count * item.price
                }, 0).toFixed(2)
            },
            isSelectAll: function () {
                if(this.$store.state.cartList.length === 0)
                    return false
                return this.$store.state.cartList.find(item => item.checked === false) === undefined;
            },
            checkLength(){
                return this.$store.state.cartList.filter(item => item.checked).length
            }
        },
        methods:{
            checkBtnClick: function () {
                // 1.判断是否有未选中的按钮
                let isSelectAll = this.$store.state.cartList.find(item => !item.checked);

                // 2.有未选中的内容, 则全部选中
                if (isSelectAll) {
                    this.$store.state.cartList.forEach(item => {
                        item.checked = true;
                    });
                } else {
                    this.$store.state.cartList.forEach(item => {
                        item.checked = false;
                    });
                }
            }
        },
        created() {
            this.isAllChecked = this.$store.getters.isAllChecked
        }
    }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: #33b5f3;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }

</style>
