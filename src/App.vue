<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
import {index} from './layout/index'

export default {
  data(){
    return{

    }
  },
  components:{
    index
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}


</style>
