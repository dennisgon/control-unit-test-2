<template>
  <div id="app">
  	<app-header></app-header>
  	<div class="container">
  		<router-view></router-view>	
  	</div>
  </div>
</template>

<script>
import Header from './Components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	'app-header':Header
  }
}
</script>

<style>

</style>
