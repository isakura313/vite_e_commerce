<template>
  <div>
    {{ productInfo.id }}
    <vue-picture-swipe :items="items" class="gallery"></vue-picture-swipe>
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
const items = ref([])
const id = ref(route.params.id)
const productInfo = ref('')
onMounted(async () => {
  const results = await axios({
    method: "GET",
    url: `http://localhost:5000/products/${route.params.id}`
  });
  productInfo.value = results.data;
  productInfo.value.imgSrc.map((item:string)=>{
    items.value.push({
      src: item,
      thumbnail: item,
      // w: 500,
      h: 500,
      alt: 'some numbers on a grey background'
    })
  })
  // loader.value = true;
})

</script>

<style>
.gallery img{
  height: 200px;
}
.my-gallery{
  display: flex;
}

</style>
