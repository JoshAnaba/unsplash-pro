<template>
  <TopSide :is-loading="isLoading" />
  <PhotoGrid @on-is-loading="isLoading = $event" />
</template>

<script setup lang="ts">
const isLoading = ref(true)
</script>