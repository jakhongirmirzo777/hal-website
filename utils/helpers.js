export const $generateYears = (min, max = new Date().getFullYear()) => {
  const years = max - min + 1
  return Array.from({ length: years }, (_, index) => ({
    text: max - index,
    value: max - index,
  }))
}
