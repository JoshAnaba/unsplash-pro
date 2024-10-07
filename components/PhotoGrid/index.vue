<template>
  <div class="photo-grid-wrapper">
    <div v-if="photos?.length || ['pending'].includes(status)" class="photo-grid">
      <template v-if="photos?.length">
        <PhotoGridItem v-for="(deets, index) in photos" :key="index" :deets="{ ...deets, index }" />
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
  columns: 3 300px;
  gap: 25px 30px;
  padding: 0 70px;
}

.photo-grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;

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

/* breakpoints */
@media screen and (max-width: 1024px) {
  .photo-grid {
    columns: 2 300px;
  }
}

@media screen and (max-width: 640px) {
  .photo-grid-wrapper {
    padding: 0 20px;
  }

  .photo-grid {
    columns: 1 300px;
    padding: 0 0
  }
}
</style>
