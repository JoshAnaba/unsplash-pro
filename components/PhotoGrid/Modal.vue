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
              alt="Photo in modal" class="modal-photo" format="webp"
              :class="[currentImage === deets.urls?.thumb ? 'low-quality' : '']" />
          </div>

          <div class="bottom">
            <h3>{{ deets.name }}</h3>
            <p>{{ deets.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
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
}

.modal-content-wrapper {
  position: relative;
  width: 80%;
  max-width: 60vw;
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
  animation: zoom-in-sm 0.4s ease-in-out forwards;

  .photo-container {
    width: fit-content;
    height: fit-content;
    max-height: 80%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  img {
    width: auto;
    min-width: 600px;
    max-width: 80vw;
    height: 70vh;
  }

  .bottom {
    padding: 20px 30px 40px;

    h3 {
      font-weight: 600;
    }

  }
}

.modal-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &.low-quality {
    filter: blur(3px);
    transition: opacity 0.3s ease;
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
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: rotate(180deg) scale(1.2);
  }
}


.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

@media screen and (max-width: 640px) {
  .modal-content {
  border-radius: 19px;

  .photo-container {
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }
}

  img {
    min-width: 90vw !important;
    max-width: 90vw !important;
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
