import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  getCartCount(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
  getCartCount(state) {
    return !state.cartCount
  },
}
