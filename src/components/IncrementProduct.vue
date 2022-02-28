<template>
  <div class="flex">
    <Plus  class="text-red icon font-lg" />
    <span>{{$attrs.count}} шт</span>
    <Minus class="icon" />
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
  import Plus from "vue-material-design-icons/Plus.vue";
  import Minus from "vue-material-design-icons/Minus.vue";
  const props = defineProps({
    count:Number,

  })
</script>


<style scoped>
.icon:hover{
    color: red;
    cursor: pointer;
}
</style>