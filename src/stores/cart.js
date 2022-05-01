import {defineStore} from 'pinia';


export const useStore = defineStore('shop', {
    state: () => {
        return {cart: []}
    },
    getters: {
        getCart(state) {
            return state.cart
        },
        productCount(state) {
            if (state.cart.length > 0) {
                const counts = state.cart.map((item) => {
                    return item.count
                })
                return counts.reduce((sum, current) => sum + current, 0);
            } else {
                return 0
            }
        },
        finalSum(state) {
            let count = 0;
            for (let i = 0; i < state.cart.length; i++) {
                console.log(count);
                count += state.cart[i].price * state.cart[i].count
            }
            return count
        },
    }, actions: {
        setCount(payload) {
            this.cart.map((item) => {
                if (item.id === payload.id) {
                    item.count = payload.count;
                }
            })
        },
        deleteItem(payload) {
            console.log(payload)
            this.cart = this.cart.filter((item) => {
                return item.id !== payload
            })
        },
        increment(payload) {
            let flag = false;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === payload.id) {
                    this.cart[i].count++
                    flag = true
                }
            }
            if (!flag) {
                payload.count = 1;
                this.cart.push(payload);
            }

            if (this.cart.length === 0) {
                payload.count = 1;
                this.cart.push(payload)
            }
        }, decrement(payload) {
            this.cart.map((item, index) => {
                if (item.id === payload) {
                    if (item.count === 1) {
                        return null
                    }
                    if (item.count > 1) {
                        item.count--;
                    } else {
                        this.cart.splice(index, 1);
                    }
                }
            })
        },
    },
})