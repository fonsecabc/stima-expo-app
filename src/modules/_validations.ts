import validator from 'validator'

export const checkPhone = (phone: string) => {
  const regex = /\(\d\d\)\s\d\d\d\d\d-\d\d\d\d/i

  return regex.test(phone) ? undefined : 'Numero de telefone inválido'
}

export const checkDateOfBirth = (dateOfBirth: string) => {
  const regex = /\d\d\/\d\d\/\d\d\d\d/i
  const isValidFormat = regex.test(dateOfBirth)
  if (!isValidFormat) return 'Data de nascimento inválida'

  const [day, month, year] = dateOfBirth.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  const today = new Date()
  const yearDifference = today.getFullYear() - date.getFullYear()

  return yearDifference < 120 ? undefined : 'Data de nascimento inválida'
}

export const checkEmail = (email: string) => {
  const isValid = validator.isEmail(email)

  return isValid ? undefined : 'Email inválido'
}

export const checkPassword = (password: string) => {
  const uniqueChars = [...new Set(password)]
  const hasSpecialCharacters = /[!@#$%^&*(),.?':{}|<>]/.test(password)

  const isValid = (uniqueChars.length > 2 && password.length >= 8 && hasSpecialCharacters)

  return isValid ? undefined : 'Senha muito fraca'
}

export const checkValue = (value: string) => {
  return value ? undefined : 'Esse campo é obrigatório'
}

export const checkNumberHigherThanZero = (value: string) => {
  if (!value) return 'Esse campo é obrigatório'

  return +value >= 0 ? undefined : 'Valor não pode ser menor ou igual a zero'
}