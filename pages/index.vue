<template>
  <MainPage />
</template>

<script setup lang="ts">
useHead({
  title: 'Photo Library by Jon Doe - Home',
  meta: [
    {
      name: 'description',
      content: 'This is the home page description.',
    },
    {
      property: 'og:title', 
      content: 'Photo Library by Jon Doe - Home' 
    },
  ],
})
</script>