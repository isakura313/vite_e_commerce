import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  getCart(state:State):[];
  productCount(state:State):number;
  finulSum(state: State):number
}

export const getters: GetterTree<State, State> & Getters = {
  getCart(state) {
    return state.cart
  },
  productCount(state){
    return state.cart.length
  },
  finalSum(state){
    const cartPrices = state.cart.map((product)=>{ return product.price})
    return cartPrices.reduce((a, b):number=>{return a+b})
  }
}
