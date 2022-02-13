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
}
export type Mutations<S = State> = {
  [Mutation.INCREMENTCART](state: S, payload: Product): void
  [Mutation.DECREMENTCART](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.INCREMENTCART](state: State, payload:Product) {
    state.cart.push(payload);
  },
  [Mutation.DECREMENTCART](state: State, payload:number) {
    // state.cart.push(payload);
    state.cart = state.cart.filter((item:Product)=>item.id !== payload)
  },
}
