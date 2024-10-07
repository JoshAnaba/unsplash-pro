<template>
  <TopSide :is-loading="isLoading" />
  <PhotoGrid @on-is-loading="isLoading = $event" />
</template>

<script setup lang="ts">
const route = useRoute()
const isLoading = ref(true)
useHead({
  title: `Searching for ${route.params.id}... | Photo Library by Jon Doe`,
  meta: [
    { name: 'description', content: `Search results for ${route.params.id}` },
    { name: 'keywords', content: 'joshanaba, photo sharing, photo library, photos, photo' },
  ],
})
</script>