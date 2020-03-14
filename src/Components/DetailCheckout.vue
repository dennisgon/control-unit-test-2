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
	</tr> 	
</template>

<script>
	export default {
		name:"checkoutDetail",
		props:['title','price', 'qty']
	}

</script>

<style scoped>
	
</style>
