<template>
    <div>
      <div>
        <div>
          <div class="panel">
            <span class="descrip">商品描述</span>
            <div class="mainText">
              {{description[0].mainText}}
            </div>
          </div>

          <div class="panel">
            <span class="descrip">产品参数</span>
            <div class="pan-table">
              <td v-for="item in description[1]">{{item}}</td>
            </div>
          </div>

          <div class="panel" v-if="img.length>0">
            <span class="descrip">穿着效果</span>
            <div class="pan-img" v-for="item in img">
              <img :src="item" alt="" @load="imgLoad">
            </div>
          </div>

          <div class="panel">
            <span class="descrip">尺码对照</span>
            <div class="pan-size">
              <tr class="size-head">
                <td v-for="item in description[2][0].head">{{item}}</td>
              </tr>
              <tbody class="size-body">
              <td v-for="item in description[2][0].body" :style="{width:sizeTableLen+'%'}">{{item}}</td>
              </tbody>
            </div>
          </div>
        </div>

        <div class="content"></div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "detailDescrip",
        props:{
            description:{
                type:Array,
                default:[]
            },
            img:{
                type: Array,
                default: []
            }
        },
        data(){
            return{
                sizeTableLen:0
            }
        },
        created(){
            if(this.description.length>0){
                this.getLenSizeTable()
            }

            // console.log(this.sizeTableLen);
        },
        methods:{
            getLenSizeTable(){
                this.sizeTableLen = 100 / this.description[2][0].head.length
            },
            imgLoad(){
                this.$emit('imgLoad')
            }
        }
    }
</script>

<style scoped>
  .panel{
    margin-top: 15px;
    margin-left: 16px;
    color: #222;
  }

  .descrip{
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 6px;
    border-bottom: #333333 solid 2px;
  }

  .mainText{
    margin-top: 20px;
    font-size: 14px;
  }

  .content{
    height: 500px;
  }

  .pan-table{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 4px 0;

  }

  .pan-table td{
    width: 45%;
    margin-bottom: 6px;
    font-size: 14px;
    border: rgba(0,0,0,0.1) solid 1px;
    text-align: center;
  }

  .pan-img{
    margin-top: 20px;
  }

  .pan-img img{
    display: block;
    width: 90%;
  }

  .pan-size{
    margin-top: 20px;
    font-size: 14px;
  }

  .size-head{
    display: flex;
    justify-content: space-around;
  }

  .size-head td {
    flex: 1;
  }

  .size-body{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    /*text-align: center;*/
  }

  .content{
    margin-top: 20px;
    height: 4px;
    background-color: #dddddd;
  }

</style>
