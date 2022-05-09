<template>
  <div>
    <div class="flex justify-center">
      <div v-if="loader" class="grid grid-cols-4 width-1/2 gap-16 pl-16 pr-16">
        <vue-picture-swipe :items="items" class="gallery"></vue-picture-swipe>
        <img :src="productInfo.img" width="400"/>
        <div class="product_info">
          <div v-for="(key,info) in details" >
            <span class="text-grey-600">{{info}}</span> :
            <span>{{key}}</span>
          </div>
        </div>
        <div class="max-w-sm rounded shadow-lg h-64 ">
          <h1 class="font-bold font-9xl">{{ productInfo.name }}</h1>
          <button class="bg-indigo-500 hover:bg-indigo-700 text-white h-12 w-24 rounded-md">Заказать</button>
          <button class="bg-pink-600 hover:bg-pink-700 text-white h-12 w-24 rounded-md">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import VuePictureSwipe from 'vue3-picture-swipe';

// Vue.component('vue-picture-swipe', VuePictureSwipe);
import {useRoute} from 'vue-router'
import axios from 'axios';
import {ref, computed, onMounted} from 'vue'
import {Product} from '../types/';
const details = ref('')

const loader = ref(false);
const route = useRoute()
const items = ref([])
const id = ref(route.params.id)
const productInfo = ref('')
onMounted(async () => {
  const results = await axios({
    method: "GET",
    url: `http://localhost:5000/products/${route.params.id}`,
  });
  productInfo.value = results.data;
  details.value = results.data.details;
  productInfo.value.imgSrc.map((item: string, index: number) => {
    console.log(productInfo.value)
    items.value.push({
      src: item,
      thumbnail: item,
      w: productInfo.value.imgSizes[index].width,
      h: productInfo.value.imgSizes[index].height,
      alt: 'some numbers on a grey background',
    })
  })
  loader.value = true;
})

</script>

<style>
.gallery {
  width: 400px;
}

.gallery img {
  height: 300px;
}

.my-gallery {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 400px;
}

.pswp__top-bar {
  background-color: #2c2d34 !important;
}

.gallery-thumbnail {
  border: 2px solid #fff;
  justify-content: center;

}

.gallery-thumbnail:hover {
  border: 2px solid blue;
}

.pswp__item {
  background-color: white;
}

</style>
