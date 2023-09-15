export default ({ app }, inject) => {
  inject('scroll', (id, options = {}) =>
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      ...options,
    })
  )
}
