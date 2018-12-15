<template>
  <div id="app">
      <Tabble></Tabble>
      <router-view/>
  </div>
</template>

<script>
  import Tabble from '@/components/tabble/Tabble'
 
  export default{
    components:{Tabble}
  }
</script>

<style>
@import '~@/assets/font/iconfont.css';
  *{
    margin:0;
    padding:0;
    list-style:none;
  }
  #app{
    width:100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
</style>
