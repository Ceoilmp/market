<template>
    <div>
      <NavBar>
        <div slot="left" class="back" @click = "backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="center">
          <div v-for="(item,index) in title" class="title" :class="{active:currentIndex==index}" @click="titClick(index)">{{item}}</div>
        </div>
      </NavBar>
    </div>
</template>

<script>
  import NavBar from "common/NavBar/NavBar";

    export default {
        name: "detailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                title:['商品','详情','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            titClick(index){
                this.currentIndex = index
                this.$emit('detailNavClick',index)
            },
            backClick(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
  .center{
    display: flex;
    font-size: 14px;
  }

  .title{
    flex: 1;
  }

  .back{
    margin-top: 6px;
  }

  .active{
    color: var(--color-high-text);
  }
</style>
