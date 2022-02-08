<template>
  <div class="card flex flex-col m-4">
    <div class="flex flex-col h-4/5 mb-4">
    <div
      :style="{ backgroundImage: `url(${product.img})` }"
      class="h-64 bg-no-repeat bg-center bg-contain"
    ></div>
    <div   v-if="product.discount">
    <span
      :class="[product.discount ? 'text-red-500 font-bold mt-2 mb-2' : 'p-2 m-2']"
      >{{ product.price }}</span
    >
    <span class="line-through ml-4">{{ product.oldprice }}</span>
    </div>
    <span v-else class="font-bold">{{ product.oldprice }}</span>
    <router-link
      to="/"
      class="hover:text-indigo-700 hover:font-bold font-bold"
      >{{ product.name }}</router-link
    >
    </div>
    <button
      class="bg-indigo-500 hover:bg-red-500 text-white h-12 w-24 rounded-md"
      @click="addToCart(product.id)"
    >
      Купить
    </button>
  </div>
</template>


<script  lang='ts'>
  import { PropType, defineComponent } from "vue";
  import {store} from "../store";
  interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    oldprice: number,
    discount: boolean;
  }
  export default defineComponent({
    props: {
      product: {
        type: Object as PropType<Product>,
      },
    },
    methods: {
      addToCart(id: number): void {
        store.commit("addToCart", id);
      },
    },
  });
</script>
