<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <div class="collapse navbar-collapse" id="navbarNav">
	  	<a class="navbar-brand" href="#">
	  	  <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
	  	  Gerai Kompas
	  	</a>
	    <ul class="navbar-nav" v-if="this.$store.state.login">
	    	<router-link to="/menu/all" tag="li" class="nav-link"><a class="nav-link">All</a></router-link>
	    	<router-link to="/menu/paket langganan" tag="li" class="nav-link"><a class="nav-link">Paket Langganan</a></router-link>
	    	<router-link to="/menu/buku" tag="li" class="nav-link"><a class="nav-link">Buku</a></router-link>
	    	<router-link to="/menu/merchandise" tag="li" class="nav-link"><a class="nav-link">Merchandise</a></router-link>

	    </ul>
	  </div>
	</nav>


</template>

<script>
export default {
	name: 'menuList',
 	props:['title', 'description', 'image']
}
</script>

<style>

</style>
