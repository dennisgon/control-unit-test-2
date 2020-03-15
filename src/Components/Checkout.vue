<template>
	<div>
		<h1>Checkout</h1>
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:30%">Product</th>
					<th style="width:10%">Price</th>
					<th style="width:8%">Quantity</th>
					<th style="width:22%" class="text-center">Subtotal</th>
					<th style="width:20%" class="text-center">Action</th>
					<th style="width:10%"></th>
				</tr>
			</thead>
			<tbody>
				<detail-checkout v-for="cart in getCart" :idData="cart.id" :title="cart.title" :price="cart.price" :qty="cart.qty" ></detail-checkout>
			</tbody>
		</table>
		<h2>Total:</h2>
		<h2>Rp. {{getTotal}}</h2>
		<button class="btn btn-primary btn-block" @click="payment">Pay</button>
	</div>
 	
</template>

<script>
	import {mapGetters} from 'vuex'
	import DetailCheckout from './DetailCheckout'
	export default {
		name:"checkout",
		data(){
			return{
				'total':0
			}
		},
		computed:mapGetters(['getCart', 'getTotal']),
		methods:{
			payment(){
				this.$store.state.cart = []
			}
		},
		components:{
			'detail-checkout':DetailCheckout
		}
	}

</script>

<style scoped>
	
</style>
