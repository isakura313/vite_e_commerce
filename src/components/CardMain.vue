<template>
  <div class="card flex flex-col m-4">
    <div class="flex flex-col h-4/5 mb-4">
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
        to="/"
        class="hover:text-indigo-700 hover:font-bold font-bold"
        >{{ product.name }}</router-link
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
      :count="product.count"
      :product="product"
    />
  </div>
</template>


<script lang='ts'>
  // import { useStore } from "@/store/index";

  import { PropType, defineComponent, computed } from "vue";
  import { store } from "../store";
  import IncrementProduct from "./IncrementProduct.vue";
  // const cart = computed(() => store.getters.getCart);
  // const store = useStore();
  interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    oldprice: number;
    discount: boolean;
    count?: number;
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
    mounted() {
      store.state.cart.map((item) => {
        if (item.id == this.product.id) {
          this.chooseProduct = true;
        }
      });
    },
    methods: {
      addToCart(product: Product): void {
        this.chooseProduct = true;
        store.commit("INCREMENTCART", product);
      },
    },
    computed: {
      inStore() {
        const cart = store.getters.getCart;
        const result = cart.filter(
          (el: Product) => el.id === this.$props.product.id
        );
        console.log(result);
        if (result.length !== 0) {
          return true;
        } else {
          return false;
        }
      },
    },
  });
</script>
