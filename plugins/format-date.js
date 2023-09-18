export default ({ app }, inject) => {
  inject('formatDate', (inputDateString) => {
    // Parse the input date string into a Date object
    const inputDate = new Date(inputDateString)

    // Define arrays for mapping months and days
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Get the day, month, and year components
    const dayOfWeek = days[inputDate.getUTCDay()]
    const month = months[inputDate.getUTCMonth()]
    const dayOfMonth = inputDate.getUTCDate()

    return `${dayOfWeek}, ${month} ${dayOfMonth}`
  })
}
