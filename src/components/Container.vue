<script setup>
const props = defineProps({
  clickable: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  value: {
    default: null,
  },
  circle: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="inline-flex items-center justify-center rounded-full bg-dark-blue text-center text-xs text-grey md:text-sm"
    :class="{
      'cursor-pointer': clickable,
      'hover:bg-slate-400': clickable,
      'hover:text-white': clickable,
      'active:bg-primary': clickable,
      'text-grey': !primary,
      'text-primary': primary,
      'p-2 md:px-4': !circle,
      'aspect-square w-10': circle,
    }"
    @click="$emit('clicked', value)"
  >
    <slot />
  </div>
</template>
