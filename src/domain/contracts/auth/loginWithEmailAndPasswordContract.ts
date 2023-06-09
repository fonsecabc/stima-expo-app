import { User as FirebaseUser } from 'firebase/auth'

export interface LoginWithEmailAndPasswordContract {
    loginWithEmailAndPassword: (params: LoginWithEmailAndPasswordContract.Params) => Promise<LoginWithEmailAndPasswordContract.Response>
}

export namespace LoginWithEmailAndPasswordContract {
    export type Params = {
        email: string
        password: string
    }

    export type Response = FirebaseUser | Error
}