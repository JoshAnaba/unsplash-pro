<template>
  <div :class="['photo-grid-item loader', getGridItemClass(index)]">
    <div class="text">
      <div />
      <div />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGridItemClass } from '~/composables'

const {index} = defineProps({
  index: {
    type: Number,
    required: true
  },
})

const getGridItemClass = (index: number) => useGridItemClass(index).value

</script>

<style scoped>

</style>
