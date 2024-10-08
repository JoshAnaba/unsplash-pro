<template>
  <transition name="modal">
    <div v-if="isVisible" class="modal-overlay" @click.stop="closeModal">
      <div class="modal-content-wrapper">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
          <div class="photo-container">
            <NuxtImg :src="currentImage" object-fit="cover" layout="responsive" :width="300" :height="400"
              :alt="deets.alt_description" class="modal-photo" loading="lazy"
              :class="[currentImage === deets.urls?.thumb ? 'low-quality' : '']" />
          </div>

          <div class="bottom">
            <h3>{{ deets.name }}</h3>
            <p>{{ deets.location || 'Unknown Location' }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const { deets, currentImage, isVisible } = defineProps({
  deets: {
    type: Object,
    required: true
  },
  currentImage: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  z-index: 50;
  cursor: -webkit-zoom-out;
}

.modal-content-wrapper {
  position: relative;
  width: 80%;
  margin: 80px 0 0;
  display: flex;
  justify-content: center;
}

.modal-content {
  position: relative;
  border-radius: 11px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: fit-content;
  width: fit-content;
  cursor: default;
  animation: zoom-in-sm var(--base-anim-duration) ease-in-out forwards;

  .photo-container {
    max-height: 80%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    max-width: 80vw;
    min-width: 400px;
    max-height: 70vh;
  }

  .bottom {
    padding: 20px 30px 40px;

    h3 {
      font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      color: #272727;
      font-size: 12px;
    }

  }
}

.modal-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--base-anim-duration) ease-in-out;

  &.low-quality {
    filter: blur(3px);
    transition: opacity var(--base-anim-duration) ease;
  }
}

.close-btn {
  position: absolute;
  top: -20px;
  right: -80px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;

  svg {
    transition: transform var(--base-anim-duration) ease-in-out;
  }

  &:hover svg {
    transform: rotate(180deg) scale(1.2);
  }
}


.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transition: opacity var(--base-anim-duration) ease-in-out, transform var(--base-anim-duration) ease-in-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

@media screen and (max-width: 640px) {
  .modal-overlay {
    align-items: center;
  }

  .modal-content-wrapper {
    margin: 20px 0 0;
  }

  .modal-content {
    border-radius: 19px;

    .photo-container {
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }

    img {
      min-width: 90vw !important;
      max-width: 90vw !important;
      height: fit-content;
    }
  }

  .bottom {
    padding: 20px 15px 20px;
  }

  .close-btn {
    top: 5px;
    right: 5px;
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: #161616
    }
  }
}
</style>
