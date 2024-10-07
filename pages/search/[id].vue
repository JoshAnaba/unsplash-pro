<template>
  <TopSide :status="status" />
  <PhotoGrid :photos="(photos as PhotoDetails[])" :status="status" :perPage="query.per_page" />
</template>

<script setup lang="ts">
import { useQueryParams } from '~/composables/photo-query-params'
import type { ResponseFromApi, PhotoDetails } from '~/types';
const config = useRuntimeConfig()
const emit = defineEmits(['onStatusChange'])

const route = useRoute()
const { query } = useQueryParams()

const { data: photos, status } = await useAsyncData(`photos_${route.params.id}`, async () => {
  const headers = {
    Authorization: `Client-ID ${config.public.ACCESS_TOKEN}`,
  }

  return await $fetch<{ results?: ResponseFromApi[] }>(`${config.public.apiBaseUrl}/search/photos?query=${route.params.id}`, {
    headers,
    query,
  })
}, {
  server: true,
  transform: (photos) => {
    return photos?.results?.map((photo: ResponseFromApi) => ({
      id: photo.id,
      name: photo.user.name,
      location: photo.user.location,
      urls: photo.urls,
      height: photo.height,
      width: photo.width
    }));
  },
})

watch(status, (val) => {
  emit('onStatusChange', val)
}, {
  immediate: true,
})

</script>