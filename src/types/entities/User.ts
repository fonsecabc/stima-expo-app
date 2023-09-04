export type User = {
    uid: string
    name: string
    email: string
    isActive: boolean
    isEnabled: boolean
    createdAt: Date
    deletedAt?: Date
}
