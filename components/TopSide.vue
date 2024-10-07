<template>
  <div class="top-side">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(84 84 94)" width="24" height="24">
              <path fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <h2>Search Results for <span>"{{ route.params.id }}"</span></h2>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const searchQuery = ref<string>('')
const updateSearch = () => {
  router.push(`/search/${searchQuery.value}`)
}
</script>

<style>
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
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    margin-bottom: 5px;
    color: rgb(108 123 141);
  }
}

.top-side {
  --top-side-height: 280px;
  height: var(--top-side-height);
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    display: flex;
    width: 100%;
    align-items: center;
    width: 80%;
    animation: move-down-sm 0.8s ease-in-out forwards;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgb(221 227 234);
    z-index: -1;
    height: var(--top-side-height);
  }

  .search-container {
    position: relative;
    display: inline-block;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

    svg {
      position: absolute;
      top: 50%;
      transform: translate(20px, -50%)
    }

    input {
      position: relative;
      width: 100%;
      padding: 15px 16px 15px 58px;
      height: 60px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid #ddd;
      background-color: transparent;
      z-index: 1;
      outline: none;

      :placeholder {
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
    }
  }
}
</style>
