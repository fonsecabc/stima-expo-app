import { 
    InvalidParamError,
    NetworkError, 
} from '../../domain/errors'

export type ErrorMap = Map<string,Error>

export const ErrorMap: ErrorMap = new Map([
    ['auth/user-not-found', new InvalidParamError('Email')],
    ['auth/invalid-email', new InvalidParamError('Email')],
    ['auth/wrong-password', new InvalidParamError('Senha')],
    ['Network Error', new NetworkError()],

])