<template>
  <header class="flex justify-center   pt-4 pb-4 text-xl border-solid">
    <nav class="w-9/10 flex space-x-16 items-center" >
      <router-link to="/" class="hover:text-blue-700">Home</router-link>
      <router-link to="/dashboard" class="hover:text-blue-700">Аналитика</router-link>
      <div class="flex">
        <input
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Поиск..."
        />
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <SearchIcon />
        </button>
      </div>
      <router-link to="/cart" class="hover:text-red">
        <CartIcon class="icon" />
      </router-link>
      {{ cartCount }}
      <router-link to="/likes">
        <HeartIcon  class="icon"/>
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
  // import { useStore } from "@/store/index";
  import { useCart } from '@/stores/cart'
  import { computed } from "vue";
  import CartIcon from "vue-material-design-icons/Cart.vue";
  import HeartIcon from "vue-material-design-icons/Heart.vue";
  import SearchIcon from "vue-material-design-icons/Magnify.vue";
  const cart = useCart();
  const cartCount = computed(() => cart);
</script>


<style scoped>
.icon:hover{
  color: red;
}
</style>