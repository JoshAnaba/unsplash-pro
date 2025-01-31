<template>
  <MainPage />
</template>

<script setup lang="ts">
useHead({
  title: 'Photo Library by Jon Doe',
  meta: [
  { property: 'og:title', content: 'Photo Library by Jon Doe' },
    // { property: 'og:type', content: 'website' },
    // { property: 'og:url', content: 'https://photo-library.com' },
    // { property: 'og:image', content: 'https://photo-library.com/logo.png' },
    { property: 'og:description', content: 'A photo library viewing and sharing photos' },
    // { name: 'keywords', content: 'joshanaba, photo sharing, photo library, photos, photo' },
  ],
})
</script>
<!-- TODO: check out for bugs -->