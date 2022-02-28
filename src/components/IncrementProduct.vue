<template>
  <div class="flex">
    <button @click="IncrementCart(product)">
    <Plus class="text-red icon font-lg"  />
    </button>
    <span>{{ count }} шт</span>
    <button @click="DecrementCart(product.id)">
    <Minus class="text-red icon font-lg" />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  import { useStore } from "@/store/index";
  import Plus from "vue-material-design-icons/Plus.vue";
  import Minus from "vue-material-design-icons/Minus.vue";

  const store = useStore();
  defineProps({
    id: Number,
    product:Object,
    count: Number,
  });
  function IncrementCart(product) {
   store.commit("INCREMENTCART", product )
  }
  function DecrementCart(id){
    store.commit("DECREMENTCART", id)
  }
</script>


<style scoped>
  .icon:hover {
    color: red;
    cursor: pointer;
  }
</style>