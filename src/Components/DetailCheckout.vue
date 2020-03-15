<template>
	<tr>
		<td data-th="Product">
			{{title}}
		</td>
		<td data-th="Price">
		{{price}}
		</td>
		<td data-th="qty">
		{{qty}}
		</td>
		<td data-th="total">
		{{qty * price}}
		</td>
		<td data-th="action">
			<button type="button" @click="deleteData(idData)"  class="btn btn-danger">delete</button>
		</td>
	</tr> 	
</template>

<script>
	export default {
		name:"checkoutDetail",
		props:['title','price', 'qty','idData'],
		methods:{
			deleteData(id){

				for (var i = 0; i < this.$store.state.cart.length; i++) {
					if(this.$store.state.cart[i].id == id){
						this.$store.state.cart.splice(i,1);
						break;
					}
				}
			}
		}
	}

</script>

<style scoped>
	
</style>
