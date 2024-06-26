import { PaymentMethod, SubscriptionStatus, SubscriptionType } from '@enums'

export interface Subscription {
  uid: string
  startedAt: string
  nextBillingAt: string
  type: SubscriptionType
  status: SubscriptionStatus
  paymentMethod: PaymentMethod
  price: number
  discountPercentage: number
}
