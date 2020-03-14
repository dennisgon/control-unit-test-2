import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		cart: []
	},
	getters:{
		getCart: state=>{
			const sums = [
			  ...state.cart.reduce(
			    (map, item) => {
			      const { id: key, qty } = item;
			      const prev = map.get(key);
			      
			      if(prev) {
			        prev.qty += qty
			      } else {
			        map.set(key, Object.assign({}, item))
			      }
			      
			      return map
			    },
			    new Map()
			  ).values()
			]

			return sums;
		},
		getTotal: state=>{
			let total = 0;
			for (var i = state.cart.length - 1; i >= 0; i--) {
				total += state.cart[i].price
			}
			return total
		}
	}
})