<template>
  <div class="flex h-4/5 w-72 mb-4">
    <div class="flex items-end border-2 p-2 m-2">
      <div class="flex h-4/5 w-3/5 mb-4 content-center">
        <div
          :style="{ backgroundImage: `url(${product.img})` }"
          class="w-64 bg-no-repeat bg-center bg-contain"
        ></div>
        <div class="flex flex-col justify-center h-58">
          <div>цена</div>
          <div v-if="product.discount">
            <span
              :class="[
                product.discount
                  ? 'text-red-500 font-bold mt-2 mb-2'
                  : 'p-2 m-2',
              ]"
              >{{ product.price }} ₽</span
            >
            <span class="line-through ml-4">{{ product.oldprice }} </span>
          </div>
          <span v-else class="font-bold">{{ product.oldprice }} </span>
          <router-link
            to="/"
            class="hover:text-indigo-700 hover:font-bold font-bold"
            >{{ product.name }}</router-link
          >
        </div>
        <span> Количество {{ product.count }}</span>
      </div>
      <button
        v-if="!chooseProduct"
        class="bg-red-700 hover:bg-red-600 text-white h-12 w-24 rounded-md"
        @click="deleteFromCard(product.id)"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useStore } from "@/store/index";

  import { PropType, defineProps, reactive, ref, watch } from "vue";
  import IncrementProduct from "./IncrementProduct.vue";
  const props = defineProps(['product'])
  const store = useStore();
  interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    oldprice: number;
    discount: boolean;
  }
  const chooseProduct = ref(false)

  const  deleteFromCard =(id: number)=> {
    store.commit("DELETEPRODUCT", id);
  }
  const inStore = ref(false)
  const cart = reactive(store.getters.getCart);
  // watch(cart, ()=>{
  //   const result = cart.filter(
  //       (el: Product) => el.id === props.product.id
  //   );
  //   return result;
  // })

</script>
