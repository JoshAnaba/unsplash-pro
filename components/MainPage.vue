<template>
  <TopSide :status="status" />
  <PhotoGrid :photos="(photos as PhotoDetails[]) ?? []" 
  :status="status" 
  :perPage="query.per_page" 
  />
</template>

<script setup lang="ts">
import type { PhotoDetails, ResponseFromApi } from '~/types'
import { useQueryParamsForPhotos } from '~/composables/photo-query-params';

const {query} = useQueryParamsForPhotos()

const emit = defineEmits(['onStatusChange'])
const config = useRuntimeConfig()


const { data: photos, status } = await useAsyncData('photos', async () => {
  const headers = {
    Authorization: `Client-ID ${config.public.ACCESS_TOKEN}`,
  }

  return await $fetch<ResponseFromApi[]>(`${config.public.apiBaseUrl}/photos`, {
    headers,
    query,
  })
}, {
  server: false,
  transform: (response) => {
    return response.length ? response.map((photo: ResponseFromApi) => ({
      id: photo.id,
      name: photo.user.name,
      location: photo.user.location,
      urls: photo.urls,
      height: photo.height,
      width: photo.width,
      alt_description: photo.alt_description,
    })) : []

  },
})


watch(status, (val) => {
  emit('onStatusChange', val)
}, {
  immediate: true,
})

</script>