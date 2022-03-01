import { MutationTree } from 'vuex'
import { State } from './state'

export enum Mutation {
  INCREMENTCART = 'INCREMENTCART',
  DECREMENTCART = 'DECREMENTCART'
}

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  oldprice: number;
  discount: boolean;
  count: number
}
export type Mutations<S = State> = {
  [Mutation.INCREMENTCART](state: S, payload: Product): void
  [Mutation.DECREMENTCART](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.INCREMENTCART](state: State, payload:Product) {
    let flag = false;
    for(let i = 0; i < state.cart.length;i++){
      if(state.cart[i].id === payload.id){
        state.cart[i].count++
        flag = true
    }
  }
  if(!flag){
    payload.count = 1;
    state.cart.push(payload);
  }

    if(state.cart.length === 0){
      payload.count = 1;
      state.cart.push(payload)
    }
  },
  [Mutation.DECREMENTCART](state: State, payload:number) {
    state.cart.map((item, index)=>{
      if(item.id === payload){
        if(item.count>1){
          item.count--;
        } else{
          state.cart.splice(index, 1);
        }
      }
    })
  },
}
