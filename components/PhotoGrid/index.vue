<template>
  <div class="photo-grid-wrapper">
    <div v-if="photos?.length || ['pending'].includes(status)" class="photo-grid">
      <template v-if="photos?.length">
        <PhotoGridItem v-for="({ name, id, urls, location, height, width }, index) in photos" :key="index"
          :deets="{ index, id, name, urls, location, height, width }" />
      </template>
      <template v-else-if="status === 'pending' && !photos?.length">
        <PhotoGridItemLoader v-for="index in perPage" :index="index - 1" :key="index" />
      </template>
    </div>
    <template v-else-if="status === 'success' && !photos?.length">
      <NoResult />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PhotoDetails } from '~/types'
const route = useRoute()
const { status } = defineProps<{
  status: 'pending' | 'idle' | 'success' | 'error',
  photos: PhotoDetails[]
}>()

const perPage = computed(() => Number(route.query.per_page) || 12);
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
      padding: 0 15px;

      div {
        border-radius: 2px;
        background-color: rgb(231 231 231);
        height: 12px;

        &:first-of-type {
          width: 60%;
        }

        &:last-of-type {
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
