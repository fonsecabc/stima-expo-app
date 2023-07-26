import { Client } from '.'
import { NutritionalRoutineStatus } from '../enums'

export type Evaluation = {
    uid: string
    userUid: string
    clientName: string
    clientUid: string
    bioimpedance: object
    measurements: object
    nutricionistForm: object
    nutritionalRoutineStatus: NutritionalRoutineStatus
    nutritionalRoutineLink?: string
    createdAt: Date
    deletedAt?: Date
}
