import {defineStore} from 'pinia';


export const useStore = defineStore('likes', {
    state: () => {
        return {choosen: []}
    },
    getters: {
        getChoosen(state) {
            return state.choosen
        },
        choosenCount(state) {
            if (state.choosen.length > 0) {
                const counts = state.choosen.map((item) => {
                    return item.count
                })
                return counts.reduce((sum, current) => sum + current, 0);
            } else {
                return 0
            }
        },
    }, actions: {
        deleteItem(payload) {
            console.log(payload)
            this.choosen = this.choosen.filter((item) => {
                return item.id !== payload
            })
        },
    },
})