import { auth } from '../../main/config'
import { handleErrorService } from '../../application/services'
import { LoginWithEmailAndPasswordContract, SendResetPasswordEmailContract } from '../../application/contracts'

import * as authentication from 'firebase/auth'
export class AuthRepository implements 
LoginWithEmailAndPasswordContract,
SendResetPasswordEmailContract {
    public static readonly instance: AuthRepository = new AuthRepository()

    async loginWithEmailAndPassword(params: LoginWithEmailAndPasswordContract.Params): Promise<LoginWithEmailAndPasswordContract.Response> {
        const { email, password } = params
        try {
            return (await authentication.signInWithEmailAndPassword(auth, email, password)).user
        } catch (err: any) {
            return await handleErrorService(err.code)
        }
    }
    
    async sendResetPasswordEmail(params: SendResetPasswordEmailContract.Params): Promise<SendResetPasswordEmailContract.Response> {
        const { email } = params
        try {
            await authentication.sendPasswordResetEmail(auth, email)
            
            return true
        } catch (err: any) {
            return await handleErrorService(err.code)
        }
    }

    async signOut(): Promise<true | Error> {
        try {
            await authentication.signOut(auth)
            
            return true
        } catch(err: any) {
            return await handleErrorService(err.code)
        }
    }


}