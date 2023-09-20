export const $generateYears = (min, max = new Date().getFullYear()) => {
  const years = max - min + 1
  return Array.from({ length: years }, (_, index) => max - index)
}
