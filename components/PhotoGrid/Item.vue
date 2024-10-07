<template>
  <div :class="['photo-grid-item', getGridItemClass(deets.index)]" @click="openModal">
    <NuxtImg :src="currentImage" object-fit="cover" layout="responsive" width="300" height="400"
      :alt="`Photo of ${deets.name}`" class="photo" @load="handleImageLoad"
      :class="[currentImage === deets.urls?.thumb ? 'low-quality' : '']" />
    <div class="overlay" />
    <div class="text" :style="{ animationDelay: `${deets.index * 0.5}s` }">
      <h3>{{ deets.name }}</h3>
      <p>{{ deets.location }}</p>
    </div>
  </div>
  <PhotoGridModal :deets="deets" :currentImage="currentImage" :isVisible="isModalVisible" @close="closeModal" />
</template>

<script setup lang="ts">
import { useGridItemClass } from '~/composables'

const { deets } = defineProps({
  deets: {
    type: Object,
    required: true
  },
})

const currentImage = ref(deets.urls?.thumb);

const isModalVisible = ref(false);

const getGridItemClass = (index: number) => useGridItemClass(index).value

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
  transform: scale(1.03);
}

.photo {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform var(--base-anim-duration) ease-in-out, filter var(--base-anim-duration) ease-in-out, opacity var(--base-anim-duration) ease-in-out;

  &.low-quality {
    filter: blur(3px);
    transition: opacity var(--base-anim-duration) ease;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
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
