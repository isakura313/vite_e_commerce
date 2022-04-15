<template>
  <div class="h-12 flex items-center">
    <button @click="IncrementCart(product)">
    <Plus class="text-red icon font-lg"  />
    </button>
    <span>{{ count }} шт</span>
    <button @click="DecrementCart(product.id)">
    <Minus class="text-red icon font-lg" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, ref, onMounted, reactive, watch} from "vue";
  import { useStore } from "@/store/index";
  import Plus from "vue-material-design-icons/Plus.vue";
  import Minus from "vue-material-design-icons/Minus.vue";
  const store = useStore();
  const cart = reactive(store.getters.getCart)
const props = defineProps(['product']);
// console.log(product)
  let count = ref(0)
  onMounted(()=>{
    const result = cart.filter(
        (el) => el.id === props.product.id,
    );
    count.value = result[0].count
  })

  function IncrementCart(product) {
   store.commit("INCREMENTCART", product )
  }
  function DecrementCart(id){
    store.commit("DECREMENTCART", id)
  }
watch(cart, () => {
  const result = cart.filter(
      (el: Product) => el.id === props.product.id,
  );
  count.value = result[0].count
})
</script>


<style scoped>
  .icon:hover {
    color: red;
    cursor: pointer;
  }
</style>
