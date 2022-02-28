<template>
<div class="flex items-end border-2 p-2 m-2">
    <div class="flex h-4/5 w-3/5 mb-4 content-center">
      <div
        :style="{ backgroundImage: `url(${product.img})` }"
        class="h-64 w-64 bg-no-repeat bg-center bg-contain"
      ></div>
      <div class="flex flex-col justify-center h-58">
      <div>цена</div>
      <div v-if="product.discount">
        <span
          :class="[
            product.discount ? 'text-red-500 font-bold mt-2 mb-2' : 'p-2 m-2',
          ]"
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

    </div>
    <button
      v-if="!chooseProduct"
      class="bg-indigo-500 hover:bg-red-500 text-white h-12 w-24 rounded-md"
      @click="deleteFromCard(product.id)"
    >
    удалить
    </button>
    </div>
</template>

<script lang='ts'>
  import { PropType, defineComponent } from "vue";
  import { store } from "../store";
  import IncrementProduct from "./IncrementProduct.vue";

  interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    oldprice: number;
    discount: boolean;
  }
  export default defineComponent({
    data() {
      return {
        chooseProduct: false,
      };
    },
    components: {
      IncrementProduct,
    },
    props: {
      product: {
        type: Object as PropType<Product>,
      },
    },
    methods: {
      deleteFromCard(id:number): void {
        store.commit("DECREMENTCART", id);
      },
    },
    computed: {
      inStore() {
        const cart = store.getters.getCart;
        const result = cart.filter(
          (el: Product) => el.id === this.$props.product.id
        );
        return result;
      },
    },
  });
</script>
