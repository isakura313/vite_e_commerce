
import { State } from './state'

export type Getters = {
  getCart(state:State):[];
  productCount(state:State):number;
  finulSum(state: State):number
  uniqProduct(state:State):[]
}

export const getters: GetterTree<State, State> & Getters = {
  getCart(state) {
    return state.cart
  },
  productCount(state){
    if(state.cart.length>0){
    const counts = state.cart.map((item)=>{
      return item.count
    })
    return counts.reduce((sum, current) => sum + current, 0);
  } else {
    return 0
  }
  },
  finalSum(state){
    let count = 0;
    for(let i = 0; i < state.cart.length;i++){
      console.log(count);
      count += state.cart[i].price * state.cart[i].count
    }
    return count
  }
}
