<template>
    <div class="custom-select w-64" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
        <i class="fa fa-caret-down caret"></i>
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <div
            v-for="(option, i) of options"
            :key="i"
            @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        >
          {{ option }}
        </div>


      </div>

    </div>
</template>


<script setup lang="ts">
import {defineProps, defineEmits, ref, onMounted} from "vue";
const props = defineProps(['options', 'default', 'tabindex'])
const emit = defineEmits(['input'])
const selected = ref(props.default
    ? props.default
    : props.options.length > 0
        ? props.options[0]
        : null,)
const open = ref(false)
onMounted(()=>{
  emit("input", selected.value);
})

</script>


<style scoped>
.caret{
  position: absolute;
  top: 30%;
  right: 5%;
  z-index: 2
}
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

/*.selected{*/
/*  position: absolute;*/
/*  width: 200px*/
/*}*/
.custom-select .selected {
  border-radius: 6px;
  border: 1px solid #666666;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: lightgray;
}

.selectHide {
  display: none;
}
</style>
