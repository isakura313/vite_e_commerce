<template>
  <div>
    {{ id }}
  </div>

</template>



<script setup lang="ts">
import {useRoute} from 'vue-router'
import axios from 'axios';
import {ref, computed, onMounted} from 'vue'

const route = useRoute()
const id = ref(route.params.id)
onMounted(async () => {
  const results = await axios({
    method: "GET",
    url: `http://localhost:5000/products${route.params.id}`
  });
  product.value = results.data;
  loader.value = true;
})

</script>