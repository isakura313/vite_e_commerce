<template>
  <Loader v-if="!loader"/>
  <div class="justify-center flex flex-col items-center mb-24 mt-8" v-else>
    <h1 class="font-sans text-lg font-bold justify-center flex  mb-8">Главная страница</h1>
    <div v-if="loader" class="wrapper grid grid-cols-4 gap-16 w-4/6">

    <CardMain
      v-for="product in products"
      :key="product.id"
      :product = "product"
    />
    </div>
  </div>
</template>




<script setup lang="ts">

  import Loader from "@/components/Loader.vue";
  import CardMain from "@/components/CardMain.vue";
  import { ref, onMounted } from "vue";
  import axios from "axios";
  const products = ref({
    id:1,
    discount: true,
    name:'',
    price:0
  });
  const loader = ref(false);
  onMounted(async () => {
    const results = await axios({
      method: "GET",
      url: "http://localhost:5000/products"
    });
    products.value = results.data;
    loader.value = true;
  });
  // import HelloWorld from '@/components/HelloWorld.vue'
  // import BaseTemplate from '@/components/BaseTemplate.vue'
</script>
