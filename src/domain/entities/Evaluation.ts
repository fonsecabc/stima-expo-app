import { Client } from '.'
import { NutritionalRoutineStatus } from '../enums'

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
