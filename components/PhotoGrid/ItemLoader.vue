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

import { ref } from 'vue';
const {index} = defineProps({
  index: {
    type: Number,
    required: true
  },
})

// If you need to use it multiple times
const getGridItemClass = (index: number) => useGridItemClass(index).value

</script>

<style scoped>

</style>
