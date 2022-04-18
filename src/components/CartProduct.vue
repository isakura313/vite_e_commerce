<template>
  <div class="flex h-64  mb-4 ">
    <div class="flex items-center border-2 p-2 m-2  h-4/5">
      <div class="flex h-4/5 w-auto mb-4 content-center">
        <div
          :style="{ backgroundImage: `url(${product.img})` }"
          class="w-64 bg-no-repeat bg-center bg-contain"
        ></div>
        <div class="flex flex-col w-2/5 justify-around h-auto">
        <router-link
            to="/"
            class="font-14"
        >{{ product.name }}</router-link
        >
          <div class="flex">
        <p
            class="text-indigo-700 hover:text-red-700 hover:cursor-pointer h-12 w-24 rounded-md"
            @click="deleteFromCard(product.id)"
        >
          Удалить
        </p>
          <p
              class="text-red-700 hover:text-red-700 hover:cursor-pointer h-12 w-24 rounded-md"
              @click="deleteFromCard(product.id)"
          >
            в избранное
          </p>
          </div>
        </div>
        <div class="flex flex-col justify-center h-58 w-72">

          <div v-if="product.discount">
            <span
              :class="[
                product.discount
                  ? ' font-bold mt-2 mb-2'
                  : 'p-2 m-2',
              ]"
              >{{ product.price }} ₽</span
            >
            <span class="line-through ml-4">{{ product.oldprice }} </span>
          </div>
          <span v-else class="font-bold">{{ product.oldprice }} </span>

        </div>
        <CustomSelect :options="options"  :default="product.count" @input = "updateCount"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useStore } from "@/store/index";
  import CustomSelect from '@/components/CustomSelect.vue';
  import {PropType, defineProps, reactive, ref, watch, computed} from "vue";
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
  const options = ref([
      1,2,3,4,5
  ])
  const chooseProduct = ref(false)
  const cart = computed(() => store.getters.getCart);

  function updateCount(count){
    store.commit("SETCOUNT", {id:props.product.id, count:count });
  }

  const  deleteFromCard =(id: number)=> {
  }
  const inStore = ref(false)
  // const cart = reactive(store.getters.getCart);
  // watch(cart, ()=>{
  //   const result = cart.filter(
  //       (el: Product) => el.id === props.product.id
  //   );
  //   return result;
  // })

</script>
