<template>
  <div class="flex flex-col items-center"  style="min-height: 88vh">
    <div class="wrapper w-128" v-if="likes.length">
      <h1 class="text-2xl font-bold">Избранное </h1>
      <div class="flex flex-col">
<!--        <CartProduct-->
<!--            v-for="product in likes"-->
<!--            :key="product.id"-->
<!--            :product="product"-->
<!--        />-->
      </div>
      <div class="p-4 flex flex-col" >
        <button class="bg-green-500 p-2 rounded-md  text-white"> Перейти к оформлению </button>
        <span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
<!--        <div><span>Итоговая сумма</span> <span class="font-bold"> {{count}}</span></div>-->
      </div>
<!--      <h5 class="font-xl">  Итоговая сумма <span class="font-bold"> {{ finalSum }} </span> </h5>-->
    </div>
    <div class="wrapper w-128 " v-else>
      <h1 class="text-2xl font-bold">Здесь ничего нет! Отправляйтесь за покупками</h1>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useStore } from '@/stores/likes'
import {storeToRefs} from 'pinia';
import {computed, onMounted, watch, ref} from "vue";
const store = useStore();
const likes = storeToRefs(store.likes)


</script>
