
<template>
<HeaderLayoutVue/>
  <router-view></router-view>
  <FooterLayout />
</template>


<script setup lang="ts">
import HeaderLayoutVue from './layouts/HeaderLayout.vue';
import FooterLayout from './layouts/FooterLayout.vue';

</script>