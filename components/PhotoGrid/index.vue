<template>
  <div class="photo-grid-wrapper">
    <div v-if="(photos && photos?.length) || ['idle', 'pending'].includes(status)" class="photo-grid">
      <template v-if="photos?.length">
        <PhotoGridItem v-for="(deets, index) in photos" :key="index" :deets="{ ...deets, index }" />
      </template>
      <template v-else-if="['idle', 'pending'].includes(status) && !photos?.length">
        <PhotoGridItemLoader v-for="index in perPage" :index="index - 1" :key="index" />
      </template>
    </div>
    <template v-else-if="['error', 'idle', 'success'].includes(status) && !photos?.length">
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
  padding: 0 40px;
  top: 0px;
  opacity: 0;
  animation: move-up-opacity 1s ease-in-out 0.8s forwards;

  .photo-grid {
    max-width: 1200px;
    margin: 0 auto;
    columns: 3 300px;
    gap: 25px 30px;
    padding: 0 70px;
  }
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
    cursor: -webkit-zoom-in;
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

/* breakpoints */
@media screen and (max-width: 1024px) {
  .photo-grid {
    columns: 2 300px;
  }
}

@media screen and (max-width: 640px) {
  .photo-grid-wrapper {
    padding: 0 20px;

    .photo-grid {
      columns: 1 300px;
      padding: 0;
    }
  }
}

@keyframes move-up-opacity {
  50% {
    opacity: 0.8;
  }
  100% {
    top: -40px;
    opacity: 1;
  }
}
</style>