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
  >
    <slot />
  </div>
</template>
