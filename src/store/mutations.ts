import { MutationTree } from 'vuex'
import { State } from './state'

export enum Mutation {
  INCREMENTCART = 'INCREMENTCART',
}

export type Mutations<S = State> = {
  [Mutation.INCREMENTCART](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.INCREMENTCART](state: State, payload = 1) {
    state.cartCount += payload
  },
}
