import { computed } from 'vue'

export const useGridItemClass = (index: number) => {
  return computed(() => {
    let className = 'grid-item'

    // random logics to generate randomly scattered but arranged grids
    if (index === 0) {
      className = `${className} span-row-3`
    } else if (index === 1) {
     className = `${className} span-row-4`
    } else if (index === 2) {
      className = `${className} span-row-2`
    } else if (index % 3 === 0) {
      className = `${className} span-row-4`
    } else if (index % 5 === 0) {
      className = `${className} span-row-5`
    } else if (index % 7 === 0) {
      className = `${className} span-row-3`
    } else {
      className = `span-row-2`
    }

    return className
  })
}