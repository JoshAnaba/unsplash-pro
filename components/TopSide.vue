<template>
  <div :class="['top-side', !route.params.id ? 'anim' : '']">
    <div class="inner">
      <div v-if="!route.params.id" class="search-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="rgb(84 84 94)" width="20" height="20">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
        <input type="text" v-model="searchQuery" placeholder="Search for photo" @keypress.enter="updateSearch" />
      </div>
      <template v-else>
        <div class="search-results">
          <button @click="router.push('/')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path fill-rule="evenodd" stroke="2"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd" />
            </svg>
            Back
          </button>
          <h2 v-if="status !== 'success'">Searching for <span>"{{ route.params.id }}"</span></h2>
          <h2 v-else>Search Results for <span>"{{ route.params.id }}"</span></h2>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { status } = defineProps<{
  status: 'pending' | 'idle' | 'success' | 'error'
}>()
const searchQuery = ref<string>('')
const updateSearch = () => {
  router.push(`/search/${searchQuery.value}`)
}
</script>

<style lang="scss" scoped>

h2 {
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: rgb(36 53 74);

  span {
    font-size: inherit;
    font-weight: inherit;
    text-transform: capitalize;
    color: rgb(108 123 141);
  }
}

.search-results {
  /* padding: 0 40px; */

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
    padding: 3px 12px;
    border-radius: 8px;
    font-weight: 500;
    color: rgb(108 123 141);
    transition: all var(--base-anim-duration) ease-in-out;

    &:hover {
      background-color: rgba(108, 123, 141, 0.1);
    }
  }
}

.top-side {
  --top-side-height: 320px;
  --initial-top-side-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(.anim) {
    height: var(--top-side-height);
  }

  &.anim {
    height: var(--initial-top-side-height);
    animation: shrink-height 0.8s ease-in-out forwards;
  }

  .inner {
    display: flex;
    align-items: center;
    width: 80%;
    animation: move-down-sm 0.8s ease-in-out forwards;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  &:not(.anim):after {
    height: var(--top-side-height);
    background-color: rgb(221 227 234);
  }

  &.anim:after {
    height: var(--initial-top-side-height);
    background-color: #fff;
    animation: shrink-height 0.8s ease-in-out forwards;
  }

  .search-container {
    position: relative;
    display: inline-block;
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #fff;
    transform: scale(0.9);
    animation: scale-search-bar 1s ease-in-out forwards;

    svg {
      position: absolute;
      top: 50%;
      transform: translate(20px, -50%)
    }

    input {
      position: relative;
      width: 100%;
      padding: 15px 16px 15px 58px;
      height: 80px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ddd;
      background-color: transparent;
      z-index: 1;
      outline: none;
      font-weight: 600;
      transition: box-shadow var(--base-anim-duration) ease-in-out;
      box-shadow: 0 5px 20px #0000001a;

      &:focus {
        box-shadow: 0 10px 40px #0003;
        ;
      }

      &:placeholder {
        color: rgb(57 61 89);
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .top-side {
    .inner {
      width: 100%;
      padding: 0 20px;

      .search-container {
        input {
          height: 65px;
        }
      }
    }
  }

}

@keyframes shrink-height {
  from {
    height: var(--initial-top-side-height);
  }

  to {
    background-color: rgb(221 227 234);
    height: var(--top-side-height);
  }
}

@keyframes scale-search-bar {
  from {
    width: 80%;
    transform: scale(0.9);
  }

  to {
    width: 100%;
    transform: scale(1.0);
  }
}
</style>
