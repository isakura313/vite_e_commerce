<template>
  <div class="flex flex-col justify-center items-center m-4">
    <h1 class="text-2xl font-bold">Корзина товаров</h1>
    <div class="flex flex-col items-center">
      <CartProduct
        v-for="product in cart"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>


<script setup lang="ts" >
  import { useStore, Mutation } from "@/store/index";

  import CartProduct from "../components/CartProduct.vue";
  import { computed, onMounted } from "vue";
  const store = useStore();
  const cart = computed(() => store.getters.getCart);
</script>
