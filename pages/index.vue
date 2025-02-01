<template>
  <MainPage />
</template>

<script setup>
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
    {
      property: 'og:description',
      content: 'This is the home page description.',
    },
    {
      property: 'twitter:title',
      content: 'Home Page',
    },
    {
      property: 'twitter:description',
      content: 'This is the home page description.',
    },
  ],
})
</script>
