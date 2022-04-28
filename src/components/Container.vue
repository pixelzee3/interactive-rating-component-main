<script setup>
const props = defineProps({
  clickable: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex aspect-square w-10 items-center justify-center rounded-full bg-dark-blue text-center text-xs text-grey"
    :class="{
      'cursor-pointer': clickable,
      'hover:bg-slate-400': clickable,
      'hover:text-white': clickable,
      'active:bg-primary': clickable,
    }"
  >
    <slot />
  </div>
</template>
