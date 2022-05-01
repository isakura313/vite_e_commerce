<template>
  <div class="flex flex-col items-center" style="min-height: 88vh">
    <div class="wrapper w-128" v-if="store.cart">
      <h1 class="text-2xl font-bold">Корзина </h1>
      <div class="flex flex-col">
        <CartProduct
            v-for="product in store.cart"
            :key="product.id"
            :product="product"
        />
      </div>
      <div class="p-4 flex flex-col">
        <button class="bg-green-500 p-2 rounded-md  text-white"> Перейти к оформлению</button>
        <span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
        <!-- <div><span>Итоговая сумма</span> <span class="font-bold"> {{ count }}</span></div> -->
      </div>
        <Vue3autocounter ref='counter' :startAmount='0' :endAmount='store.finalSum' :duration='1' prefix='₽ ' suffix='рублей' separator=',' decimalSeparator='.' :decimals='2' :autoinit='true'/>
    </div>

    <div class="wrapper w-128 " v-else>
      <h1 class="text-2xl font-bold">Здесь ничего нет! Отправляйтесь за покупками</h1>
    </div>


  </div>
</template>


<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter';

// import {useStore, Mutation} from "@/store/index";
// import { CountTo } from 'vue3-count-to';
import {useStore} from '@/stores/cart'
import {storeToRefs} from 'pinia';
import CartProduct from "../components/CartProduct.vue";
import {computed, onMounted, watch, ref} from "vue";

const sum = ref(0)
const store = useStore();
const {cart} = storeToRefs(store.cart);


</script>
