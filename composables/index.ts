import { computed } from 'vue'

export const useHeightClass = (index: number) => {
  return computed(() => {
    let className

    // random logics to generate randomly scattered but arranged columns for loader 
    if (index === 0) {
      className = 'height-4'
    } else if (index === 1) {
     className = 'height-4'
    } else if (index === 2) {
      className = 'height-4'
    } else if (index % 3 === 0) {
      className = 'height-4'
    } else if (index % 5 === 0) {
      className = 'height-5'
    } else if (index % 7 === 0) {
      className = 'height-2'
    } else {
      className = 'height-2'
    }

    return className
  })
}