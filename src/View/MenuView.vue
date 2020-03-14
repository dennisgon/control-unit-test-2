<template>
	<div class="row">
		<div class="col-9">
			<h1>{{category}}</h1>
			<grid-menu></grid-menu>
		</div>
		<div class="col-3">
			<checkout></checkout>
		</div>
	</div>
</template>

<script>
	import GridMenu from '../Components/GridMenu.vue'
	import Checkout from '../Components/Checkout.vue'

	export default {
		name: 'MenuView',
		data(){
			return{
				category: this.$route.params.category,
				total:100000
			}
		},
		watch: {
		    '$route.params.category': function (id) {
			  	this.category=this.$route.params.category
			}
		},
		components:{
			'grid-menu': GridMenu,
			'checkout':Checkout
		}
	}
</script>

<style scoped>
   h1{
   		text-align: center;
   }
</style>
