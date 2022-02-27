import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  getCart(state:State):[];
  productCount(state:State):number;
  uniqProduct(state:State):[]
}

export const getters: GetterTree<State, State> & Getters = {
  getCart(state) {
    return state.cart
  },
  productCount(state){
    return state.cart.length
  },
  uniqProduct(state){
    const cartId = state.cart.map((item:any)=>{
      return item.id
    })
    const uniqIds = new Set(cartId)
    console.log(uniqIds)
    const q =  state.cart.filter((item, index)=>{
      console.log(item.id)
      console.log(...uniqIds[index])
    return item.id === uniqIds[index]
  })
  console.log(q)
  }
}
