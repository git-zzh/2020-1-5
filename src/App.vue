<template>
  <div id="app">
  
    <router-view/>
    <FooterGuide v-show="$route.meta.showfooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name:'app',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  height 100%
</style>
