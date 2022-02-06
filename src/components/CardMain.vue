<template>
<div class="card flex">
    <h3>{{productName}}</h3>
    <img :src={productImg} alt="">
    <span :class="[discount? 'bg-red-500 text-white p-2 m-2': 'p-2 m-2']">{{productPrice}}</span>
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
