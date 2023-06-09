import { User as FirebaseUser } from 'firebase/auth'

export interface User extends FirebaseUser {
    uid: string
    name: string
    email: string
    isActive: boolean
    isEnabled: boolean
    createdAt: Date
    deletedAt?: Date
}
