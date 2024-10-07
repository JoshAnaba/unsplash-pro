export const useQueryParams = () => {
  const route = useRoute()
  const router = useRouter()

  const query = ref({
    page: Number(route.query.page) || 1,
    per_page: Number(route.query.per_page) || 12
  })

  watch(query, (newQuery) => {
    router.replace({
      query: {
        ...route.query,
        page: newQuery.page,
        per_page: newQuery.per_page
      }
    })
  })

  watch(route, () => {
    query.value.page = Number(route.query.page) || 1
    query.value.per_page = Number(route.query.per_page) || 12
  })

  const ensureQueryParams = () => {
    if (!route.query.page || !route.query.per_page) {
      router.replace({
        query: {
          ...route.query,
          page: query.value.page,
          per_page: query.value.per_page
        }
      })
    }
  }

  onMounted(() => {
    ensureQueryParams()
  })

  return { query }
}
