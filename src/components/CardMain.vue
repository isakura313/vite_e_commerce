<template>
<div class="card flex flex-col m-4">
    <div :style="{backgroundImage:`url(${productImg})`}"  class="h-64 bg-no-repeat bg-center bg-contain"> </div>
    <span :class="[discount? 'bg-red-500 text-white p-2 m-2': 'p-2 m-2']">{{productPrice}}</span>
    <router-link to="/" class="hover:text-indigo-700 hover:font-bold font-bold">{{productName}}</router-link>
</div>
</template>


<script setup lang='ts'>
const props = defineProps({
    productName:String,
    productImg:String,
    productPrice: Number,
    discount: Boolean
})

</script>
