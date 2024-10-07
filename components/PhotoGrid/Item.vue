<template>
  <div :class="['photo-grid-item']" @click="openModal">
    <NuxtImg :src="currentImage" object-fit="cover" layout="responsive" width="300" height="400"
      :alt="deets.alt_description" class="photo" @load="handleImageLoad"
      :class="[currentImage === deets.urls?.thumb ? 'low-quality' : '']" loading="lazy" />
    <div class="overlay" />
    <div class="text" :style="{ animationDelay: `${deets.index * 0.5}s` }">
      <h3>{{ deets.name }}</h3>
      <p>{{ deets.location || 'Unknown Location' }}</p>
    </div>
  </div>
  <PhotoGridModal :deets="deets" :currentImage="currentImage" :isVisible="isModalVisible" @close="closeModal" />
</template>

<script setup lang="ts">
import type { PhotoDetails } from '~/types'

const { deets } = defineProps<{
  deets: PhotoDetails
}>()
const currentImage = ref(deets.urls?.thumb);

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const handleImageLoad = () => {
  currentImage.value = deets.urls?.regular;
}
</script>

<style scoped>
/* .photo-grid-item {
  animation: move-up-sm 0.9s ease-in-out forwards;
} */
.photo-grid-item:hover .photo {
  transform: scale(1.05);
}

.photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform var(--base-anim-duration) ease-in-out, filter var(--base-anim-duration) ease-in-out, opacity var(--base-anim-duration) ease-in-out;

  &.low-quality {
    filter: blur(3px);
    transition: opacity var(--base-anim-duration) ease-in-out;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity var(--base-anim-duration) ease;
}

.text {
  /* text-align: center; */
  color: #fff;
  position: absolute;
  bottom: 30px;
  left: 15px;
  opacity: 0;
  transition: transform var(--base-anim-duration) ease-in-out;
  animation: move-up-sm-position 0.7s ease-in-out forwards;
  /* animation-delay: 0.8s; */

  & p {
    font-size: 12px;
    opacity: 0.8;
  }
}

.photo-grid-item:hover .text {
  transform: scale(1.03);
}
</style>
