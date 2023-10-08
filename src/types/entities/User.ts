import { Subscription } from './'

export type User = {
    uid: string
    email: string
    createdAt: any
    customerUid: string
    subscription?: Subscription
    deletedAt?: any
}
