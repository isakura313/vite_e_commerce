<template>
  <div class="flex flex-column justify-center">
    <h1 class="text-lg font-bold">Корзина товаров</h1>
  </div>
  <div class="flex flex-column">
    {{count}}
    <div>
      <CartProduct
        v-for="product in store.state.cart"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>


<script setup lang="ts" >
import { useStore, Mutation } from '@/store/index'

  import CartProduct from "../components/CartProduct.vue";
  import { reactive, onMounted } from "vue";
  const store = useStore()
</script>
