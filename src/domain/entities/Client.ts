import { Sex } from '../enums'

export interface Client {
    uid: string
    userUid: string
    name: string
    email: string
    phone: string
    dateOfBirth: string
    sex: Sex
    lastEvaluatedAt?: Date
    createdAt: Date
    deletedAt?: Date
}
