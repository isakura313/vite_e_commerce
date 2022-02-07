<template>
  <div class="card flex flex-col m-4">
    <span>{{ product.name }}</span>
    <div
      :style="{ backgroundImage: `url(${product.img})` }"
      class="h-64 bg-no-repeat bg-center bg-contain"
    ></div>
    <span
      :class="[productdiscount ? 'bg-red-500 text-white p-2 m-2' : 'p-2 m-2']"
      >{{ productPrice }}</span
    >
    <router-link
      to="/"
      class="hover:text-indigo-700 hover:font-bold font-bold"
      >{{ productName }}</router-link
    >
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
  import store from "../store";
  interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
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
