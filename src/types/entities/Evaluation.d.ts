import { Client } from '.'
import { NutritionalRoutineStatus } from '../enums'

export type Evaluation = {
    uid: string
    userUid: string
    client: Client
    bioimpedance: any
    measurements: any
    nutricionistForm: any
    nutritionalRoutineStatus: NutritionalRoutineStatus
    nutritionalRoutineLink?: string
    createdAt: Date
    deletedAt?: Date
}
