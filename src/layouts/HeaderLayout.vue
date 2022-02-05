<template>
  <header class="flex justify-center bg-blue-700 text-white pt-4 pb-4 text-xl">
    <nav class="w-1/4 flex space-x-16">
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Аналитика</router-link>
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
      <router-link to="/cart">
        <CartIcon />
      </router-link>
      <router-link to="/likes">
        <HeartIcon />
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import CartIcon from "vue-material-design-icons/Cart.vue";
  import HeartIcon from "vue-material-design-icons/heart.vue";
  import SearchIcon from "vue-material-design-icons/Magnify.vue";
</script>
