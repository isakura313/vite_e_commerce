<template>
  <div class="card flex flex-col m-4 ">
    <div class="flex flex-col h-2/3 mb-4">
      <div
          :style="{ backgroundImage: `url(${product.img})` }"
          class="h-64 bg-no-repeat bg-center bg-contain"
      ></div>
      <div v-if="product.discount">
        <span
            :class="[
            product.discount ? 'text-red-500 font-bold mt-2 mb-2' : 'p-2 m-2',
          ]"
        >{{ product.price }} ₽</span
        >
        <span class="line-through ml-4">{{ product.oldprice }}</span>
      </div>
      <span v-else class="font-bold">{{ product.oldprice }} ₽</span>
      <router-link
          :to="{ name: 'product', params: { id: product.id }}"
          class="hover:text-indigo-700 hover:font-bold font-bold"
      >{{ product.name }}
      </router-link
      >
    </div>
    <button
        v-if="!inStore"
        class="bg-indigo-500 hover:bg-red-500 text-white h-12 w-24 rounded-md"
        @click="addToCart(product)"
    >
      Купить
    </button>
    <IncrementProduct
        v-if="inStore"
        :product="product"
    />
  </div>
</template>


<script lang='ts' setup>
import {PropType, defineComponent, defineProps, ref, reactive, watch, onMounted} from "vue";
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/cart'

import IncrementProduct from "./IncrementProduct.vue";
const props = defineProps(['product'])

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  oldprice: number;
  discount: boolean;
  count?: number;
}
const store = useStore()

const { cart } = storeToRefs(store)
const chooseProduct = ref(false);
const inStore = ref(false);
onMounted( () => {
  const result = cart.value.filter(
      (el: Product) => el.id === props.product.id,
  );
  if (result.length !== 0) {
    inStore.value = true;
  } else {
    inStore.value = false;
  }
});


// store.state.cart.map((item) => {
//   if (item.id === props.product.id) {
//     chooseProduct.value = true;
//   }
// });
function addToCart(product: Product){
  console.log(props.product)
  chooseProduct.value = true;
  store.increment(product)
  // store.commit("INCREMENTCART", product);
}
watch(cart.value, () => {
  const result = cart.value.filter(
      (el: Product) => el.id === props.product.id,
  );
  if (result.length !== 0) {
    inStore.value = true;
  } else {
    inStore.value = false;
  }
})

</script>
