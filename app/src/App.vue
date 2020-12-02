<template>
  <div id="app">
    <box></box>
  </div>
</template>

<style lang="scss">
  html,body,#app{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }
</style>

<script>
import box from './components/box.vue';

export default {
  components: { box },
    
}
</script>
