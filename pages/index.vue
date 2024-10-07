<template>
  <MainPage />
</template>

<script setup lang="ts">
useHead({
  title: 'Photo Library by Jon Doe',
  meta: [
    { name: 'description', content: 'A photo library viewing and sharing photos' },
    { name: 'keywords', content: 'joshanaba, photo sharing, photo library, photos, photo' },
  ],
})
</script>

<!-- TODO: Add page transitions -->
<!-- TODO: infinite scroll for pagination -->
<!-- TODO: route query params should match the API query params -->
<!-- TODO: lazy loading where necessary -->
<!-- TODO: check out for bugs -->
<!-- TODO: add download buttons to images; top right corner -->
<!-- TODO: go through the instructions for the last time -->
<!-- TODO:Separate components where neccessary -->
<!-- TODO: hide CLient ID from public repo -->
<!-- TODO: add readme.md, check out requirements and see if any applies to completed test, like ci.yml, Gulp -->