<template>
  <div class="flex flex-column">
    <h1 class="font-lg font-bold">Корзина товаров</h1>
    {{count}}
    <div>
      <CartProduct
        v-for="product in cart"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>


<script setup lang="ts" >
import { useStore, Mutation } from '@/store/index'

  import CartProduct from "../components/CartProduct.vue";
  import { ref, onMounted } from "vue";
  const store = useStore()
  const cart = ref([])
  cart.value = store.state.cart
</script>
