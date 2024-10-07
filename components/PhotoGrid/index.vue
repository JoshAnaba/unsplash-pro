<template>
  <div class="photo-grid-wrapper">
    <div v-if="photos?.length || isLoading" class="photo-grid">
      <template v-if="photos?.length">
        <PhotoGridItem v-for="({ name, id, urls, location, height, width }, index) in photos" :key="index"
          :deets="{ index, id, name, urls, location, height, width }" />
      </template>
      <template v-else-if="isLoading && !photos?.length">
        <PhotoGridItemLoader v-for="index in query.per_page" :index="index - 1" :key="index" />
      </template>
    </div>
    <template v-else-if="!isLoading && !photos?.length">
      <NoResult />
    </template>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const query = reactive({
  page: 1,
  per_page: 12,
})
const config = useRuntimeConfig()

const apiUrl = computed(() => {
  if (route.name === 'search-id' && route.params.id) {
    return `${config.public.apiBaseUrl}/search/photos?query=${route.params.id}`
  } else {
    return `${config.public.apiBaseUrl}/photos`
  }
})

const { data: photos, pending: isLoading, error } = await useAsyncData('photos', async () => {
  const headers = {
    Authorization: `Client-ID ${config.public.ACCESS_TOKEN}`,
  }

  return await $fetch(apiUrl.value, {
    headers,
    query,
  })
}, {
  server: false,
  transform: (photos) => {
    return route.name === 'search-id' ? photos.results.map(photo => ({ id: photo.id, name: photo.user.name, urls: photo.urls, height: photo.height, width: photo.width })) : photos.map(photo => ({ id: photo.id, name: photo.user.name, urls: photo.urls, height: photo.height, width: photo.width }))
  },
})

</script>

<style>
.photo-grid-wrapper {
  position: relative;
  top: -40px;
  padding: 0 40px;
}

.photo-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px 30px;
  grid-auto-rows: 130px;
  padding: 0 70px;
}

.photo-grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:not(.loader) {
    cursor: pointer;
  }

  &.loader {
    background-color: rgb(246 246 246);

    .text {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: absolute;
      bottom: 30px;
      left: 15px;

      div {
        border-radius: 2px;
        background-color: rgb(231 231 231);
        height: 12px;

        :first-of-type {
          width: 60%;
        }

        :last-of-type {
          width: 40%;
        }
      }
    }
  }
}

.photo-grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.span-row-2 {
  grid-row: span 2;
}

.span-row-3 {
  grid-row: span 3;
}

.span-row-4 {
  grid-row: span 4;
}

.span-row-5 {
  grid-row: span 5;
}

/* breakpoints */
@media screen and (max-width: 1024px) {
  .photo-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
    padding: 0 40px;
  }
}

@media screen and (max-width: 640px) {
  .photo-grid-wrapper {
    padding: 0 20px;
  }

  .photo-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
    padding: 0px;
  }

  .span-row-2,
  .span-row-3,
  .span-row-4,
  .span-row-5 {
    grid-column: span 2;
    grid-row: span 2;
  }
}
</style>
