<template>
  <div class="h-12 flex items-center">
    <button @click="IncrementCart(product)">
      <Plus class="text-red icon font-lg"/>
    </button>
    <span>{{ countOfChoosen }} шт</span>
    <button @click="DecrementCart(product.id)">
      <Minus class="text-red icon font-lg"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref, onMounted, reactive, watch} from "vue";
// import {useStore} from "@/store/index";
import { useCart } from '@/stores/cart'
import {Product} from "../types";
import type {Ref} from 'vue';
import Plus from "vue-material-design-icons/Plus.vue";
import Minus from "vue-material-design-icons/Minus.vue";

const cartStore = useCart();
const cart:[] = reactive(cartStore)
const props = defineProps(['product']);
const countOfChoosen: Ref<number> = ref(0)

onMounted(() => {
  const result = cart.filter(
      (el:Product) => el.id === props.product.id,
  );
  countOfChoosen.value = result[0].count
})

function IncrementCart(product:Product):void {
  // TODO  расширить  keyOfTypes
  store.commit("INCREMENTCART", product)
}

function DecrementCart(id:number):void {
  store.commit("DECREMENTCART", id)
}

watch(cart, () => {
  const result = cart.filter(
      (el: Product) => el.id === props.product.id,
  );
  countOfChoosen.value = result[0].count
})
</script>


<style scoped>
.icon:hover {
  color: red;
  cursor: pointer;
}
</style>
