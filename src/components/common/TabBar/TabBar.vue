<template>
  <div class="TabBar">
     <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'TabBar',
  }
</script>

<style scoped>
  .TabBar{
    display: flex;
    background-color: #fafafa;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    align-items: center;

    box-shadow: 0px -5px 5px rgba(0,0,0,0.05);

  }


</style>
