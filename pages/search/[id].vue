<template>
  <TopSide :status="status" />
  <PhotoGrid :photos="(photos as PhotoDetails[]) ?? []" :status="status" :perPage="query.per_page" />
</template>

<script setup lang="ts">
const route = useRoute()
// useHead({
//   title: 'Search Results for ' + route.params.id,
//   meta: [
//   { property: 'og:title', content:  'Search Results for ' + route.params.id, },
//   { property: 'og:description', content: 'A photo library viewing and sharing photos' },
//   ],
// })

useHead({
  title: 'Search Results for ' + route.params.id,
  meta: [
    {
      name: 'description',
      content: 'This is the search results page description.',
    },
    {
      property: 'og:title', 
      content: 'Search Results for ' + route.params.id
    },
  ],
})
import type { ResponseFromApi, PhotoDetails } from '~/types'
import { useQueryParamsForPhotos } from '~/composables/photo-query-params';

const { query } = useQueryParamsForPhotos()

const emit = defineEmits(['onStatusChange'])
const config = useRuntimeConfig()

const { data: photos, status } = await useAsyncData(`photos_${route.params.id}`, async () => {
  const headers = {
    Authorization: `Client-ID ${config.public.ACCESS_TOKEN}`,
  }

  return await $fetch<{ results?: ResponseFromApi[] }>(`${config.public.apiBaseUrl}/search/photos?query=${route.params.id}`, {
    headers,
    query,
  })
}, {
  server: false,
  transform: (response) => {
    return response?.results?.length ? response?.results?.map((photo: ResponseFromApi) => ({
      id: photo.id,
      name: photo.user.name,
      location: photo.user.location,
      urls: photo.urls,
      height: photo.height,
      width: photo.width
    })) : [];
  },
})


watch(status, (val) => {
  emit('onStatusChange', val)
}, {
  immediate: true,
})

</script>