<template>
  <div class="justify-center flex flex-col items-center mb-24 mt-8">
    <h1 class="font-sans text-lg font-bold justify-center flex  mb-8">Главная страница</h1>
    <div class="wrapper grid grid-cols-4 gap-16 w-4/6">
    <CardMain
      v-for="product in products"
      :key="product.id"
      :productName="product.name"
      :productImg="product.img"
      :productPrice="product.price"
      :discount="product.discount"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
  import CardMain from "@/components/CardMain.vue";
  import { ref, onMounted } from "vue";
  import axios from "axios";
  let products = ref([]);
  onMounted(async () => {
    const results = await axios({
      method: "GET",
      url: "http://localhost:5000/products"
    });
    products.value = results.data;
  });
  // import HelloWorld from '@/components/HelloWorld.vue'
  // import BaseTemplate from '@/components/BaseTemplate.vue'
</script>
