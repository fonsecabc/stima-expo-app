import { auth } from '../../main/config'
import * as authentication from 'firebase/auth'
import { LoginWithEmailAndPasswordContract, SendResetPasswordEmailContract } from '../../domain/contracts'
import { EntityDoesntExistError, InvalidParamError, UnknownError } from '../../domain/errors'

export class AuthRepository implements 
LoginWithEmailAndPasswordContract,
SendResetPasswordEmailContract {
    public static readonly instance: AuthRepository = new AuthRepository()
    private ErrorMap: Map<string,Error> = new Map([
        ['auth/user-not-found', new EntityDoesntExistError('Usuário')],
        ['auth/invalid-email', new InvalidParamError('Email')],
        ['auth/wrong-password', new InvalidParamError('Senha')],
    ])

    async loginWithEmailAndPassword(params: LoginWithEmailAndPasswordContract.Params): Promise<LoginWithEmailAndPasswordContract.Response> {
        const { email, password } = params
        try {
            await authentication.signInWithEmailAndPassword(auth, email, password)
            
            return true
        } catch (err: any) {
            return this.ErrorMap.get(err.code) ?? new UnknownError()
        }
    }
    
    async SendResetPasswordEmail(params: SendResetPasswordEmailContract.Params): Promise<SendResetPasswordEmailContract.Response> {
        const { email } = params
        try {
            await authentication.sendPasswordResetEmail(auth, email)
            
            return true
        } catch (err: any) {
            return this.ErrorMap.get(err.code) ?? new UnknownError()
        }
    }
}