<template>
    <div class="checkButton" :class="{checked:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "checkButton",
        props:{
            isChecked:false
        }
    }
</script>

<style scoped>
  .checkButton{
    border-radius: 50px;
    border: #aaa solid 1px;
  }

  .checkButton img{
    display: block;
    width: 14px;
    height: 14px;
  }

  .checked{
    background-color: #33b5f3;
    border-color: #33b5f3;;
  }

</style>
