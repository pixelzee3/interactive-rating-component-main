<script setup>
const props = defineProps({
  centered: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <h1 class="text-lg md:text-xl font-bold text-white" :class="{ 'text-center': centered }">
    <slot />
  </h1>
</template>
