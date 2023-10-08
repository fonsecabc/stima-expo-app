import { makeRequest } from '@helpers'
import { Card } from '@entities'
import { PaymentMethod } from '@enums'

const endpoint = '/payments'

interface OrderNutritionalRoutineParams {
  accessToken: string
  customerUid: string
  evaluationUid: string
  paymentMethod: PaymentMethod
  card?: Card
}

export async function orderNutritionalRoutine(params: OrderNutritionalRoutineParams){
  return await makeRequest({
    path: `${endpoint}/order/nutritional-routine`, 
    body: params, 
    method: 'POST' 
  })
}