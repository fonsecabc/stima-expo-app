import { Subscription } from '@entities'

export type User = {
    uid: string
    email: string
    createdAt: Date
    customerUid: string
    subscription?: Subscription
    deletedAt?: Date
}
