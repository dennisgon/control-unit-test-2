<template>
	<div class="row">
		<menu-list v-for="data in this.datas" :title="data.title" @click.native="addToCart(data)" id-data="1" :description="data.desc" :image="data.image" :price="data.price"></menu-list>
	</div>

 	
 </template>

<script>
import MenuList from './MenuList'
export default {
	name:"GridMenu",
	data(){
		return{
			'datas':[],
			'title':'',
			'id':0,
			'desc':'',
			'image':'',
			'price':0
		}
	},
	components:{
		'menu-list': MenuList
	},
	methods: {
		addToCart(data){
			console.log(data);
			let testing = {
				"id":data.id,
				"price": data.price,
				"title":data.title,
				"qty": 1
			}
			this.$store.state.cart.push(testing);
		}
	},
	watch: {
	    '$route.params.category': function (id) {
	    	if(this.$store.state.category == "all"){
	    		const baseURI = 'http://localhost:3000/menus'
	    		this.$http.get(baseURI)
	    		.then((result) => {
	    			this.datas = result.data
	    	    })
	    	}else{
	    		const baseURI = 'http://localhost:3000/menus?category='+this.$store.state.category
	    		this.$http.get(baseURI)
	    		.then((result) => {
	    			this.datas = result.data
	    	    })
	    	}
	    	
		}
	},
	mounted:function(){
		console.log(this.$route.params.category);
		if(this.$route.params.category == "all"){
			const baseURI = 'http://localhost:3000/menus'
			this.$http.get(baseURI)
			.then((result) => {
				this.datas = result.data
			})
		}
	}
}
</script>

<style scoped>
	
</style>
