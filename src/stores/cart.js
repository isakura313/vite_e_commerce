import {defineStore} from 'pinia';


export const useCart = defineStore('cart',{
    state:()=>{
        return {cart: []}
    },actions:{
        increment(payload){
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === payload.id) {
                    this.state.cart[i].count++
                }
            }
        }, decrement(){
            this.cart--
        }
    }
})