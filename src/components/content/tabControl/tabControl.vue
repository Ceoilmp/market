<template>
    <div class="tabControl">
      <div v-for="(item,index) in tabItem" class="item" :class="{active:index === currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabControl",
        props:{
            tabItem:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex=index
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;


  }

  .item{
    flex: 1;
  }

  .item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: var(--color-high-text) solid 4px;
  }
</style>
