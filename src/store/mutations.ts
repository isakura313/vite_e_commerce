import {MutationTree} from 'vuex'
import {State} from './state'

export enum Mutation {
    INCREMENTCART = 'INCREMENTCART',
    DECREMENTCART = 'DECREMENTCART',
    DELETEPRODUCT = 'DELETEPRODUCT',
    SETCOUNT = 'SETCOUNT'
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
    [Mutation.SETCOUNT](state: S, payload: {}): void
    [Mutation.DECREMENTCART](state: S, payload: number): void
    [Mutation.DELETEPRODUCT](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
    [Mutation.INCREMENTCART](state: State, payload: Product) {
        let flag = false;
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].id === payload.id) {
                state.cart[i].count++
                flag = true
            }
        }
        if (!flag) {
            payload.count = 1;
            state.cart.push(payload);
        }

        if (state.cart.length === 0) {
            payload.count = 1;
            state.cart.push(payload)
        }
    },
    [Mutation.DECREMENTCART](state: State, payload: number) {
        state.cart.map((item, index) => {
            if (item.id === payload) {
                if (item.count > 1) {
                    item.count--;
                } else {
                    state.cart.splice(index, 1);
                }
            }
        })
    },
    [Mutation.DELETEPRODUCT](state: State, payload: number) {
        console.warn("delete")
        console.log(payload)
        console.log(state.cart)
        state.cart.map((product: Product, index) => {
            if (product.id === payload) {
                return state.cart.splice(index, 1);
            }
        })
        // const result = words.filter(word => word.length > 6);
        console.log(state.cart)
    },
    [Mutation.SETCOUNT](state: State, payload: { } ) {
        console.warn("UPDATE")
        let {id, count} = payload;
        console.log(payload)
        console.log(state.cart)
        state.cart.map((product: Product, index) => {
            if (product.id === id) {
                product.count = count
            }
        })
        // const result = words.filter(word => word.length > 6);
        console.log(state.cart)
    },
}
