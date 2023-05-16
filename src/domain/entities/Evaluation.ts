import { Client } from '@/domain/entities'
import { NutritionalRoutineStatus } from '@/domain/enums'

export type Evaluation = {
    uid: string
    userUid: string
    client: Client
    bioimpedance: object
    measurements: object
    nutricionistForm: object
    nutritionalRoutineStatus: NutritionalRoutineStatus
    nutritionalRoutineLink?: string
    createdAt: Date
    deletedAt?: Date
}
