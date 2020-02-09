import {debounce} from "./utiles";

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    let newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () => {
      newRefresh()
    }

    this.$bus.$on('itemImgLoad',this.itemImgListener)
  }
}

import backTop from "common/backTop/backTop";

export const backTopMixin = {
  data() {
    return {
      isShowBackTop:false
    }
  },
  components:{
    backTop
  },
  method:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,800)
    }
  }
}
