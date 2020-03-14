<template>
	<div class="row">
		<menu-list title="test" @click.native="addToCart" id-data="1" description="test" image="test" price=10000></menu-list>
		<menu-list title="test" @click.native="addToCart" id-data="2" description="test" image="test" price=10000></menu-list>
		<menu-list title="test" @click.native="addToCart" id-data="3" description="test" image="test" price=10000></menu-list>
		<menu-list title="test" @click.native="addToCart" id-data="4" description="test" image="test" price=10000></menu-list>
		<menu-list title="test" @click.native="addToCart" id-data="5" description="test" image="test" price=10000></menu-list>
		<menu-list title="test" @click.native="addToCart" id-data="6" description="test" image="test" price=10000></menu-list>

	</div>

 	
 </template>

<script>
import MenuList from './MenuList'
export default {
	name:"GridMenu",
	components:{
		'menu-list': MenuList
	},
	methods: {
		addToCart(){
			let testing = {
				"id":1,
				"price": 10000,
				"title":"apa aja",
				"qty": 1
			}
			this.$store.state.cart.push(testing);
		}
	}
}
</script>

<style scoped>
	
</style>
