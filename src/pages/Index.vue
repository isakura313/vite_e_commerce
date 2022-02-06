<template>
  <div>
    <h1>Главная страница</h1>
    <CardMain productName="Товар" :productPrice="200" discount="true" />
  </div>
</template>

<script setup lang="ts">
  import CardMain from "@/components/CardMain.vue";
  // import HelloWorld from '@/components/HelloWorld.vue'
  // import BaseTemplate from '@/components/BaseTemplate.vue'
</script>
