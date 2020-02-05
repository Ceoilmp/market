<template>
  <div id="home">
    <NavBar class="home-nav">
      <p slot="center">购物街</p>
    </NavBar>

    <tabControl :tabItem="['流行','新款','精选']"
                class="tabControl" @tabClick = "tabClick"
                ref="tabControl1"  v-show="isTabControlFixed"/>

    <scroll class = "content" ref="scroll"
            :probeType = "3" @contentScroll = "contentScroll"
            :pullUpLoad = "true" @pullingUp = "LoadMore">
      <swiperBanner :banner="banners" @swiperImageLoad = "swiperImageLoad"></swiperBanner>
      <recommendView :recommend="recommends"></recommendView>
      <featureView></featureView>

      <tabControl :tabItem="['流行','新款','精选']"
                  class="tabControl" @tabClick = "tabClick"
                  ref="tabControl2" />


      <goodsList :goodsList = goodsList></goodsList>
    </scroll>

    <backTop @click.native="backTop" v-if="isShowBackTop"></backTop>

<!--    <div class="content"></div>-->
  </div>
</template>

<script>
  import NavBar from "common/NavBar/NavBar";
  import tabControl from "content/tabControl/tabControl";
  import goodsList from "content/Goods/goodsList";
  import scroll from "common/scroll/scroll";
  import backTop from "common/backTop/backTop";

  import swiperBanner from "./childCom/swiperBanner";
  import recommendView from "./childCom/recommendView";
  import featureView from "./childCom/featureView";


  import {getHomeMultidata} from "network/home";

  import {getGoods} from "../../common/fun";
  import {debounce} from "../../common/utiles";

  export default{
    name:'Home',
      components:{
        NavBar,
        tabControl,
        goodsList,
        scroll,
        backTop,

        swiperBanner,
        recommendView,
        featureView
      },
      data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            isShowBackTop:false,

            tabOffsetTop:0,
            isTabControlFixed:false,
            saveY:0
        }
      },
      created() {
        this.getHomeMultidata()

        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')


      },
      mounted(){
         const refresh = debounce(this.$refs.scroll.refresh,50)

          this.$bus.$on('itemImageLoad',() => {
              refresh()
          })
      },
      computed:{
        goodsList(){
            return this.goods[this.currentType].list
        }
      },
      activated(){
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
      },
      deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()
      },
      methods:{
        swiperImageLoad(){
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            // console.log(this.$refs.tabControl.$el.offsetTop);
        },

        tabClick(index){
            // console.log(index);
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }

            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index

            if(this.isTabControlFixed){
                this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,0)
            }

        },

        backTop(){
            this.$refs.scroll.scrollTo(0,0,800)
        },

        contentScroll(position){
            if(position.y<-1000){
                this.isShowBackTop = true
            }
            else{
                this.isShowBackTop = false
            }

            if(position.y<-this.tabOffsetTop){
                this.isTabControlFixed = true
            }
            else{
                this.isTabControlFixed = false
            }
        },

        LoadMore(){
            this.getHomeGoods(this.currentType)

            this.$refs.scroll.finishPullUp()
        },


        getHomeMultidata(){
            getHomeMultidata().then(res => {
                // console.log(res);
                this.banners=res.data.banner.list
                this.recommends=res.data.recommend.list
            })
        },

        getHomeGoods(type){
            const page=this.goods[type].page;

            let res = getGoods(type,page)
            this.goods[type].list.push(...res)
            this.goods[type].page += 1;

            // console.log(this.goods[type].list);

        }
      }
  }
</script>

<style scoped>
  #home{
    /*margin: 44px 0 49px;*/
    position: relative;
    height: 100vh;
  }

  .home-nav{
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
  }

  .tabControl{
    position: relative;
    /*top: 44px;*/
    /*right: 0;*/
    /*left: 0;*/
    background-color: #fff;
    z-index: 9;
    padding-bottom: 46px;
    border-top: #fff solid 2px;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
