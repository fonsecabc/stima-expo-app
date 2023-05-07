import { Client } from '@/domain/entities'

export interface Evaluation {
    uid: string
    userUid: string
    client: Client
    bioimpedance: object
    measurements: object
    nutricionistForm: object
    nutritionalRoutine: string
    createdAt: Date
}
