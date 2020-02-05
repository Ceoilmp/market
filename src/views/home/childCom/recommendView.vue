<template>
    <div class="recommend">
      <div v-for="item in recommend" class="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>

        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recommendView",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 20px 0 10px;
    border-bottom: 6px solid #eee;
    font-size: 14px;
  }

  .item{
    flex: 1;
  }

  .recommend img{

    /*display: block;*/
    width: 70px;
    margin-bottom: 6px;
  }
</style>
