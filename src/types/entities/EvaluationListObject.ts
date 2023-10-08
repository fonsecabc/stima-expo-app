import { NutritionalRoutineStatus } from '@enums'

export type EvaluationListObject = {
    uid: string
    userUid: string
    clientUid: string
    clientName: string
    nutritionalRoutineStatus: NutritionalRoutineStatus
    nutritionalRoutineLink?: string
    createdAt: Date
}
