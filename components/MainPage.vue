<template>
  <TopSide :status="status" />
  <PhotoGrid :photos="(photos as PhotoDetails[])" 
  :status="status" 
  :perPage="query.per_page" 
  />
</template>

<script setup lang="ts">
import type { PhotoDetails, ResponseFromApi } from '~/types'
const route = useRoute()
const router = useRouter()

const nuxtApp = useNuxtApp()

const query = reactive({
  page: Number(route.query.page) || 1,
  per_page: Number(route.query.per_page) || 12
})

const emit = defineEmits(['onStatusChange'])
const config = useRuntimeConfig()

watch(query, (newQuery) => {
  router.replace({
    query: {
      ...route.query,
      page: newQuery.page,
      per_page: newQuery.per_page
    }
  })
})

watch(route, () => {
  query.page = Number(route.query.page) || 1
  query.per_page = Number(route.query.per_page) || 12
})

const ensureQueryParams = () => {
  if (!route.query.page || !route.query.per_page) {
    router.replace({
      query: {
        ...route.query,
        page: query.page,
        per_page: query.per_page
      }
    })
  }
}

onMounted(() => {
  ensureQueryParams()
})

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
    return response.map((photo: ResponseFromApi) => ({
      id: photo.id,
      name: photo.user.name,
      location: photo.user.location,
      urls: photo.urls,
      height: photo.height,
      width: photo.width,
      alt_description: photo.alt_description,
    }));

  },
  // getCachedData(key) {
  //   return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  // }
})


watch(status, (val) => {
  emit('onStatusChange', val)
}, {
  immediate: true,
})

</script>
