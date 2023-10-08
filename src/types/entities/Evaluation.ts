import { Client, Measurements, Bioimpedance, NutritionistForm } from '@entities'
import { NutritionalRoutineStatus, PaymentStatus } from '@enums'

export type Evaluation = {
    uid: string
    userUid: string
    client: Client
    bioimpedance: Bioimpedance
    measurements: Measurements
    nutricionistForm: NutritionistForm
    nutritionalRoutineStatus: NutritionalRoutineStatus
    nutritionalRoutinePaymentStatus?: PaymentStatus 
    orderUid?: string
    nutritionalRoutineLink?: string
    createdAt: any
    deletedAt?: any
}
