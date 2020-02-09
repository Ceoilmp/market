<template>
    <div class = "detail">
      <detailNavBar class="detailNav" @detailNavClick = 'navClick' ref="nav"></detailNavBar>
      <scroll class="content" ref="scroll" :probeType = probeType @contentScroll = 'contentScroll'>
        <detailSwiper :banner="detailData.img"></detailSwiper>
        <detailBaseInfo :goods-title="detailData.name" :goods-price="detailData.price" :service="detailData.service" :stars="detailData.star" />
        <detailDescrip :description="detailData.description" :img = "detailData.img" @imgLoad = 'imgLoad' ref="detailDescrip"></detailDescrip>
        <detailComments :comments = detailData.comments ref="detailComments"></detailComments>
        <detailRecommends :detail-recommend-list="detailData.recommends" ref="detailRecommends"></detailRecommends>
      </scroll>
      <backTop @click.native="backTop" v-if="isShowBackTop"></backTop>
      <detailTabBar @addCart = 'addToCart'></detailTabBar>
    </div>
</template>

<script>
  import {getDetailGoods} from "../../common/fun";

  import scroll from "common/scroll/scroll";
  import backTop from "common/backTop/backTop";

  import detailNavBar from "./childCom/detailNavBar";
  import detailSwiper from "./childCom/detailSwiper";
  import detailBaseInfo from "./childCom/detailBaseInfo";
  import detailDescrip from "./childCom/detailDescrip";
  import detailComments from "./childCom/detailComments";
  import detailRecommends from "./childCom/detailRecommends";
  import detailTabBar from "./childCom/detailTabBar";

  import {itemListenerMixin} from "../../common/mixin";
  import {debounce} from "../../common/utiles";

  export default {
        name: "Detail",
        components:{
            detailNavBar,
            detailSwiper,
            detailBaseInfo,
            detailDescrip,
            detailComments,
            detailRecommends,
            detailTabBar,
            scroll,
            backTop
        },
        mixins:[itemListenerMixin],
        data(){
          return{
              itemType:'',
              itemId:'',
              detailData:{
                  type:Object,
                  default:{}
              },
              themeOffsetTops:{
                  type: Array,
                  default: []
              },
              getThemeTop:null,
              probeType:3,
              currentIndex:0,
              isShowBackTop:false
          }
        },
        created() {
            // console.log(this.$route.query);
            this.itemType = this.$route.query.type
            this.itemId = this.$route.query.id

            this.getDetailGoodes()

            this.getThemeTop = debounce( () => {
                this.themeOffsetTops = []
                this.themeOffsetTops.push(0)
                this.themeOffsetTops.push(this.$refs.detailDescrip.$el.offsetTop-65)
                this.themeOffsetTops.push(this.$refs.detailComments.$el.offsetTop-65)
                this.themeOffsetTops.push(this.$refs.detailRecommends.$el.offsetTop-65)
                // console.log(this.themeOffsetTops[1]);
                // console.log(this.themeOffsetTops[2]);
                // console.log(this.themeOffsetTops[3]);
            },500)
        },
        methods:{
            getDetailGoodes(){
                this.detailData = getDetailGoods(this.itemType,this.itemId)
                // console.log(this.itemId);
                // console.log(this.detailData);
            },
            imgLoad(){
                // console.log('===');
                this.$refs.scroll.refresh()
                this.getThemeTop()
            },

            navClick(index){
                console.log(index);
                this.$refs.scroll.scrollTo(0,-this.themeOffsetTops[index],200)
            },
            contentScroll(position){
                const positionY =  - position.y

                let length = this.themeOffsetTops.length

                for(let i = 0;i<length;i++){
                    if(this.currentIndex !== i && ((i<length-1&&positionY >= this.themeOffsetTops[i]
                        &&positionY<this.themeOffsetTops[i+1]) || (i === length - 1 &&positionY >=
                        this.themeOffsetTops[i]))) {
                        this.currentIndex = i
                        this.$refs.nav.currentIndex = this.currentIndex
                    }
                }

                this.backScrollTop(position)
            },
            backScrollTop(position){
                if(position.y<-1000){
                    this.isShowBackTop = true
                }
                else{
                    this.isShowBackTop = false
                }
            },
            backTop(){
                this.$refs.scroll.scrollTo(0,0,800)
            },
            addToCart(){
                const product = {}
                if(this.detailData.name&& this.detailData.img[0]&&this.detailData.price.now_price
                    &&this.detailData.description[0].mainText){
                    product.type = this.itemType
                    product.id = this.itemId
                    product.title = this.detailData.name
                    product.img = this.detailData.img[0]
                    product.shortdescrip = this.detailData.description[0].mainText
                    product.price = parseFloat(this.detailData.price.now_price.substring(1,6))

                    this.$store.commit('addCart',product)

                    this.$toast.show('成功加入购物车',2000)
                }
                else{
                    this.$toast.show('商品信息不完整，不能加入购物车',2000)
                }



                // console.log(product);
            }
        },
        destroyed() {
            this.$bus.$off('itemImgLoad',this.itemImgListener)
        }
    }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detailNav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }

  .content{
    height: calc(100% - 44px - 49px - 2px);
    overflow: hidden;
  }
</style>
