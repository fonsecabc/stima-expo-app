export type input = {
  name: string
  label: string
  placeholder?: string
  description?: string
  value: any
  type: 'text' | 'select' | 'multiSelect'
  items?: Array<any>
  mask?: string
  isRequired: boolean
  isSecured?: boolean
  validate?: 'email' | 'dateOfBirth' | 'phone' | 'password' | 'numberHigherThanZero' | 'time' | 'cardNumber'
}