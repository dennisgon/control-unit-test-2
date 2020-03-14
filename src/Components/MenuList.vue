<template>
	<div class="col-sm-3 menu">
		<div class="card">
			<img class="card-img-top" v-bind:src="image" alt="Card image cap">
			<div class="card-body">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text">{{ description }}</p>
				<p class="card-text">Harga: {{ price }}</p>
				<a href="#" class="btn btn-primary">Add to Cart</a>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: 'menuList',
 	props:['title', 'description', 'image','price']
}
</script>

<style scoped>
	.menu{
		margin-top:10px;
		margin-left: 10px;
	}
</style>
