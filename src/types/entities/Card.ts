import { Address } from '@entities'

export interface Card {
  number: string
  holderName: string
  expirationMonth: number
  expirationYear: number
  cvv: string
  billingAddress: Address
}
