<template>
  <div class="flex">
    <Plus  class="text-red icon font-lg" />
    <span>1 шт</span>
    <Minus class="icon" />
  </div>
</template>

<script setup lang="ts">
  import Plus from "vue-material-design-icons/Plus.vue";
  import Minus from "vue-material-design-icons/Minus.vue";
</script>


<style scoped>
.icon:hover{
    color: red;
    cursor: pointer;
}
</style>