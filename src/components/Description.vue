<script setup>
const props = defineProps({
  centered: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <p
    class="text-sm text-grey md:text-base"
    :class="{ 'text-center': centered }"
  >
    <slot />
  </p>
</template>
