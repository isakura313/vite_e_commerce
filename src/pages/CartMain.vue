<template>
  <div class="flex flex-col items-center">
    <div class="wrapper w-128">
    <h1 class="text-2xl font-bold">Корзина товаров</h1>
    <div class="flex flex-col  " >
      <CartProduct
        v-for="product in cart"
        :key="product.id"
        :product="product"
      />
    </div>
  <div class="p-4 flex flex-col">
    <button class="bg-green-500 p-2 rounded-md  text-white"> Перейти к оформлению </button>
    <span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
    <div><span>Итоговая сумма</span> <span class="font-bold"> {{count}}</span></div>
  </div>
  <h5 class="font-xl">  Итоговая сумма <span class="font-bold"> {{ finalSum }} </span> </h5> 
  </div>
  </div>
</template>


<script setup lang="ts" >
  import { useStore, Mutation } from "@/store/index";

  import CartProduct from "../components/CartProduct.vue";
  import { computed, onMounted } from "vue";
  const store = useStore();
  const cart = computed(() => store.getters.getCart);
  const finalSum = computed(() => store.getters.finalSum);
</script>
