import { makeRequest } from '@helpers'
import { Card, Order, Subscription } from '@entities'
import { PaymentMethod, SubscriptionType } from '@enums'

const endpoint = '/payments'

interface OrderNutritionalRoutineParams {
  accessToken: string
  customerUid: string
  evaluationUid: string
  paymentMethod: PaymentMethod
  card?: Card
}

interface CreateSubscriptionParams {
  accessToken: string
  userUid: string
  customerUid: string
  subscriptionType: SubscriptionType
  paymentMethod: PaymentMethod
  card: Card
}

export async function orderNutritionalRoutine(params: OrderNutritionalRoutineParams){
  return await makeRequest<Order>({
    path: `${endpoint}/order/nutritional-routine`, 
    body: params, 
    method: 'POST' 
  })
}

export async function createSubscription(params: CreateSubscriptionParams){
  return await makeRequest<Subscription>({
    path: `${endpoint}/subscription/create`, 
    body: params, 
    method: 'POST' 
  })
}