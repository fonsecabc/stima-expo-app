export function formatDate(date: Date): string {
  if (date instanceof Date === false) {
    date = new Date(date)
  }

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export function getAge(dateOfBirth: string) {
  const today = new Date()
  const [ birthDay, birthMonth, birthYear ] = dateOfBirth.split('/')
  let age = today.getFullYear() - +birthYear
  const month = today.getMonth() - +birthMonth
  if (month < 0 || (month === 0 && today.getDate() < +birthDay)) {
    age--
  }
  return age
}