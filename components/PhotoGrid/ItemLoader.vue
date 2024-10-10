<template>
  <div :class="['photo-grid-item loader', getGridItemClass(index)]">
    <div class="text">
      <div />
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeightClass } from '~/composables/height-class'

const { index } = defineProps<{
  index: number
}>()

const getGridItemClass = (index: number) => useHeightClass(index).value

</script>

<style scoped>
.loader {
  --base-height: 200px;

  &.height-2 {
    height: var(--base-height);
  }

  &.height-3 {
    height: calc(var(--base-height) * 1.5);
  }

  &.height-4 {
    height: calc(var(--base-height) * 2);
  }

  &.height-5 {
    height: calc(var(--base-height) * 2.5);
  }
}

</style>
