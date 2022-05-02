<template>
  <div>
    {{ productInfo.id }}
    <vue-picture-swipe :items="[
    {src: 'http://example.org/xl.jpg',thumbnail: 'http://example.org/sm1.jpg',w: 600,h: 400, title: 'Will be used for caption'},
    {src: 'http://example.org/xxl.jpg',thumbnail: 'http://example.org/sm2.jpg',w: 1200,h: 900}
  ]"></vue-picture-swipe>
  </div>

</template>



<script setup lang="ts">
import VuePictureSwipe from 'vue3-picture-swipe';

// Vue.component('vue-picture-swipe', VuePictureSwipe);
import {useRoute} from 'vue-router'
import axios from 'axios';
import {ref, computed, onMounted} from 'vue'
import {Product} from '../types/';
const route = useRoute()
const id = ref(route.params.id)
const productInfo = ref('')
onMounted(async () => {
  const results = await axios({
    method: "GET",
    url: `http://localhost:5000/products/${route.params.id}`
  });
  productInfo.value = results.data;
  loader.value = true;
})

</script>
